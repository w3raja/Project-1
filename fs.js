let fs = require('fs');

fs.writeFile('test.txt',"Data goes here", (err)=>{
    console.log("File is created");
    if(err){
        throw err;
    }
});

fs.appendFile('test.txt',"'\nAppended text", (err)=>{
    console.log("File appended");
    if(err) throw err;
})