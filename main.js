const {app , BrowserWindow} =require("electron")

//Is app ready and initialised ? show th app window 
app.whenReady().then(() => {
    const window = new BrowserWindow()
    window.loadFile("index.html")
})

