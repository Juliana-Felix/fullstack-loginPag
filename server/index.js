import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connect to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

/*app.use(cookieParser());
app.use(express.json());
app.use("/api/auth");

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});*/

app.listen(8800, () => {
  connect();
  console.log("Connected to Server!");
});