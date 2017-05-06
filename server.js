var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mysql = require('mysql');

var app = express();

app.use(bodyParser.urlencoded({	extended: false }));

app.use(methodOverride('_method'));

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(process.cwd() + "/public"));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 8080;

app.use("/", routes);

app.listen(port);













