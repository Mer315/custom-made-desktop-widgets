const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 206,          
    height: 206,         
    frame: false,        
    transparent: true,      
    resizable: false,
    canter:true,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,  
      contextIsolation: false ,
    },
  });

  win.loadFile('main.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
