const superagent = require('superagent')
const fs = require('fs')

console.log(__dirname)
let data;
fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) =>{
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        .then(res => {
            console.log(res.body.message)
            fs.writeFile("test.txt", res.body.message, (err) => {
                if(err) return console.log(err)
                console.log("Image saved successfully")
            })
        })
        .catch(err => console.log("Error", err));
})

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

const writeFilePro = (file, myString) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, myString, (err, data) => {
            if(err) reject(err);
            resolve("");
        })
    })
}
