const mysql = require('mysql2/promise');
const config = require('../config');


const pool = (mysql.createPool(config.db));

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);
  connection.end();
  return results;
}

module.exports = {
  query
}