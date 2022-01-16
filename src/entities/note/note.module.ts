import { Module } from '@nestjs/common'

import { OrmModule } from '../../modules/orm/orm.module'

@Module({
  imports: [OrmModule],
  providers: [],
})
export class NoteModule {}
