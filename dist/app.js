import express from "express";
const app = express();
import getConnection from "./config/db.js";
import { authConfig } from "./config/auth.js";
import cors from "cors";
import { config } from "dotenv";
config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authConfig);
import indexRouter from "./routes/index.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { customerRouter } from "./routes/customer.routes.js";
import { EmployeeRouter } from "./routes/employee.routes.js";
import { ProductRouter } from "./routes/product.routes.js";
import { BusinessRouter } from "./routes/business.routes.js";
// if (process.env.NODE_ENV === 'production') {
//   //*Set static folder up in production
//   app.use(express.static('client/build'));
//   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }
app.use("/", indexRouter);
app.use("/api", userRouter);
app.use("/api", customerRouter);
app.use("/api", EmployeeRouter);
app.use("/api", ProductRouter);
app.use("/api", BusinessRouter);
const PORT = process.env.PORT || "8080";
app.listen(PORT, async () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
    await getConnection();
});
//# sourceMappingURL=app.js.map