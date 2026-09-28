# 修复记录

## 6.0.86-appendix-fix.1

- 修复全文翻译在 References 后删除全部 Markdown，导致 Appendix 无法进入翻译流程。
- 增加 Appendix、附录和 Supplementary Material 的章节恢复逻辑。
- 增加页数属性探测与来源日志，并保留 `attachmentText` 和 20 页 fallback。
