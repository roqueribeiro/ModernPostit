const {
    app,
    Menu,
    Tray,
    BrowserWindow
} = require('electron')
const path = require("path")
const iconPath = path.join(__dirname, "favicon.ico");

function createWindow() {

    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        transparent: true,
        frame: false,
        movable: false,
        resizable: false,
        maximizable: false,
        minimizable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        fullscreen: true,
        simpleFullscreen: true,
        icon: iconPath
    })

    win.loadFile('index.html')
    win.maximize()

    appIcon = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([{
        label: "Show",
        click: () => win.show()
    }, {
        label: "Hide",
        click: () => win.hide()
    }, {
        label: "Close",
        click: () => app.quit()
    }]);

    appIcon.on("double-click", () => {
        if (mainWindow.isVisible()) mainWindow.hide();
        else mainWindow.show();
    });

    appIcon.setToolTip("Modern Post-it");
    appIcon.setContextMenu(contextMenu);
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})