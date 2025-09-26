import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
app.listen(PORT, function () {
  console.info(` Server is running in port ${PORT}`);
});

app.get("/", function (req, res) {
  res.json({ message: "Welcome to the server. GET comfy" });
});

app.get("/brain", async function (req, res) {
  const response = await db.query(`SELECT * from brain`);
  console.log(response.rows);
  res.json(response.rows);
});

app.post("/add-brain", (req, res) => {
  const newEntry = req.body;
  const query = db.query(
    `INSERT INTO brain (name, type, entry) VALUES ($1, $2, $3)`,
    [newEntry.name, newEntry.type, newEntry.entry]
  );
  res.json("Data sent", query);
});
