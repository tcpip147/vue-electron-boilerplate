const { ipcMain } = require("electron");
const { getBrowserWindow } = require("../browserWindow");

const windowTitlebar = function () {
  ipcMain.handle("windowTitlebar.minimize", (e) => {
    getBrowserWindow().minimize();
  });
  ipcMain.handle("windowTitlebar.toggle", (e) => {
    const win = getBrowserWindow();
    if (win.isMaximized()) {
      win.restore();
      return "restored";
    } else {
      win.maximize();
      return "maximized";
    }
  });
  ipcMain.handle("windowTitlebar.close", (e) => {
    getBrowserWindow().close();
  });
  const win = getBrowserWindow();
  win.on("maximize", () => {
    win.webContents.send("windowTitlebar.onMaximize");
  });
  win.on("unmaximize", () => {
    win.webContents.send("windowTitlebar.onUnmaximize");
  });
};

module.exports = {
  windowTitlebar,
};
