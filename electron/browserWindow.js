const { BrowserWindow } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
    },
  });

  if (process.env.development == "true") {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadURL(path.join(__dirname, "../dist/index.html"));
  }
};

const getBrowserWindow = () => {
  return win;
};

module.exports = {
  getBrowserWindow,
  createWindow,
};
