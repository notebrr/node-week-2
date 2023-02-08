const superagent = require('superagent')
const fs = require('fs')

console.log(__dirname)
let data;
fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) =>{
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        .end((end,res) => {
            if(err) return console.log(err)
            console.log(res.body.message)
            data = res.body.message

            fs.writeFile("test.txt", res.body.message, (err) => {
                if(err) return console.log(err);
                console.log("Dog image saved to file")
            })
        })
})
