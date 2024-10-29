import { MikroORM } from "@mikro-orm/core";
import { Question } from './entities/questionEntity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Answer } from './entities/answerEntity';

export default {
  entities: [Question, Answer],
  dbName: process.env.DB_NAME!,
  driver: PostgreSqlDriver,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  debug: process.env.NODE_ENV !== 'production',
} as Parameters<typeof MikroORM.init>[0];
