import http from "http";

import dotenv from "dotenv/config";

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.send({ ip : req.ip})

    res.setHeader('content-Type', 'text/plain');
    res.end("Hello Bosses")
    // res.sendDate()

}
);

// require('dotenv').config()

const port = process.env.PORT;
import ConnectDB from "./src/db/index.js"

console.log(port)

let a,b,c;
a = 6;
b=6;
c =a+b;
// while (true) {
//     console.log("Hello, world!");
//   }
server.listen(port, () => {
    console.log(c)
    ConnectDB()
    console.log(`server running ${port}`)
})