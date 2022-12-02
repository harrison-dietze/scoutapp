const express = require("../../express");
const path = require("path");
const db = require("./db-connection/connection.ts");
import { Request, Response } from "express";

const coursesFilePath = path.resolve(__dirname, "./csv-data/total-courses.csv");
const enteringStudentsFilePath = path.resolve(
  __dirname,
  "./csv-data/entering-students.csv"
);

const userRouter = express.Router();

userRouter.get("usuario", async (req: Request, res: Response) => {
  const query: string = "SELECT * FROM usuarios";
  db.executeQuery();
  return res.send("");
});

// userRouter.get("usuario", async (req: Request, res: Response) => {
//   const query: string = "SELECT * FROM usuarios";
//   db.executeQuery();
//   return res.send("");
// });

export { userRouter };
