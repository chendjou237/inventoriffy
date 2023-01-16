import { response } from "express";
import businessModels from "../models/business.models.js";
export const getBusinesses = async (req, res) => {
    try {
        const businesss = await (await businessModels.find());
        res.status(200).send(businesss);
    }
    catch (error) {
        throw error;
    }
    res.status(200).send("get businesss");
};
export const postBusiness = async (req, res) => {
    if (!req.body.name || !req.body.email) {
        res.status(400).send("name and unit price are required");
        return;
    }
    try {
        const newBusiness = (await businessModels.create(req.body));
        await newBusiness.save();
        res
            .status(200)
            .send("posted business name is " + req.body.name + " and email is " + req.body.email);
    }
    catch (error) {
        throw new Error(`${error}`);
    }
};
export const updateBusiness = async (req, res) => {
    const query = { _id: req.query.id };
    const updateDocument = { $set: req.body };
    try {
        const resp = await businessModels.findOneAndUpdate(query, updateDocument, { upsert: true });
        await resp.save();
        response.status(200).send("successfully updated business");
    }
    catch (error) {
        res.status(500).send(`this was the error: ${error}`);
    }
};
export const deleteBusiness = async (req, res) => {
    const query = { _id: req.query.id };
    try {
        const resp = await businessModels.deleteOne(query);
        res.send("deleted successfully" + resp.acknowledged);
    }
    catch (error) {
        res.status(500).send("something went wrong" + error);
    }
};
//# sourceMappingURL=business.controllers.js.map