import { Router } from "express";
import { getUsers, postUsers, updateUser, deleteUser } from "../controllers/user.controllers.js";

const router = Router();

router.get('/users', getUsers)
router.post('/user', postUsers)
router.put('/user', updateUser)
router.delete('/user', deleteUser)


export  { router as userRouter};