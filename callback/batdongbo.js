var fs=require('fs');

//Bất Đồng bộ - asynchronous
//https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

//callback Function
function finish_f1(err,data){
    if(err) console.log(err);
    console.log('data f1');
    console.log(data.toString());
}

function finish_f2(err,data){
    if(err) console.log(err);
    console.log('data f2');
    console.log(data.toString());
}


//------>read f1
console.log('\n');
console.log('read f1');

fs.readFile('f1.txt',finish_f1);


//------>read f2
console.log('\n');
console.log('read f2');

fs.readFile('f2.txt',finish_f2);