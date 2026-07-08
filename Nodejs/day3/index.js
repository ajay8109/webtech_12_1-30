// const http = require('http') 

// const server = http.createServer((req, res) => {
//    console.log("New req Rec....")

//    res.end("hello from server")
// })

// server.listen(7000, () => console.log(`http://localhost:7000`))


/------------------------------------------/


// const http = require('http') 
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//     const log1 = `\n${Date.now()} : ${req.url} New req is coming.....`
//     fs.appendFile("./log.txt", log1,(error, data) => {
//            switch(req.url){
//             case  "/" :
//                 res.end("this is my home page") 
//                 break;

//                 case "/home" : 
//                 res.end("this is my home page")
//                 break;

//                 case "/contact" :
//                 res.end("this is  my contact page")
//                 break;

//                 default:
//                     res.end("404 page is not found")
  

//            }
//     } )


   
// })

// server.listen(7000, () => console.log(`http://localhost:7000`))






// -----------------------------------------------------



const http = require('http') 
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
    const log1 = `\n${Date.now()} : ${req.url} New req is coming.....`
    const myUrl = url.parse(req.url,true)
    fs.appendFile("./log.txt", log1,(error, data) => {
           switch(myUrl.pathname){
            case  "/" :
                res.end("this is my home page") 
                break;

                case "/about" : 
                const username = myUrl.query.myName;
                res.end(`my name is ${username}`)
                break;

                case "/contact" :
                res.end("this is  my contact page")
                break;

                default:
                    res.end("404 page is not found")
  

           }
    } )


   
})

server.listen(7000, () => console.log(`http://localhost:7000`))

