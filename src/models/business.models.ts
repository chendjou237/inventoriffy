import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    contact: { type: String, required: true },
    logo: { type: String, required: true },
    address: { type: String, required: true },
    adminId: { type: Schema.Types.ObjectId, ref: 'User', required: true, },
    users: [{ type: Schema.Types.ObjectId, ref: 'Employee', required: false, }],
})

const businessModel = model('Business', schema) ;
export default businessModel;