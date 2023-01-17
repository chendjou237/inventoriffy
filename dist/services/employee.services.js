import employeeModel from "../models/employee.models.js";
export const findEmployees = async () => {
    try {
        const employees = await employeeModel.find();
        return employees;
    }
    catch (error) {
        throw error;
    }
};
export const findEmployee = async (id) => {
    try {
        const employee = await employeeModel.findById(id);
        return employee;
    }
    catch (error) {
        throw error;
    }
};
export const createEmployee = async (employee) => {
    try {
        const newEmployee = await employeeModel.create(employee);
        await newEmployee.save();
        return newEmployee;
    }
    catch (error) {
        throw error;
    }
};
export const editEmployee = async (update, id) => {
    const updateDocument = { $set: update };
    try {
        const resp = await employeeModel.findByIdAndUpdate(id, updateDocument);
        return resp;
    }
    catch (error) {
        throw error;
    }
};
export const removeEmployee = async (id) => {
    try {
        const resp = await employeeModel.findByIdAndDelete(id);
        return resp;
    }
    catch (error) {
        throw error;
    }
};
//# sourceMappingURL=employee.services.js.map