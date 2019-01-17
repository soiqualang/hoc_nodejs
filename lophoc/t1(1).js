var storage = require('node-persist');

//khoi tao db
var opt={
    dir : "db/lophoc.db",
    ttl : false
};
//ttl: time to live

storage.initSync(opt);

/*
storage.init().then(function(){
    // Gọi các hàm setItem, getItem
});
*/


//storage.setItemSync('domain','dothanhlong.org');

var domain=storage.getItem('domain');
console.log(domain);

//storage.removeItem('domain');

//storage.clear();
