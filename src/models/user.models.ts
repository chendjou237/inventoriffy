import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interfaces.js";

// TODO: Add the schema for the User model
const schema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, 
    contact: { type: String, required: false },
})

const userModel = model('User', schema) ;
export default userModel;