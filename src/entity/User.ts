import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
  @ObjectIdColumn() id: ObjectID
  @Column() name: string
  @Column() email: string
  @Column() creation: Date
}
