var express = require("express");
var app = express();
var storage = require('node-persist');
var userRouter = require('./my_modules/m_user.js');
var studentsRouter = require('./my_modules/m_students.js');
var studentAction = require('./my_modules/m_user_action.js');

//khoi tao db
var opt={
    dir : "db/lophoc.db",
    ttl : false
};
//ttl: time to live
storage.initSync(opt);

//storage.clear();

var getAllStudents=studentAction.getAllStudents(storage);

/*
studentAction.addStudent(1, 'Cuong','Cuong2gmail.com',getAllStudents,storage);
studentAction.addStudent(2, 'Kinh','Kinh@gmail.com',getAllStudents,storage);
studentAction.addStudent(3, 'Chinh','Chinh@yahoo.com',getAllStudents,storage);
studentAction.addStudent(4, 'Quyen','Quyen@msn.com',getAllStudents,storage);
*/

app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
 
app.listen(3000);
 
app.get("/", function(request, response)  {
    response.render("home", {
        getAllStudents: getAllStudents
    });
});
 
app.get("/test", function(request, response)  {
    response.render("test");
});

app.get("/about", function(request, response)  {
    response.render("about");
});

userRouter(app);
studentsRouter(app);
