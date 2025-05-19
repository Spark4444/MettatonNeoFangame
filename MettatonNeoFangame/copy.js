let fs = require("fs");
let path = require("path");

fs.copyFile(path.join(__dirname, "LICENSE"), path.join(__dirname, "out/mettaton-neo-fangame-win32-x64/APP_LICENSE.txt"), (err) => {
    if (err) {
        console.error("Error copying LICENSE file:", err);
    }
});

fs.copyFile(path.join(__dirname, "LICENSE"), path.join(__dirname, "out/make/squirrel.windows/x64/APP_LICENSE.txt"), (err) => {
    if (err) {
        console.error("Error copying LICENSE file:", err);
    }
});