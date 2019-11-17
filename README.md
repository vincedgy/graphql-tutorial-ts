![](https://github.com/vincedgy/graphql-tutorial-ts/workflows/Node%20CI/badge.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=vincedgy_graphql-tutorial-ts&metric=alert_status)](https://sonarcloud.io/dashboard?id=vincedgy_graphql-tutorial-ts)

## GraphQL with nodeJS, TypeScript, Apollo server with express

>

- Author : Vincent DAGOURY
- Date : 2019/10
- License : ISC [https://www.gnu.org/licenses/license-list.html#ISC](https://www.gnu.org/licenses/license-list.html#ISC)

## Table of Contents

1. [Project objectives](#Project-objectives)
2. [Prerequisites](#Prerequisites)
3. [Dependencies](#Dependencies)
4. [Installation](#Installation)
5. [Setting configs](#Setting-configs)
6. [Running the app](#Running-the-app)
7. [Develop the app](#Develop-the-app)
8. [Debugging the app](#Debugging-the-app)

## Project objectives

- Learn GraphQL with Node.js written in typescript
- Go in depth with typeORM
- Using ESLint, Prettier, Nodemon and others dev tools
- Debugging within vscode
- Using a Cloud Backend like MongoDB Atlas

## Prerequisites

- Node JS 10+ with npm
- Visual Studio Code and usefull extensions
- MongoDB Atlas account, a cluster and a user to connect with
- eslint globally installed

## Dependencies

- NodeJs : [https://nodejs.org/en/](https://nodejs.org/en/)
- GraphQL : [https://graphql.org/](https://graphql.org/)
- Express : [https://expressjs.com/](https://expressjs.com/)
- Babel : [https://babeljs.io/](https://babeljs.io/)
- Webpack : [https://webpack.js.org/](https://webpack.js.org/)
- MongoDB Atlas : [https://cloud.mongodb.com](https://cloud.mongodb.com)
- typeORM : [https://typeorm.io/#/](https://typeorm.io/#/)

### But also

- Visual Studio Code : [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Installation

package.json contains depencies for this app and `yarn` will install them.

    ```shell
    $ npx yarn
    yarn install v1.17.3

    warning package.json: No license field
    info No lockfile found.
    warning graphql-tutorial-ts@0.0.1: No license field
    [1/4] 🔍  Resolving packages...
    [2/4] 🚚  Fetching packages...
    [3/4] 🔗  Linking dependencies...
    [4/4] 🔨  Building fresh packages...

    success Saved lockfile.
    warning Your current version of Yarn is out of date. The latest version is "1.19.1", while you\'re on "1.17.3".
    info To upgrade, run the following command:
    $ curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
    ✨  Done in 8.61s.

    $ yarn upgrade-interactive --latest                                              0 < 22:00:08
    yarn upgrade-interactive v1.17.3
    warning package.json: No license field
    warning graphql-tutorial-ts@0.0.1: No license field
    warning graphql-tutorial-ts@0.0.1: No license field
    info Color legend :
    "<red>"    : Major Update backward-incompatible updates
    "<yellow>" : Minor Update backward-compatible features
    "<green>"  : Patch Update backward-compatible bug fixes
    ? Choose which packages to update.
    ? Choose which packages to update. @types/node@12.12.5, ts-node@8.4.1, typescript@3.6.4
    warning graphql-tutorial-ts@0.0.1: No license field
    info Installing "devDependencies"...
    warning graphql-tutorial-ts@0.0.1: No license field
    [1/4] 🔍  Resolving packages...
    [2/4] 🚚  Fetching packages...
    [3/4] 🔗  Linking dependencies...
    [4/4] 🔨  Building fresh packages...
    success Saved lockfile.
    warning graphql-tutorial-ts@0.0.1: No license field
    success Saved 9 new dependencies.
    info Direct dependencies
    ├─ @types/node@12.12.5
    ├─ ts-node@8.4.1
    └─ typescript@3.6.4
    info All dependencies
    ├─ @types/node@12.12.5
    ├─ arg@4.1.1
    ├─ buffer-from@1.1.1
    ├─ diff@4.0.1
    ├─ source-map-support@0.5.16
    ├─ source-map@0.6.1
    ├─ ts-node@8.4.1
    ├─ typescript@3.6.4
    └─ yn@3.1.1
    ✨  Done in 11.02s.

````

## Setting configs

The app use `dotenv`. You'll need to create a .env file with the following vars and with the proper values !

```shell
MONGODB_PASSWORD=whatever
MONGODB_PASSWORD=yoursecret
MONGODB_HOST=yourhost
MONGODB_NAME=yourdbname
```

## Running the app

Using yarn :

```shell
$ yarn start
yarn run v1.19.1
$ ts-node src/index.ts
10:58:02 - info: Connected to database mongodb
🚀 Server ready at http://localhost:4000/graphql

```

Using npm :

```shell
$ npm start                                                                          130 < 10:58:43

> graphql-tutorial-ts@1.0.0 start /Users/vincent/Projects/GraphQL/graphql-tutorial-ts
> ts-node src/index.ts

10:58:50 - info: Connected to database mongodb
🚀 Server ready at http://localhost:4000/graphql

```

## Debugging the app

TBD

# TODO

- [ ]: Add Webpack and build a bundle
