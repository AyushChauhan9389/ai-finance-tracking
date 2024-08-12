import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://data_owner:LdVZ8QI7vyCx@ep-black-star-a17bfhy8.ap-southeast-1.aws.neon.tech/data?sslmode=require"
);
export const db = drizzle(sql, { schema });
