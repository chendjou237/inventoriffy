import { Router } from "express";
import { getProducts, postProduct, updateProduct, deleteProduct } from "../controllers/product.controllers.js";

const router = Router();

router.get('/Products', getProducts)
router.post('/Product', postProduct)
router.put('/Product', updateProduct)
router.delete('/Product', deleteProduct)

export  { router as ProductRouter};