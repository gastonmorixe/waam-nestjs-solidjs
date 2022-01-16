import { Migration } from '@mikro-orm/migrations';

export class Migration20220116071727 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null, "email" varchar(255) not null, "username" varchar(255) not null, "born" timestamptz(0) null);');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');

    this.addSql('create table "note" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "content" varchar(255) not null, "created_by_id" int4 null);');

    this.addSql('alter table "note" add constraint "note_created_by_id_foreign" foreign key ("created_by_id") references "user" ("id") on update cascade on delete set null;');
  }

}
