const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_first_app',
  password: 'katakunci',
});

module.exports = pool.promise();
