import { Schema, model } from "mongoose";
const schema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    date: { type: Date, required: true },
    isActive: { type: Boolean, required: true },
});
const inventoryModel = model('Inventory', schema);
export default inventoryModel;
//# sourceMappingURL=inventory.models.js.map