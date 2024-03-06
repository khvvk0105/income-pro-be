const { Pool } = require("pg");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const pgConif = {
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
};

const pool = new Pool(pgConif);

// app.get("/users", async (req, res) => {
//   const client = await pool.connect();
//   try {
//     client.query("SELECT * FROM users");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     client.release();
//   }
//   res.status(200).send({ message: "success" });
// });
app.post("/add-user", async (req, res) => {
  const newUser = req.body;

  console.log(newUser);
  const client = await pool.connect();
  const Query = `INSERT INTO users (name, age, email, id, phone) VALUES ('${newUser.name}','${newUser.age}','${newUser.email}','${newUser.id}','${newUser.phone}');`;
  res.status(200).send({ message: "User Added successfully" });
  try {
    client.query(Query);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
});
app.delete("/user-delete", async (req, res) => {
  const userDelete = req.body;
  console.log(userDelete);
  const client = await pool.connect();
  const D = `UPDATE users SET'(column1=${up.name}','${up.age}','${up.email}','${up.id}','${up.phone}');`;
  res.status(200).send({ message: "User Added successfully" });
  try {
    client.query(D);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
