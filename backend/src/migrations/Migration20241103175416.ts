import { Migration } from '@mikro-orm/migrations';

export class Migration20241103175416 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "question" ("uuid" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null, "question" varchar(255) not null, "category" varchar(255) not null, constraint "question_pkey" primary key ("uuid"));`);

    this.addSql(`create table "answer" ("uuid" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null, "question_uuid" varchar(255) not null, "answer" varchar(255) not null, "points" int not null, constraint "answer_pkey" primary key ("uuid"));`);

    this.addSql(`create table "room" ("uuid" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null, "room_name" varchar(255) not null, "question_uuid" varchar(255) not null, "socket_id" varchar(255) not null, constraint "room_pkey" primary key ("uuid"));`);

    this.addSql(`alter table "answer" add constraint "answer_question_uuid_foreign" foreign key ("question_uuid") references "question" ("uuid") on update cascade;`);

    this.addSql(`alter table "room" add constraint "room_question_uuid_foreign" foreign key ("question_uuid") references "question" ("uuid") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "answer" drop constraint "answer_question_uuid_foreign";`);

    this.addSql(`alter table "room" drop constraint "room_question_uuid_foreign";`);

    this.addSql(`drop table if exists "question" cascade;`);

    this.addSql(`drop table if exists "answer" cascade;`);

    this.addSql(`drop table if exists "room" cascade;`);
  }

}
