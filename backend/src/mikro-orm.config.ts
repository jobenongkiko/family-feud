import { MikroORM } from "@mikro-orm/core";
import { Question } from './entities/questionEntity';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Answer } from './entities/answerEntity';
import { DB_CONFIG } from './config';

export default {
  entities: [Question, Answer],
  dbName: DB_CONFIG.dbName!,
  driver: PostgreSqlDriver,
  user: DB_CONFIG.user,
  password: DB_CONFIG.password,
  host: DB_CONFIG.host,
  port: DB_CONFIG.port!,
  debug: DB_CONFIG.debug,
} as Parameters<typeof MikroORM.init>[0];
