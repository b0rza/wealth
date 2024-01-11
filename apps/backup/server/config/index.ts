import * as dotenv from 'dotenv';
dotenv.config();

const { env } = process;

export const database = {
  host: env.DB_HOSTNAME || 'localhost',
  port: parseInt('env.DB_PORT'),
  dbName: env.DB_NAME,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
}
