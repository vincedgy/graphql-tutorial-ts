import * as logger from 'loggy'
import { UserEntity, PersonEntity, PostEntity, HobbyEntity } from './entity'

import { GraphQLDateTime } from 'graphql-iso-date'
import { IResolvers } from 'graphql-tools'
import { User } from './entity/User'

export const resolvers: IResolvers = {
  DateTime: GraphQLDateTime,

  Query: {
    users: () => UserEntity.find(),
    user: (_, args) => UserEntity.findOne(args.id),
    hobbies: () => HobbyEntity.find(),
    hobby: (_, args) => HobbyEntity.findOne(args.id),
    posts: () => PostEntity.find(),
    post: (_, args) => PostEntity.findOne(args.id),
    persons: () => PersonEntity.find(),
    person: (_, args) => PersonEntity.findOne(args.id)
  },
  Mutation: {
    /**
     * User mutations
     */
    UpdateUser: async (_, args) => {
      let updatedUser = await UserEntity.findOne(args.id)
      updatedUser = { ...args }
      if (updatedUser) await updatedUser.save()
      return {
        success: updatedUser ? true : false,
        message: updatedUser ? `User ${updatedUser.id} is now updated` : `Failed to update the user ${args.id}`
      }
    },
    DeleteUser: async (_, { id }) => {
      const deletedUser = await UserEntity.delete(id)
      return {
        success: deletedUser ? true : false,
        message: deletedUser ? `User ${id} is now deleted` : `Failed to create the user ${id}`
      }
    },
    CreateUser: async (_, args) => {
      const createdUser = await User.create({
        ...args,
        creation: new Date()
      }).save()
      return {
        success: createdUser ? true : false,
        message: createdUser ? `User ${createdUser.id} is now created` : 'Failed to create the user'
      }
    },
    /**
     * Person mutations
     */
    UpdatePerson: async (_, args) => {
      let updatedPerson = await PersonEntity.findOne(args.id)
      updatedPerson = { ...args }
      if (updatedPerson) await updatedPerson.save()
      return {
        success: updatedPerson ? true : false,
        message: updatedPerson ? `Person ${updatedPerson.id} is now created` : `Failed to update the user ${args.id}`
      }
    },
    DeletePerson: async (_, { id }) => {
      const deletedPerson = await PersonEntity.delete(id)
      return {
        success: deletedPerson ? true : false,
        message: deletedPerson ? `Person ${id} is now deleted` : `Failed to delete the user ${id}`
      }
    },
    CreatePerson: async (_, args) => {
      const createdPerson = await PersonEntity.create({
        ...args,
        creation: new Date()
      }).save()
      return {
        success: createdPerson ? true : false,
        message: createdPerson ? `Person ${createdPerson.id} is now created` : `Failed to create the person ${args.id}`
      }
    },
    /**
     * Hobby mutations
     */
    UpdateHobby: async (_, args) => {
      let updatedHobby = await HobbyEntity.findOne(args.id)
      updatedHobby = { ...args }
      if (updatedHobby) await updatedHobby.save()
      return {
        success: updatedHobby ? true : false,
        message: updatedHobby ? `Hobby ${updatedHobby.id} is now updated` : `Failed to update the hobby ${args.id}`
      }
    },
    DeleteHobby: async (_, { id }) => {
      const deletedHobby = await HobbyEntity.delete(id)
      return {
        success: deletedHobby ? true : false,
        message: deletedHobby ? `Hobby ${id} is now deleted` : `Failed to delete the hobby ${id}`
      }
    },
    CreateHobby: async (_, args) => {
      const createdHobby = await HobbyEntity.create({
        ...args,
        status: args.status || 'UNDEFINED',
        creation: new Date()
      }).save()
      return {
        success: createdHobby ? true : false,
        message: createdHobby ? `Hobby ${createdHobby.id} is now created` : `Failed to create the hobby ${args.id}`
      }
    },
    /**
     * Post mutations
     */
    UpdatePost: async (_, args) => {
      let updatedPost = await PostEntity.findOne(args.id)
      updatedPost = { ...args }
      if (updatedPost) await updatedPost.save()
      return {
        success: updatedPost ? true : false,
        message: updatedPost ? `Post ${updatedPost.id} is now updated` : `Failed to update the post ${args.id}`
      }
    },
    DeletePost: async (_, { id }) => {
      const deletedPost = await PostEntity.delete(id)
      return {
        success: deletedPost ? true : false,
        message: deletedPost ? `Post ${id} is now deleted` : `Failed to delete the post ${id}`
      }
    },
    CreatePost: async (_, args) => {
      const createdPost = await PostEntity.create({
        ...args,
        creation: new Date()
      }).save()
      return {
        success: createdPost ? true : false,
        message: createdPost ? `Post ${createdPost.id} is now created` : `Failed to create the post ${args.id}`
      }
    }
  },

  /**
   * User resolvers
   */
  User: {
    posts: async ({ id }) => {
      logger.log(`Looking for posts of user ${id}`)
      const posts = await PostEntity.find({ where: { userId: id } })
      return posts
    },
    hobbies: ({ id }) => {
      logger.log(`Looking for hobbies of user ${id}`)
      const hobbies = HobbyEntity.find({ where: { userId: id } })
      return hobbies
    },
    person: async ({ id }) => {
      logger.log(`Looking for the person of user ${id}`)
      const person = PersonEntity.findOne({ userId: id })
      return person
    }
  },

  /**
   * Hobby resolvers
   */
  Hobby: {
    user: ({ id, userId }) => {
      logger.log(`Looking for user ${userId} of hobby ${id}`)
      return UserEntity.findOne(userId)
    }
  },

  /**
   * Post resolvers
   */
  Post: {
    user: ({ id, userId }) => {
      logger.log(`Looking for user ${userId} of post ${id}`)
      return UserEntity.findOne(userId)
    }
  },

  /**
   * Person resolvers
   */
  Person: {
    user: ({ id, userId }) => {
      logger.log(`Looking for user ${userId} of person ${id}`)
      return UserEntity.findOne(userId)
    }
  }
}
