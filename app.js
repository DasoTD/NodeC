import express from "express";

const app = express()

const Port = 9791

// app.use(ext)

app.get('/', (req, res)=>{
    res.send("BK")
})

app.listen(Port, ()=> {
    console.log(`server running on ${Port}`)
})