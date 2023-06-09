import mysql from "mysql"
import 'dotenv/config';

export const db = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  //  password: process.env.DB_KEY,
  database: process.env.database,
})