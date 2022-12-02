const dotenv = require("dotenv");
const { Pool } = require("pg");
const env = require("../environment.json");
dotenv.config();

async function executeQuery(query: string) {
  try {
    const pool = new Pool({
      user: env.PGUSER,
      host: env.PGHOST,
      database: env.PGDATABASE,
      password: env.PGPASSWORD,
      port: env.PGPORT,
    });

    await pool.connect();
    const res = await pool.query(query);
    await pool.end();

    return res;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { executeQuery };
