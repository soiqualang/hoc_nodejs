# hoc_nodejs
Học Nodejs

## Chuyển JSON sang Object
Để chuyển chuỗi JSON sang Object thì chúng ta sử dụng hàm
```
JSON.parse(json_string)
var student_string = '{"name" : "Nguyen Van Cuong", "age" : "26"}';
 
var student_obj = JSON.parse(student_string);
 
console.log("Name: " + student_obj.name);
console.log("Age: " + student_obj.age);
```
## Chuyển Object sang JSON
Để chuyển đối một Object sang chuỗi JSON thì ta sử dụng hàm JSON.stringify(json_object)
```
var student_string = '{"name" : "Nguyen Van Cuong", "age" : "26"}';
 
var student_obj = JSON.parse(student_string);
 
console.log('--OBJECT--');
console.log("Name: " + student_obj.name);
console.log("Age: " + student_obj.age);
 
console.log('--STRING--');
console.log(JSON.stringify(student_obj));
```
## Lưu trữ chuỗi JSON vào file
```
var student_obj = {
    name : "Nguyen Van Cuong",
    age : "26"
};
 
var student_string = JSON.stringify(student_obj);
 
// Lưu file
var persist = require('node-persist');
persist.initSync();
persist.setItemSync('student', student_string);
 
// Đọc file
var content_from_file = persist.getItemSync('student');
console.log(content_from_file);
```