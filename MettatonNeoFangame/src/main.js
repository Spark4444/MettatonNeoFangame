let { app, BrowserWindow, Menu} = require("electron");
let path = require("path");


let createWindow = () => {
    let mainWindow = new BrowserWindow({
        width: 600,
        height: 800,
        icon: __dirname + `./img/app.ico`,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
        },
        fullscreenable: true,
    })
  
    mainWindow.loadFile(path.join(__dirname, "index.html"));
    mainWindow.maximize()
}

app.on("ready", createWindow);

let template = [
   
] 

let menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
  
app.on("will-quit", () => {
    globalShortcut.unregisterAll()
})
  
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});