import { Schema, model } from "mongoose";

const schema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    peymentStatus: { type: String, required: true },
    date: { type: Date, required: true },
})

const orderModel = model('Customer', schema) ;
export default orderModel;