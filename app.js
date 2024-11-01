import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${3000}/ `);
});