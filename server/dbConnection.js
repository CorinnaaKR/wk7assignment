import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const dbConnection = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});
