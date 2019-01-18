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


//method for user
app.route('/user')
    .get(function (req, res) {
        var count = Object.keys(req.query).length;
        console.log(count);
        console.log(req.query);
        if(count>0){
            var id = req.query.id;
            var name = req.query.name;
            var age = req.query.age;
            //res.send('The id is '+id+'<br>Tên: '+name+'<br>Tuổi: '+age);
            res.render("user",{
                id:id,
                name:name,
                age:age
            });
        }else{
            res.send('Thiếu thông tin user này!');
        }
    })
    .post(function (req, res) {
        res.send('Got a POST request');
    })
    .put(function (req, res) {
        res.send('Got a PUT request at /user');
    })
    .delete(function (req, res) {
        res.send('Got a DELETE request at /user');
    });

//http://rose.dothanhlong.org:3000/user/999/soiqualang/29
app.get('/user/:id/:name/:age', function(req, res) {  
    var id = req.params['id'];
    var name = req.params['name'];
    var age = req.params['age'];
    res.send('The id is '+id+'<br>Tên: '+name+'<br>Tuổi: '+age);
});
/*
//http://rose.dothanhlong.org:3000/user/?id=999&name=soiqualang&age=29
app.get('/user', function(req, res) {  
    var id = req.query.id;
    var name = req.query.name;
    var age = req.query.age;
    res.send('The id is '+id+'<br>Tên: '+name+'<br>Tuổi: '+age);
});
*/