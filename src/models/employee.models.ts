import { Schema, model } from "mongoose";

const schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    role: { type: String, required: true },
})

const employeeModel = model('Employee', schema) ;
export default employeeModel;