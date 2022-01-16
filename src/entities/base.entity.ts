import { PrimaryKey, Property } from '@mikro-orm/core'
import { ObjectType, Field, Int } from '@nestjs/graphql'

@ObjectType()
export abstract class BaseEntity {
  @PrimaryKey({ type: 'number' })
  @Field(() => Int) // ID
  id: number

  @Property()
  @Field(() => Date)
  createdAt = new Date()

  @Property({ onUpdate: () => new Date() })
  @Field(() => Date)
  updatedAt = new Date()
}
