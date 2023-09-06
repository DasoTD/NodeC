import mongoose from "mongoose";

const ConnectDB = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test')
        .then(() => console.log("db COnnected"));
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB;