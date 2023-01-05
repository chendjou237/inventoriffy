import { Request, Response } from "express";
import  orderModel  from "../models/order.model.js";

export const  getOrders = async(req: Request, res: Response) => {
  try {
    const orders = await (await orderModel.find());
    res.status(200).send(orders);
  } catch (error) {
    throw error
  }
  res.status(200).send("get orders");
};

export const postOrder = async(req: Request, res: Response) => {
  

  try {
    const newOrder =  (await orderModel.create(req.body));
 await newOrder.save();

  res
    .status(200)
    .send(
      "posted order was successfull " 
    );
    
  } catch (error) {
    throw new Error(`${error}`);
    
  }
 
};


export const updateOrder = async(req: Request, res: Response) => {
    const query = {"_id": req.params.id}
    const newValue = req.body
    try {
     const result =   await orderModel.updateOne(query, newValue, )
            
        res.status(200).send("updated order");
    } catch (error) {
        res.status(500).send(`internal server error: ${error}`)
    }
    }
   
export const deleteOrder = async(req: Request, res: Response) => {
    const query = {"_id": req.params.id}
    try {
       const result = await orderModel.deleteOne(query)
        console.log("was the order deleted successfully ? "+ result.acknowledged);

        res.status(200).send("deleted order");
        
    } catch (error) {
        console.log(`something went wrong this may be the error: ${error}`);
        
    }
    }   