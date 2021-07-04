import express from "express";
import dotenv from "dotenv";
const app = express();

console.log(process.env.NODE_ENV);
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});
