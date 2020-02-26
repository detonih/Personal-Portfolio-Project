const express = require('express');
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');

app.use(routes);

app.use(express.static('public'));

app.set("view engine", "njk");

nunjucks.configure("views", {
  express:app
});


module.exports = app;