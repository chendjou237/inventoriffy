import { Request, response, Response } from "express";
import customerModel from "../models/customer.models.js";


export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await await customerModel.find();
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const postCustomers = async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send("name and email are required");
    return;
  }

  try {
    const newCustomer = await customerModel.create(req.body);
    await newCustomer.save();

    res
      .status(200)
      .send("posted customer name is " + +" and email is " + req.body.email);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};

export const updatecustomer = async (req: Request, res: Response) => {
  
  const query = { _id: req.query.id};

  const updateDocument = { $set: req.body};

  try { 
   const resp = await customerModel.findOneAndUpdate(query, updateDocument,  {upsert: true});
    response.status(200).send("successfully updated customer");
  } catch (error) {
    res.status(500).send(`this was the error: ${error}`);
  }
};

export const deletecustomer = async (req: Request, res: Response) => {
  const query = { _id: req.query.id };
  try {
    const resp = await customerModel.deleteOne(query);
    res.send("deleted successfully" + resp.acknowledged);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};
