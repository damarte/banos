// ./main.js
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('dotenv').config();
require('electron-reload')(__dirname);

let win = null;

function createWindow () {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600}); //titleBarStyle: 'hidden'

  // Specify entry point
  if (process.env.PACKAGE === 'true'){
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  } else {
    win.loadURL(process.env.HOST);
    // Show dev tools
    win.webContents.openDevTools();
  }

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
