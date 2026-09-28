pref("extensions.zotero.zoterostyle.enable", true);
// Feature availability is independent of the last selected list/gallery view.
pref("extensions.zotero.zoterostyle.function.galleryView.enable", true);
pref("extensions.zotero.zoterostyle.galleryView.enabled", false);
pref("extensions.zotero.zoterostyle.galleryView.mode", "gallery");
pref("extensions.zotero.zoterostyle.galleryView.contentType", "items");
pref(
  "extensions.zotero.zoterostyle.galleryView.noteFields",
  '["title","source","tags"]',
);
pref(
  "extensions.zotero.zoterostyle.galleryView.annotationFields",
  '["title","source","page","tags"]',
);
pref("extensions.zotero.zoterostyle.galleryView.cardLayout", "vertical");
pref(
  "extensions.zotero.zoterostyle.galleryView.fields",
  '["title","creator","year","publicationTitle","tags"]',
);
pref("extensions.zotero.zoterostyle.galleryView.groupBy", "itemType");
pref("extensions.zotero.zoterostyle.galleryView.boardOrder", "{}");
pref("extensions.zotero.zoterostyle.prefs.activeTab", "tab-columns");
pref("extensions.zotero.zoterostyle.prefs.proActiveTab", "pro-tab-vertabs");

pref("extensions.zotero.zoterostyle.function.menuVisibility.enable", false);

pref("extensions.zotero.zoterostyle.function.canvas.enable", true);

