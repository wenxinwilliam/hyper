import {app, BrowserWindow} from 'electron';
import createRPC from '../rpc';
import {resolve} from 'path';
import isDev from 'electron-is-dev';

const url = `file://${resolve(isDev ? `${__dirname}/../` : app.getAppPath(), 'duo.index.html')}`;

export function newDuoWindow() {
  const window = new BrowserWindow({width: 800, height: 600});
  void window.loadURL(url);

  const rpc = createRPC(window);

  window.on('close', () => {
    app.getDuoWindow = () => null;
  });

  window.rpc = rpc;

  return window;
}
