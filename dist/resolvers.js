"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger = require("loggy");
const entity_1 = require("./entity");
const graphql_iso_date_1 = require("graphql-iso-date");
const User_1 = require("./entity/User");
exports.resolvers = {
    DateTime: graphql_iso_date_1.GraphQLDateTime,
    Query: {
        users: () => entity_1.UserEntity.find(),
        user: (_, args) => entity_1.UserEntity.findOne(args.id),
        hobbies: () => entity_1.HobbyEntity.find(),
        hobby: (_, args) => entity_1.HobbyEntity.findOne(args.id),
        posts: () => entity_1.PostEntity.find(),
        post: (_, args) => entity_1.PostEntity.findOne(args.id),
        persons: () => entity_1.PersonEntity.find(),
        person: (_, args) => entity_1.PersonEntity.findOne(args.id)
    },
    Mutation: {
        UpdateUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let updatedUser = yield entity_1.UserEntity.findOne(args.id);
            updatedUser = Object.assign({}, args);
            if (updatedUser)
                yield updatedUser.save();
            return {
                success: updatedUser ? true : false,
                message: updatedUser ? `User ${updatedUser.id} is now updated` : `Failed to update the user ${args.id}`
            };
        }),
        DeleteUser: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const deletedUser = yield entity_1.UserEntity.delete(id);
            return {
                success: deletedUser ? true : false,
                message: deletedUser ? `User ${id} is now deleted` : `Failed to create the user ${id}`
            };
        }),
        CreateUser: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const createdUser = yield User_1.User.create(Object.assign(Object.assign({}, args), { creation: new Date() })).save();
            return {
                success: createdUser ? true : false,
                message: createdUser ? `User ${createdUser.id} is now created` : 'Failed to create the user'
            };
        }),
        UpdatePerson: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let updatedPerson = yield entity_1.PersonEntity.findOne(args.id);
            updatedPerson = Object.assign({}, args);
            if (updatedPerson)
                yield updatedPerson.save();
            return {
                success: updatedPerson ? true : false,
                message: updatedPerson ? `Person ${updatedPerson.id} is now created` : `Failed to update the user ${args.id}`
            };
        }),
        DeletePerson: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const deletedPerson = yield entity_1.PersonEntity.delete(id);
            return {
                success: deletedPerson ? true : false,
                message: deletedPerson ? `Person ${id} is now deleted` : `Failed to delete the user ${id}`
            };
        }),
        CreatePerson: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const createdPerson = yield entity_1.PersonEntity.create(Object.assign(Object.assign({}, args), { creation: new Date() })).save();
            return {
                success: createdPerson ? true : false,
                message: createdPerson ? `Person ${createdPerson.id} is now created` : `Failed to create the person ${args.id}`
            };
        }),
        UpdateHobby: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let updatedHobby = yield entity_1.HobbyEntity.findOne(args.id);
            updatedHobby = Object.assign({}, args);
            if (updatedHobby)
                yield updatedHobby.save();
            return {
                success: updatedHobby ? true : false,
                message: updatedHobby ? `Hobby ${updatedHobby.id} is now updated` : `Failed to update the hobby ${args.id}`
            };
        }),
        DeleteHobby: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const deletedHobby = yield entity_1.HobbyEntity.delete(id);
            return {
                success: deletedHobby ? true : false,
                message: deletedHobby ? `Hobby ${id} is now deleted` : `Failed to delete the hobby ${id}`
            };
        }),
        CreateHobby: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const createdHobby = yield entity_1.HobbyEntity.create(Object.assign(Object.assign({}, args), { status: args.status || 'UNDEFINED', creation: new Date() })).save();
            return {
                success: createdHobby ? true : false,
                message: createdHobby ? `Hobby ${createdHobby.id} is now created` : `Failed to create the hobby ${args.id}`
            };
        }),
        UpdatePost: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            let updatedPost = yield entity_1.PostEntity.findOne(args.id);
            updatedPost = Object.assign({}, args);
            if (updatedPost)
                yield updatedPost.save();
            return {
                success: updatedPost ? true : false,
                message: updatedPost ? `Post ${updatedPost.id} is now updated` : `Failed to update the post ${args.id}`
            };
        }),
        DeletePost: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const deletedPost = yield entity_1.PostEntity.delete(id);
            return {
                success: deletedPost ? true : false,
                message: deletedPost ? `Post ${id} is now deleted` : `Failed to delete the post ${id}`
            };
        }),
        CreatePost: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const createdPost = yield entity_1.PostEntity.create(Object.assign(Object.assign({}, args), { creation: new Date() })).save();
            return {
                success: createdPost ? true : false,
                message: createdPost ? `Post ${createdPost.id} is now created` : `Failed to create the post ${args.id}`
            };
        })
    },
    User: {
        posts: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            logger.log(`Looking for posts of user ${id}`);
            const posts = yield entity_1.PostEntity.find({ where: { userId: id } });
            return posts;
        }),
        hobbies: ({ id }) => {
            logger.log(`Looking for hobbies of user ${id}`);
            const hobbies = entity_1.HobbyEntity.find({ where: { userId: id } });
            return hobbies;
        },
        person: ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
            logger.log(`Looking for the person of user ${id}`);
            const person = entity_1.PersonEntity.findOne({ userId: id });
            return person;
        })
    },
    Hobby: {
        user: ({ id, userId }) => {
            logger.log(`Looking for user ${userId} of hobby ${id}`);
            return entity_1.UserEntity.findOne(userId);
        }
    },
    Post: {
        user: ({ id, userId }) => {
            logger.log(`Looking for user ${userId} of post ${id}`);
            return entity_1.UserEntity.findOne(userId);
        }
    },
    Person: {
        user: ({ id, userId }) => {
            logger.log(`Looking for user ${userId} of person ${id}`);
            return entity_1.UserEntity.findOne(userId);
        }
    }
};
//# sourceMappingURL=resolvers.js.map