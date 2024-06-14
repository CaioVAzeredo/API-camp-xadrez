const express = require('express');
const cors = require('cors');
const manipulador404 = require('../src/middlewares/manipulador404.js')
const routes = require('./routes/index.js');

const app = express();

app.use(cors());
routes(app);

app.use(manipulador404)
module.exports = app;