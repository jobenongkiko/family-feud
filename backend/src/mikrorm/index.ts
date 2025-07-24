import { EntityManager, MikroORM, RequestContext } from "@mikro-orm/core";
import config from "../mikro-orm.config";
import { RequestHandler } from "express";

const configureMikroORM = async () => {
  const orm = await MikroORM.init(config);
  // disabled cuz I cant use migrations in supabase and I'm lazy to add quick change without code changes
  // const migrator = orm.getMigrator();
  // await migrator.up();
  return orm;
};

export const mikroORMem: RequestHandler = async (_, __, next) => {
  const orm = await configureMikroORM();
  const em: EntityManager = orm.em.fork();
  RequestContext.create(em, next);
};

export const entityManager = () => {
  const em: EntityManager | undefined = RequestContext.getEntityManager();

  if (!em) {
    return {error: 'Entity manager not available'};
  }

  return em;
}
