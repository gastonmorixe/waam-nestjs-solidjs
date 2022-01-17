import { Dependencies } from '@nestjs/common'
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'

import { User } from './user.entity'
import { UserService } from './user.service'

@Resolver(() => User)
@Dependencies(UserService)
export class UserResolver {
  constructor(private service: UserService) {
    this.service = service
  }

  @Query(() => User, { nullable: true })
  async userByUsername(
    @Args('username', { type: () => String }) username: string,
  ) {
    return this.service.findByUsername(username)
  }

  @Mutation(() => User, { nullable: false })
  async userCreate(
    @Args('username', { type: () => String }) username: string,
    @Args('name', { type: () => String }) name: string,
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    return this.service.create({ username, name, email, password })
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author
  //   return this.postsService.findAll({ authorId: id })
  // }
}
