import { Schema, model } from "mongoose";
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const userModel = model('User', schema);
export default userModel;
//# sourceMappingURL=user.models.js.map