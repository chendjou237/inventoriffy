import express, { Application } from "express";

const app: Application = express();

import getConnection from "./config/db.js";
import cors from "cors";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import indexRouter from "./routes/index.routes.js";
import {userRouter} from "./routes/user.routes.js";
// if (process.env.NODE_ENV === 'production') {
//   //*Set static folder up in production
//   app.use(express.static('client/build'));

//   app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
// }
app.use("/", indexRouter);
app.use("/api", userRouter);

const PORT: string = process.env.PORT || "8080";

app.listen(PORT,async () => {

  console.log(`Example app listening at http://localhost:${PORT}`);
  await getConnection();
});
