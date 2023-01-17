import { Router } from "express";
import { getEmployee, getEmployees, postEmployees, updateEmployee, deleteEmployee } from "../controllers/employee.controllers.js";
const router = Router();
router.get('/employee', getEmployee);
router.get('/employees', getEmployees);
router.post('/employee', postEmployees);
router.put('/employee', updateEmployee);
router.delete('/employee', deleteEmployee);
export { router as EmployeeRouter };
//# sourceMappingURL=employee.routes.js.map