const { app, BrowserWindow, Menu, globalShortcut} = require('electron');
const path = require('path');


const createWindow = () => {
    
    globalShortcut.register('F11', () => {
        const mainWindow = BrowserWindow.getFocusedWindow();
        if (mainWindow) {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
        }
    });

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 800,
        icon: __dirname + `./img/icon.png`,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
        },
        fullscreenable: true,
    })
  
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.webContents.openDevTools()
    mainWindow.maximize()
}

app.on('ready', createWindow);

const template = [
   
] 

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});
  
app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})
  
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});