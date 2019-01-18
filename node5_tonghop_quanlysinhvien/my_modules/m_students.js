//http://rose.dothanhlong.org:3000/students/?id=999&name=soiqualang&age=29
module.exports = function(app) {
    //method for students
    app.route('/students')
        .get(function (req, res) {
            var count = Object.keys(req.query).length;
            console.log(count);
            console.log(req.query);
            if(count>0){
                var id = req.query.id;
                var name = req.query.name;
                var age = req.query.age;
                //res.send('The id is '+id+'<br>Tên: '+name+'<br>Tuổi: '+age);
                res.render("students",{
                    id:id,
                    name:name,
                    age:age
                });
            }else{
                res.send('Thiếu thông tin học sinh này!');
            }
        })
}