# Module trong Node.js

![alt](http://rose.dothanhlong.org/nodejs/nodejs_module/h1.png)

>https://viblo.asia/p/nodejs-tutorial-phan-2-module-trong-nodejs-MgNvWDdKGYx

Ví dụ, http là Module chứa các hàm cụ thể liên quan đến thiết lập HTTP. Node.js cung cấp một vài các Module core kèm theo để hỗ trợ chúng ta truy cập file trên hệ thống, tạo các máy chủ HTTP, TCP/UDP, và các hàm tiện ích nhỏ hữu dụng khác.

Ví dụ chúng ta tạo ra một file là greetings.js và nó chứa hai chức năng sau:

```
// greetings.js
sayHelloInEnglish = function() {
  return "Hello";
};

sayHelloInSpanish = function() {
  return "Hola";
};
```
# Exporting a Module
Module là các đoạn code được đóng gói lại với nhau,... Code trong một Module thường là private – nghĩa là các hàm, biến được định nghĩa và truy cập bởi bên trong của Module. Để "chìa ra" các hàm hoặc biến để sử dụng bên ngoài Module bạn cần sử dụng exports.
```
module.exports = {
  sayHelloInEnglish: function() {
    return "HELLO";
  },

  sayHelloInSpanish: function() {
    return "Hola";
  }
};

```
# Importing a Module
Để sử dụng Module, bạn đơn giản chỉ cần khai báo với hàm require(), như sau:
```
var http = require("http");
```
require() là hàm trả về tham chiếu tới một Module cụ thể. Trong trường hợp của đoạn mã trên, chúng ta đang khai báo một tham chiếu tới http Module và lưu nó vào biến http.

Trong đoạn mã trên, chúng truyền một tham số là tên của Module. Điều này báo cho Node sẽ tìm một Module tên là http trong thư mục node_modules của ứng dụng. Nếu nó không thấy, Node sẽ tiếp tục tìm Module đó ở thư mục global cài đặt node.

Bạn cũng có thể chỉ rõ file bằng việc truyền vào tham số là đường dẫn tương đối ./path/to/my/module.js hoặc tuyệt đối /path/to/my/module.js.
```
var myModule = require('./myModule.js');
```
Vậy để làm việc với ví dụ "sayHello" ở trên, ta tạo 1 file main.js mà thêm vào dòng code như dưới:
```
// main.js
var greetings = require("./greetings.js");

// "Hello"
greetings.sayHelloInEnglish();

// "Hola"
greetings.sayHelloInSpanish();
```
