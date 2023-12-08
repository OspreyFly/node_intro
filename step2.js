const { default: axios } = require('axios');
const fs = require('fs');
const { URL } = require('url');
const filePath = process.argv[2];

function isURL(input) {
    try {
      new URL(input);
      return true;
    } catch (error) {
      return false;
    }
  }

function cat(path){
    fs.readFile(path, 'utf8', (err, data) =>{
        if(err){
            console.log(err);
        }
        console.log(data);
    });
}

function webCat(url){
    axios.get(url)
    .then((res) => {
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })
}

if(isURL(filePath)){
    webCat(filePath);
}
else{
    cat(filePath);
}
