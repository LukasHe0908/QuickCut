import path from 'path';
import { app, ipcMain, nativeTheme, dialog } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { BrowserWindow, Menu } from 'electron';
import Store from 'electron-store';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  // app.setPath('userData', `${app.getPath('userData')} (development)`);
  app.setPath('userData', path.join(process.cwd(), '.data'));
}
const store = new Store();
Menu.setApplicationMenu(null);

(async () => {
  await app.whenReady();

  // nativeTheme.themeSource = 'light';
  const mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    maximizable: true,
    backgroundMaterial: 'mica',
    icon: 'resources/icon.ico',
  });
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.show();
  });

  if (isProd) {
    await mainWindow.loadURL('app://./');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/`);
    mainWindow.webContents.on('context-menu', event => {
      const contextMenu = Menu.buildFromTemplate([
        {
          label: 'Dev Tools',
          click: () => {
            mainWindow.webContents.openDevTools();
          },
        },
      ]);
      contextMenu.popup();
    });
  }

  ipcMain.on('showOpenDialog', async (event, signal, options) => {
    try {
      let result = await dialog.showOpenDialogSync(mainWindow, options);
      event.reply('showOpenDialog/' + signal, result);
    } catch (error) {
      event.reply('showOpenDialog/' + signal, undefined, error);
    }
  });
})();

app.on('window-all-closed', () => {
  app.quit();
});
