import {
  Entity,
  Property,
  ManyToOne,
  // Unique,
  // Index,
  // Cascade,
  // Collection,
  // OneToMany,
} from '@mikro-orm/core'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseEntity } from '../base.entity'
import { User } from '../user/user.entity'

@Entity()
@ObjectType()
export class Note extends BaseEntity {
  @Property()
  @Field(() => String, { nullable: false })
  content: string

  @ManyToOne(() => User)
  @Field(() => User, { nullable: false })
  createdBy?: User
}
