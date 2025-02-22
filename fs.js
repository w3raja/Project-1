let fs = require('fs');

fs.writeFile('test.txt',"Data goes here", (err)=>{
    console.log("File is created");
    if(err){
        throw err;
    }
    let array = [];
    let add = (n) => {
        for(i=1; i<=n; i++){
            array.push(i);
        }
    };
    add(20);
    fs.appendFile('test.txt',`\ncreated \n ${array}`, (err)=>{
        console.log("File appended");
        if(err) throw err;
    })
});

fs.unlink('delete_file.txt',(err)=>{
    console.log("File deleted");
    if(err) throw err;
})