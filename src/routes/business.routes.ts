import { Router } from "express";
import { getBusinessesController, postBusinessesController, updateBusinessController, deleteBusinessController } from "../controllers/business.controllers.js";

const router = Router();

router.get('/Businesses', getBusinessesController)
router.post('/Business', postBusinessesController)
router.put('/Business', updateBusinessController)
router.delete('/Business', deleteBusinessController)

export  { router as BusinessRouter};