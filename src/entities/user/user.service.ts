import {
  Dependencies,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import { EntityRepository } from '@mikro-orm/core'
import { InjectRepository } from '@mikro-orm/nestjs'

import { User } from './user.entity'

@Injectable()
@Dependencies(EntityRepository)
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: EntityRepository<User>,
  ) {
    this.repository = repository
  }

  async findByUsername(username: string) {
    const model = await this.repository.findOne(
      { username },
      // TODO: populate
    )

    if (!model) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return model
  }

  async create(props: { username: string; email: string; name: string }) {
    const entity = this.repository.create(props)

    await this.repository.persistAndFlush(entity)

    // if (!model) {
    //   throw new HttpException(
    //     'User creation failed',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   )
    // }

    return entity
  }
}
