import { Migration } from '@mikro-orm/migrations'

export class Migration20220116195244 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "user" add column "password" varchar(255);')
  }
}
