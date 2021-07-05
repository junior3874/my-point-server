import express from "express";

const routes = express.Router();

routes.post("/register", (req, res) => {
  return res.status(200).end();
});

export default routes;
