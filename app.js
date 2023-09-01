import express from "express";
import AuthRouter from "./src/modules/Auth/router.js";
const app = express();

const Port = 9791;

// app.use(ext)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true)

app.use("/auth", AuthRouter);
app.get('/', (req, res)=>{
    res.send("BK")
});

app.listen(Port, ()=> {
    console.log(`server running on ${Port}`);
});