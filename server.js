const express = require("express");
const exphbs = require('express-handlebars');
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

const PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Database



//ROUTES












// Server Listening
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
  });