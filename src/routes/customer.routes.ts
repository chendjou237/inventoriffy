import { Router } from "express";
import { getCustomer, postCustomers, updatecustomer, deletecustomer } from "../controllers/customer.controllers.js";

const router = Router();

router.get('/customers', getCustomer)
router.post('/customer', postCustomers)
router.put('/customer', updatecustomer)
router.delete('/customer', deletecustomer)

export  { router as customerRouter};