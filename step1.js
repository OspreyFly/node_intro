const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
            console.log(err);
        }
        console.log(data);
    });
}

const filePath = process.argv[2];


cat(filePath);