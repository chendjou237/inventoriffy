import { Request, response, Response } from "express";
import { findEmployee,findEmployees, createEmployee, editEmployee, removeEmployee } from "../services/employee.services.js";

export const getEmployees = async (req: Request, res: Response) => {
  try {
   const employee = await findEmployees();
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getEmployee = async (req: Request, res: Response) => {
  try {
   const employee = await findEmployee(req.query.id.toString());
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const postEmployees = async (req: Request, res: Response) => {


  try {
    const newEmployee = await createEmployee(req.body);

    res
      .status(200)
      .send(`posted ${newEmployee} was created`);
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  
 

  try { 
 await  editEmployee(req.body, req.query.id.toString());
    response.status(200).send("successfully updated employee");
  } catch (error) {
    res.status(500).send(`this was the error: ${error}`);
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  const query = { _id: req.query.id };
  try {
    await removeEmployee(req.query.id.toString());
    res.send("deleted successfully" );
  } catch (error) {
    res.status(500).send("something went wrong" + error);
  }
};
