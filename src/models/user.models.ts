import { Schema, model } from "mongoose";

// TODO: Add the schema for the User model
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, 
    contact: { type: String, required: true },
})

const userModel = model('User', schema) ;
export default userModel;