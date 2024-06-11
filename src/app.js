const cors = require('cors')
const express = require('express');
const routes = require('./routes/index.js')

const app = express();
routes(app)

app.use(cors())

module.exports = app;