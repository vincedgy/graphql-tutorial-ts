import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm'

@Entity('persons')
export class Person extends BaseEntity {
  @ObjectIdColumn() id: ObjectID
  @Column() firstName: string
  @Column() lastName: string
  @Column() age: number
  @Column() profession: string
  @Column() userId: string
  @Column() creation: Date
}
