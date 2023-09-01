import http from "http";

const server = http.createServer((req, res) => {
    res.statusCode =200;
    res.send({ ip : req.ip})

    res.setHeader('content-Type', 'text/plain');
    res.end("Hello Bosses")
    // res.sendDate()

}
);

const port = 9000

let a,b,c;
a = 6;
b=6;
c =a+b;
// while (true) {
//     console.log("Hello, world!");
//   }
server.listen(port, () => {
    console.log(c)
    console.log(`server running ${port}`)
})