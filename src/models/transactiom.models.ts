import { Schema, model } from "mongoose";

const schema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }, 
})

const transactionModel = model('Transactions', schema) ;
export default transactionModel;