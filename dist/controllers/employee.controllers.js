import { response } from "express";
import employeeModel from "../models/employee.models.js";
export const getEmployee = async (req, res) => {
    try {
        const employee = await await employeeModel.find();
        res.status(200).send(employee);
    }
    catch (error) {
        res.status(500).send(error);
    }
};
export const postEmployees = async (req, res) => {
    try {
        const newEmployee = await employeeModel.create(req.body);
        await newEmployee.save();
        res
            .status(200)
            .send("posted employee was created");
    }
    catch (error) {
        res.status(500).send("something went wrong" + error);
    }
};
export const updateEmployee = async (req, res) => {
    const query = { _id: req.query.id };
    const updateDocument = { $set: req.body };
    try {
        const resp = await employeeModel.findOneAndUpdate(query, updateDocument);
        response.status(200).send("successfully updated employee");
    }
    catch (error) {
        res.status(500).send(`this was the error: ${error}`);
    }
};
export const deleteEmployee = async (req, res) => {
    const query = { _id: req.query.id };
    try {
        const resp = await employeeModel.deleteOne(query);
        res.send("deleted successfully" + resp.acknowledged);
    }
    catch (error) {
        res.status(500).send("something went wrong" + error);
    }
};
//# sourceMappingURL=employee.controllers.js.map