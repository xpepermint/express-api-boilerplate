# Features

* [ExpressJS](http://expressjs.com)
* [SequelizeJS](http://sequelizejs.com) with [PostreSQL](http://www.postgresql.org).

# Setup

Follow these steps to start developing your next API app.

* Download this project source `git clone https://github.com/xpepermint/express-api-boilerplate`.

* Configure `./app/sequelize.json` file and create database.

* Run `npm install` to install dependencies.

* Run `npm run server` to start HTTP server.

* Open browser and navigate to `http://localhost:3333`.

# Commands

* Create new migration and migrate.

```
./node_modules/.bin/sequelize model:create --name User --attributes name:string,email:string
./node_modules/.bin/sequelize db:migrate
```
