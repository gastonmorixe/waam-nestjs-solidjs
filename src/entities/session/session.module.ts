import { Module } from '@nestjs/common'

import { OrmModule } from '../../modules/orm/orm.module'
import { SessionResolver } from './session.resolver'
import { SessionService } from './session.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [OrmModule, UserModule],
  providers: [SessionService, SessionResolver],
})
export class SessionModule {}
