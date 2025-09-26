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

app.post("/add-character", (req, res) => {
  const newCharacter = req.body;
  const query = db.query(
    `INSERT INTO character (name, age, gender, class, race, background, alignment, other) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [
      newCharacter.formValues.name,
      newCharacter.formValues.age,
      newCharacter.formValues.gender,
    ]
  );
  res.json("Data sent", query);
});
