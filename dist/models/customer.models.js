import { Schema, model } from "mongoose";
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false },
    contact: { type: String, required: true },
});
const customerModel = model('Customer', schema);
export default customerModel;
//# sourceMappingURL=customer.models.js.map