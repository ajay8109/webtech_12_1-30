const http = require("http")
const url = require("url")
const fs = require("fs")


const server1 = http.createServer((req, res) => {
    const log1 = `\n${Date.now()} : ${req.url} New req is coming.....`
       const myUrl = url.parse(req.url,true)
       fs.appendFile("./log.txt", log1,(error, data) => {
          switch(myUrl.pathname) {
            case "/" : 
            if(req.method=== 'GET')
                res.end("HomePage")
            break;
            case "/about" :
                const username = myUrl.query.myName;
                res.end(`my name is ${username}`)
                break;
             case "/signup" :
                if(req.method === 'GET') {
                    res.end("signup page") 

                } else if(req.method === 'POST') {
                    res.end("signup succesfully")
                }
                break;

                default :
                res.end("404 port not found")
                       


          }
         
       })
})


server1.listen(7000, () => console.log(`http://localhost:7000`))
