let express = require("express");
function configViewEngine(app) {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("layout extractScripts", true);
    app.set("layout extractStyles", true);
    app.set("views", "./src/views");
}
module.exports = configViewEngine;