import { Router } from "express";
import { getEmployee, postEmployees, updateEmployee, deleteEmployee } from "../controllers/employee.controllers.js";
const router = Router();
router.get('/employee', getEmployee);
router.post('/employee', postEmployees);
router.put('/employee', updateEmployee);
router.delete('/employee', deleteEmployee);
export { router as EmployeeRouter };
//# sourceMappingURL=employee.routes.js.map