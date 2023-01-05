import { Request, response, Response } from "express";
import userModel from "../models/user.models.js";


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const postUsers = async (req: Request, res: Response) => {
  if (!req.body.name || !req.body.email) {
    res.status(400).send("name and email are required");
    return;
  }

  try {
    const newUser = await userModel.create(req.body);
    await newUser.save();

    res
      .status(200)
      .send("posted user name is " + +" and email is " + req.body.email);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  
  const query = { _id: req.query.id};

  const updateDocument = { $set: req.body};

  try { 
   const resp = await userModel.findOneAndUpdate(query, updateDocument,  {upsert: true});
   await resp.save()
    response.status(200).send("successfully updated user");
  } catch (error) {
    res.status(500).send(`this was the error: ${error}`);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const query = { _id: req.query.id };
  try {
    const resp = await userModel.deleteOne(query);
    res.send("deleted successfully" + resp.acknowledged);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};
