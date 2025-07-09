import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { env } from '../env.ts';
import { schema } from './schema/index.ts';

//permitir fazer as querys do db
export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
});
