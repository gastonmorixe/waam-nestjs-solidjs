import {
  Entity,
  Property,
  Unique,
  OneToMany,
  Cascade,
  Collection,
} from '@mikro-orm/core'
import { Field, ObjectType } from '@nestjs/graphql'

import { BaseEntity } from '../base.entity'
import { Note } from '../note/note.entity'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Property()
  @Field(() => String, { nullable: false })
  name: string

  @Property()
  @Unique()
  @Field(() => String, { nullable: false })
  email: string

  @Property()
  @Unique()
  @Field(() => String, { nullable: false })
  username: string

  @Property()
  @Field(() => Date, { nullable: true })
  born?: Date

  @OneToMany(() => Note, (u) => u.createdBy, { cascade: [Cascade.ALL] })
  @Field(() => [Note], { nullable: true })
  notes = new Collection<Note>(this)

  // constructor(name: string, email: string) {
  //   super()
  //   this.name = name
  //   this.email = email
  // }
}
