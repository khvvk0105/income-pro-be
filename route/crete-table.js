const { Pool } = require("pg");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;
const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: {
    require: true,
  },
});
// console.log("pool", pool);
exports.createTable = async (req, res) => {
  console.log("heviiin");
  const client = await pool.connect();
  const Query = `CREATE TABLE login (name VARCHAR(255), password VARCHAR(255))`;
  try {
    await client.query(Query);
    console.log("try ajiljiin");
    res.status(200).send({ message: "success" });
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};
