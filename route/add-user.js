const { Pool } = require("pg");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
});

exports.addUser = async (req, res) => {
  const client = await pool.connect();
  const newUser = req.body;
  console.log(newUser);
  const Query = `INSERT INTO users (name, age, email, id, phone) VALUES ('${newUser.name}','${newUser.age}','${newUser.email}','${newUser.id}','${newUser.phone}');`;
  res.status(200).send({ message: "User Added successfully" });
  try {
    client.query(Query);
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
};

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
