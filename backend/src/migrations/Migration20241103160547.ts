import { Migration } from '@mikro-orm/migrations';

export class Migration20241103160547 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "room" add column "room_name" varchar(255) not null, add column "question_uuid" varchar(255) not null;`);
    this.addSql(`alter table "room" add constraint "room_question_uuid_foreign" foreign key ("question_uuid") references "question" ("uuid") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "room" drop constraint "room_question_uuid_foreign";`);

    this.addSql(`alter table "room" drop column "room_name", drop column "question_uuid";`);
  }

}
