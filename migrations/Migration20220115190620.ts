import { Migration } from '@mikro-orm/migrations'

export class Migration20220115190620 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "created_at" jsonb not null, "updated_at" jsonb not null, "name" varchar(255) not null, "email" varchar(255) not null, "born" timestamptz(0) not null);',
    )
  }
}
