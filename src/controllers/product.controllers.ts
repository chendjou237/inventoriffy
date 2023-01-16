import { Request, Response } from "express";
import  userModel  from "../models/user.models.js";

export const  getOrders = async(req: Request, res: Response) => {
  try {
    const users = (await userModel.find());
    res.status(200).send(users);
  } catch (error) {
    throw error
  }
  res.status(200).send("get users");
};

export const postOrder = async(req: Request, res: Response) => {
  if(!req.body.name || !req.body.email) {
    res.status(400).send("name and email are required");
    return;
  }

  try {
    const newUser =  (await userModel.create(req.body));
 await newUser.save();

  res
    .status(200)
    .send(
      "posted user name is " +  + " and email is " + req.body.email
    );
    
  } catch (error) {
    throw new Error(`${error}`);
    
  }
 
};

export const updateOrder = (req: Request, res: Response) => {
    res.status(200).send("updated user");
    }

export const deleteOrder = (req: Request, res: Response) => {
    res.status(200).send("deleted user");
    }   