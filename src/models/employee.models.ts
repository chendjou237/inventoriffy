import { Schema, model } from "mongoose";
import { Employee } from "../interfaces/employee.interfaces";

const schema = new Schema<Employee>({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    role: { type: String,enum: ['admin', 'employee'], required: true },
})

const employeeModel = model('Employee', schema) ;
export default employeeModel;


