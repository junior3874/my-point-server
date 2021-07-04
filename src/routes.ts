import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  console.log("patolino");
  return;
});
