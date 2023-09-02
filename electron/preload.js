const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("windowTitlebar", {
  minimize: () => ipcRenderer.invoke("windowTitlebar.minimize"),
  toggle: (callback) => ipcRenderer.invoke("windowTitlebar.toggle").then((result) => callback(result)),
  close: () => ipcRenderer.invoke("windowTitlebar.close"),
  onMaximize: (callback) => ipcRenderer.on("windowTitlebar.onMaximize", () => callback()),
  onUnmaximize: (callback) => ipcRenderer.on("windowTitlebar.onUnmaximize", () => callback()),
  removeMaximizeListener: () => ipcRenderer.removeAllListeners("windowTitlebar.onMaximize"),
  removeUnmaximizeListener: () => ipcRenderer.removeAllListeners("windowTitlebar.onUnmaximize"),
});
