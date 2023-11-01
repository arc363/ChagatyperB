import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "chagatyper",
  password: "postgres",
  port: 5432,
});

// A basic error message if the connection pool dies
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export { pool };
