# Ethereal Style Appendix Fix

这是一个面向 Zotero 10 的 Ethereal Style 全文翻译修复版本。

修复目标：当 Markdown 中出现 `References/参考文献` 后，后面的
`Appendix/附录` 或 `Supplementary Material` 不应被一起删除。

## 为什么制作这个分支

本项目基于本机安装的 Ethereal Style `6.0.86` XPI 解包并修复。

我检查了官方仓库 `MuiseDestiny/zotero-style` 的公开历史：

- 2023-12-13：有一次实际代码修复提交 `7d12463`；
- 2023-12-14：合并一次 Pull Request `757a124`；
- 2024-07-23：提交为 README 更新；
- 2024-11-29：提交为 README 更新；
- 2026-04-20：最新公开提交仍为 README 更新。

因此，从 2023 年 9 月至今，官方 `master` 仍有少量提交，但后续公开维护主要
体现在 release/tag 和说明文档，源码没有持续同步本地使用的 `6.0.86` XPI。

官方页面：

- [官方仓库](https://github.com/MuiseDestiny/zotero-style)
- [master 提交记录](https://github.com/MuiseDestiny/zotero-style/commits/master)
- [官方 Releases](https://github.com/MuiseDestiny/zotero-style/releases)
- [官方 Tags](https://github.com/MuiseDestiny/zotero-style/tags)

本项目因此保留为一个个人修复分支快照，不代表官方仓库，也不自动跟踪上游。

## 修复内容

### 1. References 不再吞掉后续章节

旧逻辑从 `References` 标题开始删除到文档结尾，因此会误删 Appendix。

现在使用标题层级状态机：

- 进入 `References`、`Bibliography`、`Works Cited`、`Literature Cited` 或
  `参考文献` 时，开始跳过参考文献；
- 遇到下一个同级或更高级标题时，恢复正常处理；
- 遇到 `Appendix`、`Appendices`、`附录` 或 `Supplementary Material` 时，立即恢复；
- 正文、公式、表格、翻译和快照流程保持不变。

实际运行代码位于：

```text
plugin/chrome/content/scripts/zoterostyle.js
```

可读的修复 helper 位于：

```text
src/features/reader/fulltextTranslate.ts
```

### 2. 页数获取增加安全 fallback

页数会按以下顺序尝试：

1. `totalPages`、`pageCount` 等宿主提供的页数属性；
2. Zotero 的 `attachmentText` 估算；
3. 最后使用原有的 20 页 fallback。

每种来源都会写入日志，便于确认 MinerU 实际收到的页码范围。

## 测试

测试覆盖：

- References 后有 Appendix；
- Appendix 在 References 前；
- 没有 References；
- References 后有 Supplementary Material；
- 多级标题；
- 中文 `参考文献` 和 `附录`；
- Bibliography、Works Cited 等标题变体；
- 页数属性、`attachmentText` 和 fallback。

运行测试：

```bash
npm test
```

当前结果：8 个章节 fixture 和页数检查全部通过。

## 构建 XPI

```bash
npm run build:xpi
```

产物：

```text
dist/ethereal-style-6.0.86-appendix-fix.1.xpi
```

插件 ID 和版本保持为：

```text
zoterostyle@polygon.org
6.0.86
```

保持原 ID 是为了替换现有 Ethereal Style，而不是与官方插件并行安装。

## 安装说明

在 Zotero 中打开 **Tools → Plugins**，通过右上角齿轮选择
**Install Plugin From File…**，然后选择 `dist/` 下的 XPI。

如果 Zotero 检测到同 ID 的旧版本，先备份并卸载旧 Ethereal Style，再安装本版本。

## 目录说明

```text
plugin/     从本机 6.0.86 XPI 解包后的插件运行目录
src/        本次修复的可读源码 helper
tests/      Markdown 和页数测试
scripts/    XPI 打包脚本
dist/       可安装 XPI
```

## 范围和限制

- 不修改 Translate for Zotero；
- 不修改 MinerU 接口；
- 不修改 Zotero 数据库、PDF 或用户配置；
- 不包含 Zotero profile、API key、缓存和日志；
- 本目录来自已安装 XPI 的编译 bundle，不是官方完整 TypeScript 源码的镜像；
- 官方 Pro 加密资源仍绑定原插件版本，不能随意修改插件 ID 或版本号。

## License

Ethereal Style 的原始许可和上游版权归原项目所有。这个分支只包含针对全文翻译章节清理逻辑的个人修复。