pref("extensions.zotero.zoterostyle.function.marginAnnotation.enable", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.isEnabled", false);
pref("extensions.zotero.zoterostyle.marginAnnotation.sideMode", "auto");
pref("extensions.zotero.zoterostyle.marginAnnotation.density", "comfortable");
pref("extensions.zotero.zoterostyle.marginAnnotation.cardWidth", 288);
pref("extensions.zotero.zoterostyle.marginAnnotation.fontSize", 13);
pref("extensions.zotero.zoterostyle.marginAnnotation.showQuote", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showComment", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showConnectors", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.autoTranslate", false);
pref("extensions.zotero.zoterostyle.marginAnnotation.showHighlight", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showUnderline", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showNote", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showImage", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showText", true);
pref("extensions.zotero.zoterostyle.marginAnnotation.showInk", true);

pref("extensions.zotero.zoterostyle.function.verticalTabManager.enable", true);
pref("extensions.zotero.zoterostyle.verticalTabManager.showHelp", true);
pref("extensions.zotero.zoterostyle.verticalTabManager.expandOnHover", false);

pref("extensions.zotero.zoterostyle.tabManager.selectCloseUI", true);
pref("extensions.zotero.zoterostyle.tabManager.openTabs.reverseSort", false);
pref("extensions.zotero.zoterostyle.tabManager.width", 400);

pref("extensions.zotero.zoterostyle.function.dateAddedColumn.enable", true);
pref("extensions.zotero.zoterostyle.dateAddedColumn.dateType", "absolute");
pref("extensions.zotero.zoterostyle.dateAddedColumn.format", "YYYY/M/D H:m:s");
pref("extensions.zotero.zoterostyle.dateAddedColumn.deltaHour", "8");
pref("extensions.zotero.zoterostyle.dateModifiedColumn.dateType", "absolute");
pref(
  "extensions.zotero.zoterostyle.dateModifiedColumn.format",
  "YYYY/M/D H:m:s",
);
pref("extensions.zotero.zoterostyle.dateModifiedColumn.deltaHour", "8");

pref(
  "extensions.zotero.zoterostyle.function.favoriteCollections.enable",
  true,
);

pref("extensions.zotero.zoterostyle.function.AIGenerateRemark.enable", true);

pref("extensions.zotero.zoterostyle.function.AIGenerateTags.enable", true);
pref(
  "extensions.zotero.zoterostyle.AIGenerateTags.prompt",
  "Returns 3 tags that fit this abstract as a JSON list.",
);

pref("extensions.zotero.zoterostyle.function.backlinks.enable", false);

pref("extensions.zotero.zoterostyle.function.tldr.enable", false);
pref("extensions.zotero.zoterostyle.tldr.autoTranslate", false);

pref("extensions.zotero.zoterostyle.function.toogleSidebar.enable", true);
pref("extensions.zotero.zoterostyle.toogleSidebar.left.shortcut", "Shift + {");
pref(
  "extensions.zotero.zoterostyle.toogleSidebar.right.shortcut",
  "Shift + }",
);

pref("extensions.zotero.zoterostyle.delayTime", 0);

pref("extensions.zotero.zoterostyle.function.styleEditor.enable", false);
pref(
  "extensions.zotero.zoterostyle.styleEditor.value",
  ".view-popup .tool-toggle {display: none;}",
);

pref(
  "extensions.zotero.zoterostyle.function.updateItemDateModified.enable",
  true,
);

pref("extensions.zotero.zoterostyle.function.noteManager.enable", true);

pref("extensions.zotero.zoterostyle.function.annotationManager.enable", true);
pref(
  "extensions.zotero.zoterostyle.annotationManager.ignoreFigureTable",
  true,
);
pref(
  "extensions.zotero.zoterostyle.annotationManager.replaceAnnotationTextWidthComment",
  false,
);
pref(
  "extensions.zotero.zoterostyle.annotationManager.onlyShowSelected",
  false,
);

pref(
  "extensions.zotero.zoterostyle.paperMatrix.auxiliaryFields",
  "firstCreator, year",
);
pref("extensions.zotero.zoterostyle.paperMatrix.coreFields", "");
pref("extensions.zotero.zoterostyle.paperMatrix.paperDirection", "row");

pref("extensions.zotero.zoterostyle.function.addTags.enable", true);
pref("extensions.zotero.zoterostyle.addTags.shortcut", "Ctrl + T");
pref(
  "extensions.zotero.zoterostyle.titleTranslate.shortcut",
  "Ctrl + Alt + T",
);

pref("extensions.zotero.zoterostyle.function.relatedItems.enable", true);
pref("extensions.zotero.zoterostyle.relatedItems.link.shortcut", "Alt + L");

pref("extensions.zotero.zoterostyle.recordInterval", 10);

pref("extensions.zotero.zoterostyle.customColumn.dataKeys", "numPages, price");

pref("extensions.zotero.zoterostyle.function.graphView.enable", true);
pref("extensions.zotero.zoterostyle.graphView.enable", false);
pref("extensions.zotero.zoterostyle.graphView.height", "400px");
pref("extensions.zotero.zoterostyle.graphView.mode", "related");

pref("extensions.zotero.zoterostyle.graphView.show", false);
pref("extensions.zotero.zoterostyle.graphView.theme", "light");

pref("extensions.zotero.zoterostyle.function.citedCountColumn.enable", true);
pref(
  "extensions.zotero.zoterostyle.citedCountColumn.fields",
  "Total(CNKI), Download, Total(DOI), Highly Influential, Background, Methods, Results",
);
pref("extensions.zotero.zoterostyle.citedCountColumn.textColor", "auto");
pref("extensions.zotero.zoterostyle.citedCountColumn.source", "auto");
pref(
  "extensions.zotero.zoterostyle.citedCountColumn.sortBy",
  "Total(DOI), Total(CNKI)",
);
pref(
  "extensions.zotero.zoterostyle.citedCountColumn.map",
  "Total(CNKI)=CNKI, Download=Download, Total(DOI)=Total, Highly Influential=HI, Background=Background, Methods=Methods, Results=Results",
);
pref("extensions.zotero.zoterostyle.citedCountColumn.margin", "0.08");
pref("extensions.zotero.zoterostyle.citedCountColumn.padding", "0.455");
pref("extensions.zotero.zoterostyle.citedCountColumn.opacity", "1");
pref(
  "extensions.zotero.zoterostyle.citedCountColumn.colors",
  "#ffe2dd, #e8deee, #dbeddb, #fadec9, #e9e8e7",
);
pref("extensions.zotero.zoterostyle.cookies.cnki", "");
pref("extensions.zotero.zoterostyle.googleScholar.userContextId", 0);

pref("extensions.zotero.zoterostyle.function.tagsColumn.enable", true);
pref("extensions.zotero.zoterostyle.tagsColumn.margin", "0.15");
pref("extensions.zotero.zoterostyle.tagsColumn.align", "left");

pref("extensions.zotero.zoterostyle.function.textTagsColumn.enable", true);
pref("extensions.zotero.zoterostyle.textTagsColumn.prefix", "#");
pref("extensions.zotero.zoterostyle.textTagsColumn.match", "/^#(?:.+/)*(.+)/");
pref("extensions.zotero.zoterostyle.textTagsColumn.opacity", "0.13");
pref(
  "extensions.zotero.zoterostyle.textTagsColumn.backgroundColor",
  "#8e44ad",
);
pref("extensions.zotero.zoterostyle.textTagsColumn.textColor", "auto");
pref("extensions.zotero.zoterostyle.textTagsColumn.margin", "0.2");
pref("extensions.zotero.zoterostyle.textTagsColumn.padding", "0.5");

pref("extensions.zotero.zoterostyle.function.titleColumn.enable", true);
pref("extensions.zotero.zoterostyle.titleColumn.color", "#FFC6D3");
pref("extensions.zotero.zoterostyle.titleColumn.tags", false);
pref("extensions.zotero.zoterostyle.titleColumn.emojiTags", false);

pref("extensions.zotero.zoterostyle.titleColumn.opacity", "0.7");
pref("extensions.zotero.zoterostyle.titleColumn.odd", "");
pref("extensions.zotero.zoterostyle.titleColumn.even", "");
pref("extensions.zotero.zoterostyle.titleColumn.selected", "");
pref("extensions.zotero.zoterostyle.titleColumn.translate", false);

pref("extensions.zotero.zoterostyle.function.IFColumn.enable", true);
pref("extensions.zotero.zoterostyle.IFColumn.field", "sciif");
pref("extensions.zotero.zoterostyle.IFColumn.text", true);
pref("extensions.zotero.zoterostyle.IFColumn.progress", true);

pref("extensions.zotero.zoterostyle.IFColumn.color", "#41a1a2");
pref("extensions.zotero.zoterostyle.IFColumn.opacity", "1");
pref("extensions.zotero.zoterostyle.IFColumn.max", "15");
pref("extensions.zotero.zoterostyle.IFColumn.progressType", "2");

pref("extensions.zotero.zoterostyle.IFColumn.info", false);

pref("extensions.zotero.zoterostyle.function.readStatus.enable", true);

pref(
  "extensions.zotero.zoterostyle.function.publicationTagsColumn.enable",
  true,
);
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.fields",
  "sciif, sci, utd24, ajg, sciBase, ssci, pku, 复合影响因子",
);
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.rankColors",
  "#ffe2dd, #e8deee, #dbeddb, #fadec9, #e9e8e7",
);
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.defaultColor",
  "#86dad1",
);
pref("extensions.zotero.zoterostyle.publicationTagsColumn.textColor", "auto");
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.sortBy",
  "sci, -sciif",
);
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.map",
  "北大中文核心=北核, SCIIF=IF, SCIIF(5)=IF(5), SCI基础版=中科院",
);
// Verified journal identities and sources: docs/publication-aliases.md.
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.aliases",
  "Acta Psychologica Sinica = 心理学报\nAdvances in Psychological Science = 心理科学进展\nActa Physica Sinica = 物理学报\nActa Geographica Sinica = 地理学报",
);

