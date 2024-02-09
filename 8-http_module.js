// const http = require('http')

// const server = http.createServer(
//     (req, res) => {     
//         // req: request object, a request to our web server
//         // res: response object, a response to the request
//         console.log(req)
//         res.write("Welcome to our home page!!!")
//         res.end()
//     }
// )

// server.listen(5000)

const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page.')
    }
    if(req.url === '/about') {
        res.end('Welcome to our short history.')
    }

    //res.end("/")

    // res.end(
    //     `
    //     <H1>Oops!!</H1>
    //     <p>We can't seem to find the page you are looking for.</p>
    //     <a href="/">Go back home</a>
    //     `
    // )
}
)
server.listen(5000)