import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    firstname: String,
    lastname : String,
    dob: Date,
    phoneNo: String,
    username: String,
    email: Email,
    profilePicture: String
});

const userModel = mongoose.model(UserSchema)

export default {
    userModel,
    UserSchema
};



