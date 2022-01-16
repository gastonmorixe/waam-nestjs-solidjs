import { Module } from '@nestjs/common'

import { OrmModule } from '../../modules/orm/orm.module'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'
// import { UserController } from './user.controller'

@Module({
  imports: [OrmModule],
  // controllers: [UserController],
  providers: [UserService, UserResolver],
  // exports: [UserService],
})
export class UserModule {}
