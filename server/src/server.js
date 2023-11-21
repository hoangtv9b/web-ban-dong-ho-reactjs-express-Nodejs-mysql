const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/configViewEngine");
const initWebRouter = require("./routes/web");
// const expressLayouts = require('express-ejs-layouts');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// app.use(expressLayouts);
// app.set('layout', './views/Layouts/layout');
viewEngine(app);
initWebRouter(app);
app.listen(process.env.PORT, () => {
  console.log("server is running on port: "+ process.env.PORT)
});