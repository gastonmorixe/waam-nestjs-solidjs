import { Field, ObjectType } from '@nestjs/graphql'

import { User } from '../user/user.entity'

@ObjectType()
export class Session {
  @Field(() => String, { nullable: false })
  jwt: string

  @Field(() => User, { nullable: false })
  user: User
}
