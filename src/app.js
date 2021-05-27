const express = require('express');
const app = express();

const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// requiring routes 
const routes = require("./routes/routes");

// setting up Ports 
const port = process.env.PORT || 3000

// view engine setup 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "../templates/views"));
// hbs partials setting 
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

// setting up middleware 
app.use(express.json())
app.use(express.static(path.join(__dirname, "../Public")));
app.use(bodyParser.urlencoded({ extended: true }));






app.use(routes)

app.listen(port, () => {
    console.log('server is connected on port ' + port)
})