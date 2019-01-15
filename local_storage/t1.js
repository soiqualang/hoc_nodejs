var storage = require('node-persist');

var opt={
    dir : "db/redrose.db",
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
