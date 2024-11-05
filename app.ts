import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

const isLocal = process.env.IS_LOCAL === "true";

if (isLocal) {
  dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get("/pug", (req: Request, res: Response) => {
  res.sendStatus(200);
});

// 404 Error Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Not Found" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port 3000");
});
