const cors = require('cors')
const express = require('express');
const routes = require('./routes/index.js')
const cors = require('cors')
const app = express();


app.use(cors())

routes(app)

app.use(cors())

module.exports = app;