import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import appRouter from "./routes/index.js";

import fileUpload from "express-fileupload";

const app = express();

// DB CONNECTION
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.DB_URL}`);
  console.log("MONGO DATABASE CONNECTED");
}

// Middleware
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/app", appRouter);
app.get("/api/hello", (req, res) => {
  res.send("hello");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`SERVER STARTED ON PORT ${port}`);
});
