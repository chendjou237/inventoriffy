import { Employee } from "../interfaces/employee.interfaces.js";
import employeeModel from "../models/employee.models.js";


export const findEmployees = async () => {
  try {
    const employees =  await employeeModel.find() as Employee[];
      return employees;
  } catch (error) {
      throw error;
      
  }
};
export const findEmployee = async (id:string) => {
  try {
    const employee:Employee =  await employeeModel.findById(id);
      return employee;
  } catch (error) {
        throw error;
    }
};

export const createEmployee = async (employee:Employee) => {


  try {
    const newEmployee = await employeeModel.create(employee);
    await newEmployee.save();
    return newEmployee
    
  } catch (error) {
      throw error;
  }
};

export const editEmployee = async (update: Map<string, any>, id: string) => {
    
  

  const updateDocument = { $set: update};

  try { 
      const resp = await employeeModel.findByIdAndUpdate(id, updateDocument);
      return resp
      
  } catch (error) {
      throw error;
  }
};

export const removeEmployee = async (id:string) => {
  try {
      const resp = await employeeModel.findByIdAndDelete(id);
      return resp
  } catch (error) {
throw error;
  }
};
