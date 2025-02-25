import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import ProductRouter from "./routes/product.routes.js";

dotenv.config();
const app = express();

app.use(express.json()); // allows to take json as req body

app.use("/api/products", ProductRouter);

const appPort = process.env.PORT || 5000;

app.listen(appPort, () => {
  connectDB();
  console.log("app is listening at port ", appPort);
});