pref("extensions.zotero.zoterostyle.publicationTagsColumn.margin", "0.08");
pref("extensions.zotero.zoterostyle.publicationTagsColumn.padding", "0.455");
pref("extensions.zotero.zoterostyle.publicationTagsColumn.opacity", "1");

pref("extensions.zotero.zoterostyle.function.annotationColumn.enable", true);
pref("extensions.zotero.zoterostyle.annotationColumn.style", "bar");
pref("extensions.zotero.zoterostyle.annotationColumn.color", "#86C8BC");
pref("extensions.zotero.zoterostyle.annotationColumn.opacity", "0.7");
pref("extensions.zotero.zoterostyle.annotationColumn.circle", true);

pref("extensions.zotero.zoterostyle.function.ratingColumn.enable", true);
pref("extensions.zotero.zoterostyle.ratingColumn.storage", "extra");
pref("extensions.zotero.zoterostyle.ratingColumn.selectedStar", "⭐");
pref("extensions.zotero.zoterostyle.ratingColumn.unselectedStar", "🌙");
pref("extensions.zotero.zoterostyle.ratingColumn.padding", "2");

pref("extensions.zotero.zoterostyle.function.viewManager.enable", true);
pref("extensions.zotero.zoterostyle.viewGroups", "[]");

pref(
  "extensions.zotero.zoterostyle.function.showAnnotationColorName.enable",
  false,
);
pref(
  "extensions.zotero.zoterostyle.annotationColorNameDirection",
  "horizontal",
);

pref("extensions.zotero.zoterostyle.function.annotationColors.enable", true);
pref(
  "extensions.zotero.zoterostyle.annotationColors",
  '[["general.yellow","#ffd400"],["general.red","#ff6666"],["general.green","#5fb236"],["general.blue","#2ea8e5"],["general.purple","#a28ae5"],["general.magenta","#e56eee"],["general.orange","#f19837"],["general.gray","#aaaaaa"]]',
);
pref(
  "extensions.zotero.zoterostyle.annotationColorsGroups",
  '[["Untitled",[["general.yellow","#ffd400"],["general.red","#ff6666"],["general.green","#5fb236"],["general.blue","#2ea8e5"],["general.purple","#a28ae5"],["general.magenta","#e56eee"],["general.orange","#f19837"],["general.gray","#aaaaaa"]]]]',
);

