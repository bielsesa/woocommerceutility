const { app, BrowserWindow } = require('electron');
/**
 * Creates the main window
 */
function createMainWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('login.html');
}
app.whenReady().then(createMainWindow);
// When all windows are closed exit the app, except in macOS.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
// When the application gets activated create the main window if one does not exist
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow()
  }
});
