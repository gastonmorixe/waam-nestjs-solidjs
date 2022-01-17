import { Dependencies } from '@nestjs/common'
import { Resolver, Args, Mutation } from '@nestjs/graphql'

import { Session } from './session.entity'
import { SessionService } from './session.service'

@Resolver(() => Session)
@Dependencies(SessionService)
export class SessionResolver {
  constructor(private service: SessionService) {
    this.service = service
  }

  @Mutation(() => Session, { nullable: false })
  async auth(
    @Args('username', { type: () => String }) username: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    return this.service.auth(username, password)
  }
}
