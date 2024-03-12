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
exports.createTable = async (req, res) => {
  const client = await pool.connect();
  try {
    client.query(`CREATE TABLE login AS
  SELECT name VARCHAR(255),password VARCHAR(255),FROM users WHERE`);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  res.status(200).send({ message: "success" });
};
