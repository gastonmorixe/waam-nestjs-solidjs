import {
  Entity,
  Property,
  // Cascade,
  // Collection,
  // OneToMany,
  // ManyToOne,
} from '@mikro-orm/core'

import { BaseEntity } from '../base.entity'
// import { Book } from '.'

@Entity()
export class User extends BaseEntity {
  @Property({ type: 'string' })
  name: string

  @Property({ type: 'string' })
  email: string

  // @Property()
  // age?: number

  // @Property()
  // termsAccepted = false

  @Property({ type: Date })
  born?: Date

  // @OneToMany(() => Book, (b) => b.author, { cascade: [Cascade.ALL] })
  // books = new Collection<Book>(this)

  // @ManyToOne(() => Book)
  // favouriteBook?: Book

  // constructor(name: string, email: string) {
  //   super()
  //   this.name = name
  //   this.email = email
  // }
}
