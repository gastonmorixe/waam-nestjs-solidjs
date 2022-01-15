import { PrimaryKey, Property } from '@mikro-orm/core'

export abstract class BaseEntity {
  @PrimaryKey({ type: 'number' })
  id!: number

  @Property({
    // type: Date
  })
  createdAt = new Date()

  @Property({ type: Date, onUpdate: () => new Date() })
  updatedAt = new Date()
}
