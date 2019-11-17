import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm'

@Entity('hobbies')
export class Hobby extends BaseEntity {
  @ObjectIdColumn() id: ObjectID
  @Column() title: string
  @Column() description: string
  @Column() userId: string
  @Column() status: String
  @Column() creation: Date
}
