const { Pool } = require("pg");

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

async function getUsers() {
  const client = await pool.connect();
  let response;
  try {
    response = await client.query("SELECT * FROM users");
  } catch (error) {
    throw new Error(error ? error.message : "Error");
  } finally {
    client.release();
  }
  return response.rows;
}

async function createTable() {
  const client = await pool.connect();
  let response;
  try {
    response = await client.query(
      "CREATE TABLE persons (name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), rePassword VARCHAR(255), id VARCHAR(255)"
    );
  } finally {
    client.release();
  }
  return response;
}

async function addUser() {
  const client = await pool.connect();
  let response;
  try {
    response = await client.query(
      "INSERT INTO add-user (name, age, email, id, phone) VALUES"
    );
  } finally {
    client.release();
  }
  return response;
}

module.exports = {
  getUsers,
  //   addUser,
  createTable,
};
