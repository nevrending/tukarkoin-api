# TukarKoin API - Node + Express

[![JavaScript](https://img.shields.io/badge/JavaScript-%23f0db4f?style=flat&logoColor=%23333&logo=javascript)](https://www.javascript.com/)

A Proof of Concept JSON API that was designed to serve as the backend for [TukarKoin App](https://github.com/nevrending/tukarkoin-app)

The TukarKoin-API.json file is a Postman Collection that serves as the API Docs

## Requirements

1. Node ^14
2. Yarn v1
3. MySQL or MariaDB DBMS

## Setup

1. Create a new database
2. Duplicate `.env.example` into `.env`
3. Fill the DB connection details in `.env` file AND `config/config.json` in `development` key
    - Set `dialect` per your DBMS, e.g `mariadb` for MariaDB and `mysql` for MySQL
4. Install deps, run `yarn`
5. Run the database migrations, run `npx sequelize-cli db:migrate`
6. Start development server, run `yarn dev`
5. The API endpoints should now be available on `http://localhost:3000`

## Caveats

1. JWT errors are still returned as HTML response instead of JSON response

## Libraries

This project uses the following libraries, including but not limited to:

1. [Express](https://expressjs.com/en/starter/installing.html)
2. [Terminus](https://github.com/godaddy/terminus) - for graceful shutdown
3. [Sequelize](https://sequelize.org/master/index.html) - SQL ORM
4. [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) and [express-jwt](https://github.com/auth0/express-jwt) - for JWT Authentication
5. [bcrypt.js](https://github.com/dcodeIO/bcrypt.js) - for password hashing in `bcrypt`
6. ESLint, Prettier, nodemon
7. ... and others

## Future Improvements

The following can be made as future improvements to this application, including but not limited to:

1. Input validations
2. OAuth2 scheme compliance (access_token and refresh_token)
3. Implement other critical components of an assets exchange, so that this may be a fully working exchange

# Author

[Yefta Sutanto](https://github.com/nevrending)

# Copyright

2021 &copy; Yefta Sutanto
