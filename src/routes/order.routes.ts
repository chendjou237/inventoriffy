import { Router } from "express";
import { getOrders, postOrder, updateOrder, deleteOrder } from "../controllers/order.controllers.js";

const router = Router();

router.get('/orders', getOrders)
router.post('/order', postOrder)
router.put('/order', updateOrder)
router.delete('/order', deleteOrder)

export  { router as OrderRouter};