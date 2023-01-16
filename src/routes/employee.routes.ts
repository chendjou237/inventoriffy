import { Router } from "express";
import { getEmployee, postEmployees, updateEmployee, deleteEmployee } from "../controllers/employee.controllers.js";

const router = Router();

router.get('/', getEmployee)
router.post('/', postEmployees)
router.put('/', updateEmployee)
router.delete('/', deleteEmployee)

export  { router as EmployeeRouter};