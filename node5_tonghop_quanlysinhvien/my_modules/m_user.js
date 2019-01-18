module.exports = function(app) {
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
}