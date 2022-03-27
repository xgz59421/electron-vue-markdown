const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const Store = require('electron-store')

Store.initRenderer()

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 650,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: true
    }
  })
  const urlLocation = isDev ? 'http://localhost:8080' : path.join(__dirname, '../dist/index.html')

  // urlLocation = path.join(__dirname, './dist/index.html')
  mainWindow.loadURL(urlLocation)

  // 打开开发者工具
  mainWindow.webContents.openDevTools()
})
