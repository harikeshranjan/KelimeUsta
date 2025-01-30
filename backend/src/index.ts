import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import vocabRoutes from "./routes/vocabs";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
})); // Enable CORS for all requests

mongoose.connect(process.env.MONGO_URI as string, { dbName: "KelimeUsta" })
  .then(() => console.log("[db]: Connected to database"))
  .catch((err) => console.log("[db]: Database connection failed", err));

app.use("/vocabs", vocabRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});