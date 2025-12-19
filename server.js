import app from "./app.js";
import connectDB from "./database/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4001;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
