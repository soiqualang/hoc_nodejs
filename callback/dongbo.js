var fs=require('fs');

//Đồng bộ
//------>read f1
console.log('\n');
console.log('read f1');

var data1 = fs.readFileSync('f1.txt');

console.log('data f1');
console.log(data1.toString());


//------>read f2
console.log('\n');
console.log('read f2');

var data2 = fs.readFileSync('f2.txt');

console.log('data f2');
console.log(data2.toString());