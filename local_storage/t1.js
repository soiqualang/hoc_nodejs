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


storage.setItemSync('domain2','truongho.com');

var domain=storage.getItemSync('domain');
console.log(domain);
var domain2=storage.getItemSync('domain2');
console.log(domain2);

//storage.removeItem('domain');

//storage.clear();
