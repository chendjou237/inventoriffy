


import { Request,  Response } from "express";
import { getBusinesses,getbusiness, postbusiness, updatebusiness, deletebusiness } from "../services/business.services.js";

export const getBusinessesController = async (req: Request, res: Response) => {
  try {
   const business = await getBusinesses();
    res.status(200).send(business);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getBusinessController = async (req: Request, res: Response) => {
  try {
   const business = await getbusiness(req.query.id.toString());
    res.status(200).send(business);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const postBusinessesController = async (req: Request, res: Response) => {


  try {
    const newBusiness = await postbusiness(req.body);

    res
      .status(200)
      .send(`posted ${newBusiness} was created`);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};

export const updateBusinessController = async (req: Request, res: Response) => {
  
 

  try { 
 await  updatebusiness( req.query.id.toString(),req.body);
    res.status(200).send("successfully updated employee");
  } catch (error) {
    res.status(500).send(`this was the error: ${error}`);
  }
};

export const deleteBusinessController = async (req: Request, res: Response) => {
  const query = { _id: req.query.id };
  try {
    await deletebusiness(req.query.id.toString());
    res.send("deleted successfully" );
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};