pref("extensions.zotero.zoterostyle.function.itemTypeFilter.enable", true);

pref(
  "extensions.zotero.zoterostyle.function.collectionItemCount.enable",
  true,
);
pref("extensions.zotero.zoterostyle.function.sortCollectionItem.enable", true);
pref("extensions.zotero.zoterostyle.function.jevClassification.enable", false);
pref("extensions.zotero.zoterostyle.jev.apiKey", "");
pref("extensions.zotero.zoterostyle.jev.keyMigrated", false);
pref("extensions.zotero.zoterostyle.collectionItem.sortBy", "");

pref("extensions.zotero.zoterostyle.function.tags.enable", true);

pref("extensions.zotero.zoterostyle.function.creatorColumn.enable", false);
pref(
  "extensions.zotero.zoterostyle.creatorColumn.format",
  "${firstName} ${lastName}",
);
pref("extensions.zotero.zoterostyle.creatorColumn.slices", "0:1");
pref("extensions.zotero.zoterostyle.creatorColumn.join", ", ");

pref("extensions.zotero.zoterostyle.function.publicationColumn.enable", true);
pref(
  "extensions.zotero.zoterostyle.publicationColumn.fields",
  "publicationTitle, conferenceName, university, publisher",
);

pref("extensions.zotero.zoterostyle.nestedTags.sortord", "0");
pref("extensions.zotero.zoterostyle.nestedTags.linkSymbol", "/");

pref("extensions.zotero.zoterostyle.function.PDFStyles.enable", true);
pref(
  "extensions.zotero.zoterostyle.function.renderItemAnnotations.enable",
  true,
);
pref("extensions.zotero.zoterostyle.function.renderItemNotes.enable", true);
pref("extensions.zotero.zoterostyle.explore.sectionOrder", "notes,annos");

pref("extensions.zotero.zoterostyle.storage.in", "note");
pref("extensions.zotero.zoterostyle.storage.filename", "");
pref("extensions.zotero.zoterostyle.readingProgress.recordingEnabled", true);

pref("extensions.zotero.zoterostyle.easyscholar.secretKey", "");
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.source",
  "easyscholar",
);
pref("extensions.zotero.zoterostyle.garden.apiKey", "");
pref(
  "extensions.zotero.zoterostyle.publicationTagsColumn.gardenFields",
  "IF, JCI, JCR, 中科院 2025, CiteScore, 5YIF, 新锐",
);
pref(
  "extensions.zotero.findPDFs.resolvers",
  '{"name":"Sci-Hub","method":"GET","url":"https://sci-hub.wf/{doi}","mode":"html","selector":"#pdf","attribute":"src","automatic":false}',
);

pref("extensions.zotero.zoterostyle.function.Recent.enable", false);

pref("extensions.zotero.zoterostyle.function.ReadUnreadStatus.enable", true);

pref("extensions.zotero.zoterostyle.function.readTimeColumn.enable", true);
pref("extensions.zotero.zoterostyle.readTime.color", "#468B97");
pref("extensions.zotero.zoterostyle.readTime.opacity", "0.7");
pref("extensions.zotero.zoterostyle.readTime.max", "600");
pref("extensions.zotero.zoterostyle.readTime.progress", true);
pref("extensions.zotero.zoterostyle.readTime.text", true);

pref("extensions.zotero.zoterostyle.function.remarkColumn.enable", true);

pref(
  "extensions.zotero.zoterostyle.remarkColumn.prompt",
  "请用一句话（一定不超过15字, 输出语言为中文）概括它的主要内容，请直接输出概括结果，结果为：",
);

pref("extensions.zotero.zoterostyle.function.statusColumn.enable", true);
pref("extensions.zotero.zoterostyle.function.tabManager.enable", true);
pref("extensions.zotero.zoterostyle.function.explore.enable", true);
pref("extensions.zotero.zoterostyle.explore.bibliography", false);
pref("extensions.zotero.zoterostyle.function.attachmentPreview.enable", true);
pref("extensions.zotero.zoterostyle.function.darkLightButton.enable", true);

pref(
  "extensions.zotero.zoterostyle.function.reader.mergeAnnotations.enable",
  true,
);
pref(
  "extensions.zotero.zoterostyle.function.reader.attachmentVersionSwitch.enable",
  true,
);
