/**
 * Most of this code is from Zotero team's official Make It Red example[1]
 * or the Zotero 7 documentation[2].
 * [1] https://github.com/zotero/make-it-red
 * [2] https://www.zotero.org/support/dev/zotero_7_for_developers
 */

var chromeHandle;

function install(data, reason) {}

async function startup({ id, version, resourceURI, rootURI }, reason) {
  // Updates reuse the XPI path. Drop this archive's cached reader before any
  // scripts or Pro resources are opened so they all come from the same package.
  if (rootURI.startsWith("jar:")) {
    const xpiFile = Services.io
      .newURI(rootURI)
      .QueryInterface(Components.interfaces.nsIJARURI)
      .JARFile.QueryInterface(Components.interfaces.nsIFileURL).file;
    Services.obs.notifyObservers(xpiFile, "flush-cache-entry");
  }

  var aomStartup = Components.classes[
    "@mozilla.org/addons/addon-manager-startup;1"
  ].getService(Components.interfaces.amIAddonManagerStartup);
  var manifestURI = Services.io.newURI(rootURI + "manifest.json");
  chromeHandle = aomStartup.registerChrome(manifestURI, [
    ["content", "zoterostyle", rootURI + "chrome/content/"],
  ]);

  /**
   * Global variables for plugin code.
   * The `_globalThis` is the global root variable of the plugin sandbox environment
   * and all child variables assigned to it is globally accessible.
   * See `src/index.ts` for details.
   */
  const ctx = {
    rootURI,
  };
  ctx._globalThis = ctx;

  // Script bytecode has a separate URI-keyed cache. Flushing the XPI alone
  // must not leave an old compiled addonVersion paired with a new Pro manifest.
  Services.scriptloader.loadSubScriptWithOptions(
    `${rootURI}/chrome/content/scripts/zoterostyle.js`,
    { target: ctx, ignoreCache: true },
  );
  await Zotero.ZoteroStyle.hooks.onStartup();
}

async function onMainWindowLoad({ window }, reason) {
  Zotero.ZoteroStyle?.hooks.onMainWindowLoad(window);
}

async function onMainWindowUnload({ window }, reason) {
  Zotero.ZoteroStyle?.hooks.onMainWindowUnload(window);
}

async function shutdown({ id, version, resourceURI, rootURI }, reason) {
  if (reason === APP_SHUTDOWN) {
    return;
  }

  // if (typeof Zotero === "undefined") {
  //   Zotero = Components.classes["@zotero.org/Zotero;1"].getService(
  //     Components.interfaces.nsISupports,
  //   ).wrappedJSObject;
  // }
  await Zotero.ZoteroStyle?.hooks.onShutdown();

  // Cc["@mozilla.org/intl/stringbundle;1"]
  //   .getService(Components.interfaces.nsIStringBundleService)
  //   .flushBundles();

  // Cu.unload(`${rootURI}/chrome/content/scripts/zoterostyle.js`);
  if (chromeHandle) {
    chromeHandle.destruct();
    chromeHandle = null;
  }
}

async function uninstall(data, reason) {
  await Zotero.ZoteroStyle?.hooks.onShutdown();
}
