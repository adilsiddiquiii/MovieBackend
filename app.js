import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

app.use(cors({ origin: [
      "http://localhost:5173",
    ],}));
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movies", movieRoutes);

export default app;
