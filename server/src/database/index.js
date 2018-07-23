const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'saperiumweb',
  password: 'saperiumweb',
  database: 'saperiumweb',
  insecureAuth: true
});

db.getConnection((err, connection) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Connected to ${connection.config.database}`);
  }
});

db.query('USE saperiumweb');

module.exports = db;