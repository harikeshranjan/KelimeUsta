import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import vocabRoutes from "./routes/vocabs";
import flashcardReportRoutes from "./routes/flashcard-report";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.options("*", cors()); // include before other routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL as string,
      process.env.ADMIN_URL as string,
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

mongoose.connect(process.env.MONGO_URI as string, { dbName: "KelimeUsta" })
  .then(() => console.log("[db]: Connected to database"))
  .catch((err) => console.log("[db]: Database connection failed", err));

app.use("/vocabs", vocabRoutes);
app.use("/flashcards", flashcardReportRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});