const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    console.log(result);
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt',  `here is the result of new text: ${first}, ${second}`, (err, result)=> {
            if(err) {
                console.log(err)
                return
            }
        })
    })
})