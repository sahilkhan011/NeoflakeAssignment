import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import appRouter from "./routes/index.js";

dotenv.config();
const app = express();

// DB CONNECTION
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.DB_URL}`);
  console.log("MONGO DATABASE CONNECTED");
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/app", appRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}`);
});
