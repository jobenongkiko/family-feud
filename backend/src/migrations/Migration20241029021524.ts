import { Migration } from '@mikro-orm/migrations';

export class Migration20231029000000 extends Migration {

  override async up(): Promise<void> {
    this.addSql('create table "question" ("uuid" uuid not null primary key, "created_at" timestamp not null, "updated_at" timestamp not null, "question" text not null, "category" text not null);');
    
    this.addSql('create table "answer" ("uuid" uuid not null primary key, "created_at" timestamp not null, "updated_at" timestamp not null, "answer" text not null, "points" int not null, "question_uuid" uuid not null, constraint "fk_answer_question" foreign key ("question_uuid") references "question" ("uuid") on update cascade on delete cascade);');
  }

  override async down(): Promise<void> {
    this.addSql('drop table if exists "answer";');
    this.addSql('drop table if exists "question";');
  }
}
