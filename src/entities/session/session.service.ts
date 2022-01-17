import {
  Dependencies,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { EntityRepository } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'
import bcrypt from 'bcrypt'

import { User } from '../user/user.entity'

@Injectable()
@Dependencies(EntityRepository)
export class SessionService {
  constructor(
    @InjectRepository(User)
    private readonly repository: EntityRepository<User>,
  ) {
    this.repository = repository
  }

  async auth(username: string, password: string) {
    const model = await this.repository.findOne(
      { username },
      // TODO: populate
    )

    if (!model) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    const match = await bcrypt.compare(password, model.password)

    if (match) {
      return {
        jwt: 'TODO-TOKEN',
        user: model,
      }
    }

    throw new Error('Auth failed')
  }
}
