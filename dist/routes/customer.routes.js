import { Router } from "express";
import { getCustomer, postCustomers, updatecustomer, deletecustomer } from "../controllers/customer.controllers.js";
const router = Router();
router.get('/customer', getCustomer);
router.post('/customer', postCustomers);
router.put('/customer', updatecustomer);
router.delete('/customer', deletecustomer);
export { router as customerRouter };
//# sourceMappingURL=customer.routes.js.map