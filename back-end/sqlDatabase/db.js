//importing dependency
const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "image_db",
  port: 5432,
});

pool.connect((err) => {
  if (err) throw new Error("Error inside db.js: ", err);
});

console.log("PostgreSQL database connection establishing...");
//exporting pool
module.exports = pool;
