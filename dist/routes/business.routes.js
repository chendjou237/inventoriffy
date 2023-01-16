import { Router } from "express";
import { getBusinesses, postBusiness, updateBusiness, deleteBusiness } from "../controllers/business.controllers.js";
const router = Router();
router.get('/Businesses', getBusinesses);
router.post('/Business', postBusiness);
router.put('/Business', updateBusiness);
router.delete('/Business', deleteBusiness);
export { router as BusinessRouter };
//# sourceMappingURL=business.routes.js.map