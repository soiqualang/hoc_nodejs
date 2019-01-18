var express = require("express");
var app = express();
var userRouter = require('./c_modules/m_user.js');
 
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
    var tagline2 = "Đoạn này được thêm vào file index.js sau khi đã bật run service, code vẫn được thực thi không cần restart lại ứng dụng. Awesome!!! Toẹt vời ông mặt Trời^^.";

    response.render("home", {
        drinks: drinks,
        tagline: tagline,
        tagline2: tagline2
    });
});
 
app.get("/test", function(request, response)  {
    response.render("test");
});

app.get("/about", function(request, response)  {
    response.render("about");
});

userRouter(app);
