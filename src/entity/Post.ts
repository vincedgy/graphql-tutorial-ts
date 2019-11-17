import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm'

@Entity('posts')
export class Post extends BaseEntity {
  @ObjectIdColumn() id: ObjectID
  @Column() title: string
  @Column() comment: string
  @Column() userId: string
  @Column() creation: Date
}
