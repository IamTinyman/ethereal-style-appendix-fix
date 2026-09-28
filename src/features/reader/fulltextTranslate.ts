/**
 * Helpers used by Ethereal Style's full-text translation pipeline.
 *
 * The checked-in `plugin/` directory is the unpacked 6.0.86 release used by
 * Zotero 10.0.4. The release ships a bundled script, so the build artifact is
 * patched with the same implementation below.
 */

function normalizeFulltextHeadingTitle(title: string): string {
  return title
    .replace(/\s+\{#[^}]+\}\s*$/, "")
    .replace(/\s+#+\s*$/, "")
    .replace(/[\s:：]+$/, "")
    .trim();
}

/** Remove only the References section while retaining following appendices. */
export function removeReferenceSection(markdown: string): string {
  if (!markdown) return markdown;

  const lines = markdown.split(/\r?\n/);
  let skipping = false;
  let referenceLevel = 0;
  let removedReference = false;

  const isReferenceTitle = (title: string) =>
    /^(references|bibliography|works cited|literature cited|参考文献)$/i.test(
      normalizeFulltextHeadingTitle(title),
    );
  const isAppendixTitle = (title: string) =>
    /^(?:appendix|appendices|supplementary\s+(?:material|materials|appendix|appendices))(?=\s|$|[:：])|^附录(?:\s*[A-Za-z0-9一二三四五六七八九十百千]+)?(?=\s|$|[:：])/i.test(
      normalizeFulltextHeadingTitle(title),
    );

  const cleaned = lines
    .filter((line) => {
      const heading = line.match(/^(#{1,6})\s+(.+?)\s*$/);
      if (heading) {
        const level = heading[1].length;
        const title = heading[2].trim();

        if (!skipping && isReferenceTitle(title)) {
          skipping = true;
          referenceLevel = level;
          removedReference = true;
          return false;
        }

        if (skipping && (isAppendixTitle(title) || level <= referenceLevel)) {
          skipping = false;
        }
      }

      return !skipping;
    })
  return removedReference && skipping ? cleaned.replace(/\n+$/, "") : cleaned;
}

export interface FulltextPageCountItem {
  attachmentText?: string | Promise<string>;
  totalPages?: number | string | (() => number | string | Promise<number | string>);
  pageCount?: number | string | (() => number | string | Promise<number | string>);
  attachmentPageCount?:
    | number
    | string
    | (() => number | string | Promise<number | string>);
  indexedPages?: number | string | (() => number | string | Promise<number | string>);
}

export type FulltextPageCountLogger = (message: string) => void;

/**
 * Prefer a real page count when the host exposes one and keep the indexed text
 * estimate as a fallback for Zotero versions that do not expose it.
 */
export async function getTotalPages(
  pdfItem: FulltextPageCountItem,
  log: FulltextPageCountLogger = () => undefined,
): Promise<number> {
  const candidates = ["totalPages", "pageCount", "attachmentPageCount", "indexedPages"] as const;

  for (const property of candidates) {
    try {
      const candidate = pdfItem?.[property];
      const rawValue =
        typeof candidate === "function"
          ? await candidate.call(pdfItem)
          : await candidate;
      const value = Number(rawValue);
      if (Number.isInteger(value) && value > 0) {
        log(`[Page Strategy] 通过 ${property} 获取页数: ${value}`);
        return value;
      }
    } catch (error) {
      log(`[Page Strategy] 读取 ${property} 失败: ${String(error)}`);
    }
  }

  try {
    const text = await pdfItem?.attachmentText;
    if (typeof text === "string" && text.length > 0) {
      const value = Math.max(1, text.split("\n\n").length);
      log(`[Page Strategy] 成功通过 attachmentText 获取页数: ${value}`);
      return value;
    }
  } catch (error) {
    log(`[Page Strategy] 获取 attachmentText 失败: ${String(error)}`);
  }

  return 0;
}
