import { Module } from '@nestjs/common'

import { OrmModule } from '../../modules/orm/orm.module'
// import { UserController } from './user.controller'

@Module({
  imports: [OrmModule],
  // controllers: [UserController],
  providers: [],
})
export class UserModule {}
