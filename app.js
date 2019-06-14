'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        'height': 240, 
        'width': 150, 
        'icon': __dirname + '/public/image/test1.png',
        'transparent': true,
        'frame': false,
        'resizable': false,
        "alwaysOnTop": true,
    });
    mainWindow.loadURL(__dirname + '/public/index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});