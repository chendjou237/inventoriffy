import { Router } from "express";
import { getUsers, postUsers, updateUser, deleteUser } from "../controllers/user.controllers.js";
import pkg from "express-openid-connect";
const router = Router();
const { requiresAuth } = pkg;
router.get('/users', requiresAuth(), getUsers);
router.post('/user', postUsers);
router.put('/user', updateUser);
router.delete('/user', deleteUser);
export { router as userRouter };
//# sourceMappingURL=user.routes.js.map