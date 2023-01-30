import { Router } from "express";

const   indexRouter = Router();

 indexRouter.get("/", (req, res) => {
  res.send(`the user is ${req.oidc.isAuthenticated() ? "signed in":"not signed in"}`);
})

export default indexRouter;