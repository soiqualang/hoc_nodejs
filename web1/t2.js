var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port=3000;
app.listen(port);

//app.METHOD(PATH, HANDLER)

var todos = [{id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'}];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//app.get('/', (request, response) => {
app.get('/', function(request, response){
    //response.status(200).json(todos);
    response.write('<h1>Hello World!</h1>');
});

app.get('/todos', function(request, response){
    response.write('<h1>Todo\'s page!</h1>');
});