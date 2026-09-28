import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const bundle = fs.readFileSync(
  path.join(projectRoot, "plugin", "chrome", "content", "scripts", "zoterostyle.js"),
  "utf8",
);
const helperSource = bundle.match(
  /  function normalizeFulltextHeadingTitle[\s\S]*?\n  var FulltextTranslate = class \{/,
);
assert.ok(helperSource, "patched helper must be present in the release bundle");
const context = {};
vm.runInNewContext(
  `${helperSource[0].replace(/\n  var FulltextTranslate = class \{$/, "")}\nglobalThis.removeReferenceSection = removeReferenceSection;\nglobalThis.normalizeMathLatex = normalizeMathLatex;`,
  context,
);
const { removeReferenceSection } = context;

const protectMathMethod = bundle.match(
  /    protectMath\(text\) \{([\s\S]*?)\n    \}\n    async preloadMathSvgs/,
);
assert.ok(protectMathMethod, "math protection helper must be present in the release bundle");
vm.runInNewContext(
  `globalThis.protectMath = function protectMath(text) {${protectMathMethod[1]}}`,
  context,
);
const restoreMathMethod = bundle.match(
  /    restoreAndRenderMath\(text\) \{([\s\S]*?)\n    \}\n    async md2html/,
);
assert.ok(restoreMathMethod, "math restore helper must be present in the release bundle");
vm.runInNewContext(
  `globalThis.restoreAndRenderMath = function restoreAndRenderMath(text) {${restoreMathMethod[1]}}`,
  context,
);

const pageMethod = bundle.match(
  /    async getTotalPages\(pdfItem, signal\) \{([\s\S]*?)\n    \}\n    async parseByFile/,
);
assert.ok(pageMethod, "page-count helper must be present in the release bundle");
const pageLogs = [];
const pageContext = { ztoolkit: { log: (message) => pageLogs.push(message) } };
vm.runInNewContext(
  `globalThis.getTotalPages = async function getTotalPages(pdfItem, signal) {${pageMethod[1]}}`,
  pageContext,
);
const pageHost = { ensureActive() {} };

const fixtures = [
  {
    name: "References followed by Appendix A",
    input: "# Introduction\n\nMain body.\n\n# References\n\nReference item.\n\n# Appendix A\n\nAppendix body.",
    expected: "# Introduction\n\nMain body.\n\n# Appendix A\n\nAppendix body.",
  },
  {
    name: "Appendix before References",
    input: "# Appendix\n\nAppendix body.\n\n# References\n\nReference item.",
    expected: "# Appendix\n\nAppendix body.",
  },
  {
    name: "No References heading",
    input: "# Introduction\n\nMain body.\n\n# Methods\n\nMethod body.",
    expected: "# Introduction\n\nMain body.\n\n# Methods\n\nMethod body.",
  },
  {
    name: "Supplementary Material after References",
    input: "# References\n\nReference item.\n\n# Supplementary Material\n\nSupplementary body.",
    expected: "# Supplementary Material\n\nSupplementary body.",
  },
  {
    name: "Nested References ends at next same-level heading",
    input: "# Body\n\nText.\n\n## References\n\nReference item.\n\n### Reference notes\n\nMore references.\n\n## Appendix A\n\nAppendix body.\n\n## Methods\n\nMethod body.",
    expected: "# Body\n\nText.\n\n## Appendix A\n\nAppendix body.\n\n## Methods\n\nMethod body.",
  },
  {
    name: "Chinese and heading variants",
    input: "# 正文\n\n内容。\n\n## 参考文献\n\n条目。\n\n### 附录A\n\n附录内容。",
    expected: "# 正文\n\n内容。\n\n### 附录A\n\n附录内容。",
  },
  {
    name: "Bibliography and Appendices variants",
    input: "# Body\n\nText.\n\n# Bibliography\n\nEntry.\n\n# Appendices\n\nSupplementary body.",
    expected: "# Body\n\nText.\n\n# Appendices\n\nSupplementary body.",
  },
  {
    name: "Works Cited and Supplementary Appendix variants",
    input: "# Body\n\nText.\n\n# Works Cited\n\nEntry.\n\n# Supplementary Appendix\n\nSupplementary body.",
    expected: "# Body\n\nText.\n\n# Supplementary Appendix\n\nSupplementary body.",
  },
];

for (const fixture of fixtures) {
  assert.equal(removeReferenceSection(fixture.input), fixture.expected, fixture.name);
}

assert.equal(
  await pageContext.getTotalPages.call(pageHost, { totalPages: 42 }, {}),
  42,
  "prefer a real totalPages value",
);
assert.equal(
  await pageContext.getTotalPages.call(pageHost, { attachmentText: "page 1\n\npage 2" }, {}),
  2,
  "fall back to attachmentText",
);
assert.equal(
  await pageContext.getTotalPages.call(pageHost, {}, {}),
  0,
  "return zero when no page source is available",
);
assert.ok(pageLogs.some((message) => message.includes("totalPages")));
assert.ok(pageLogs.some((message) => message.includes("attachmentText")));

assert.equal(context.normalizeMathLatex("\\bg_white x^2"), "x^2");
assert.equal(context.normalizeMathLatex("\\bgwhite x^2"), "x^2");
assert.equal(context.normalizeMathLatex("\\bg{ white } x^2"), "x^2");
assert.equal(context.normalizeMathLatex("\\bgwhite $$x^2$$"), "$$x^2$$");
const mathHost = { mathCache: [] };
const maskedMath = context.protectMath.call(
  mathHost,
  "$x$ \\(\\bg_white y\\) \\[z\\] $$w$$",
);
assert.equal(mathHost.mathCache.length, 4, "protect all supported math delimiters");
assert.ok(mathHost.mathCache.every((item) => !item.latex.includes("bg_white")));
assert.match(maskedMath, /MTHZ\d+Z/);
assert.equal(context.restoreAndRenderMath.call(mathHost, "MTHZ3Z"), "$y$");
assert.match(bundle, /const prefix = item\.isBlock \? "\\\\bg\{white\} "/);

console.log(`fulltextTranslate fixtures passed (${fixtures.length}); page-count and bg_white checks passed`);
