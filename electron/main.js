const { app, BrowserWindow } = require("electron");
const { createWindow } = require("./browserWindow");
const { windowTitlebar } = require("./main/windowTitlebar");

app.whenReady().then(() => {
  createWindow();
  windowTitlebar();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
