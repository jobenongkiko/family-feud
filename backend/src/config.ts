
import 'dotenv/config';

export const DB_CONFIG: DatabaseConfig = {
  dbName: process.env.DB_NAME!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT!),
  debug: process.env.NODE_ENV !== 'production',
}

