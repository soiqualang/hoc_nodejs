var express = require("express");
 
var app = express();
 
app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
 
app.listen(3000);
 
app.get("/", function(request, response)  {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    response.render("home", {
        drinks: drinks,
        tagline: tagline
    });
});
 
app.get("/test", function(request, response)  {
    
    response.render("test");
});

app.get("/about", function(request, response)  {
    
    response.render("about");
});