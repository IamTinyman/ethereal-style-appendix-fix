import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const pluginDir = join(projectRoot, "plugin");
const distDir = join(projectRoot, "dist");
const output = join(distDir, "ethereal-style-6.0.86-appendix-fix.1.xpi");

if (!existsSync(join(pluginDir, "manifest.json"))) {
  throw new Error(`Missing plugin manifest: ${join(pluginDir, "manifest.json")}`);
}
if (!existsSync(join(pluginDir, "chrome", "content", "scripts", "zoterostyle.js"))) {
  throw new Error("Missing patched release bundle");
}

mkdirSync(distDir, { recursive: true });
rmSync(output, { force: true });
execFileSync("zip", ["-qr", output, "."], { cwd: pluginDir, stdio: "inherit" });
console.log(output);
