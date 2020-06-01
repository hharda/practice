var fs=require('fs');

/*  File status THe get Method
fs.stat('app.txt','r+',function(err,stats){
    if(err)
    {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got gfile info Sucessfull")

    console.log("isfile= " + stats.isFile());
    console.log("isDirectory= " + stats.isDirectory());
});
*/

fs.writeFile('app.txt','Welcome to Nodejs Learning',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("data written Succefully");
    }
});