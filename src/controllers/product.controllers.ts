import { Request, response, Response } from "express";
import  productModels  from "../models/product.models.js";

export const  getProducts = async(req: Request, res: Response) => {
  try {
    const products = (await productModels.find());
    res.status(200).send(products);
  } catch (error) {
    throw error
  }
  res.status(200).send("get products");
};

export const postProduct = async(req: Request, res: Response) => {
  if(!req.body.name || !req.body.unitPrice) {
    res.status(400).send("name and unit price are required");
    return;
  }

  try {
    const newProduct =  (await productModels.create(req.body));
 await newProduct.save();

  res
    .status(200)
    .send(
      "posted product name is " + req.body.name + " and price is " + req.body.unitPrice
    );
    
  } catch (error) {
    throw new Error(`${error}`);
    
  }
 
};
export const updateProduct = async (req: Request, res: Response) => {
  
  const query = { _id: req.query.id};

  const updateDocument = { $set: req.body};

  try { 
   const resp = await productModels.findOneAndUpdate(query, updateDocument,  {upsert: true});
   await resp.save()
    response.status(200).send("successfully updated product");
  } catch (error) {
    res.status(500).send(`this was the error: ${error}`);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const query = { _id: req.query.id };
  try {
    const resp = await productModels.deleteOne(query);
    res.send("deleted successfully" + resp.acknowledged);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};
