import { Schema, model } from "mongoose";

const schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    unitPrice: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    businessId: { type: Schema.Types.ObjectId, ref: 'Business' },
})

const productModel = model('User', schema) ;
export default productModel;