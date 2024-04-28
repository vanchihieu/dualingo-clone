import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL!;
const sql = neon("postgresql://lingo_owner:Yb7AClzmeSs0@ep-falling-lake-a54zbkpp.us-east-2.aws.neon.tech/lingo?sslmode=require");
const db = drizzle(sql, { schema });

export default db;
