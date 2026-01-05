// const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'root',
//     database : 'testDB',
//     port: 5432
// });

// pool.query(`SELECT NOW()`)
// .then(res => console.log('%cdb.js:12 DB connected at:', 'color: #34aeffff;', res.rows[0].now))
// .catch(err => console.error('%cdb.js:13 DB connection error:', 'color: #ef0c0cff;', err))
// module.exports = pool;




////////////////////////////////////////////////////////////////////////
// //   USING ORM  npm install sequelize pg pg-hstore           ////////
////////////////////////////////////////////////////////////////////////

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "testDB",      // database
  "postgres",    // user
  "root",        // password
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false, // disable SQL logs
  }
);

sequelize.authenticate()
  .then(() =>  console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
