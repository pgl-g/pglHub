const mysql2 = require('mysql2');

// 连接数据库
const connections = mysql2.createPool({
  host: '127.0.0.1',
  port: 8889,
  database: 'pglHub',
  password: 'root',
  user: 'root'
});

connections.getConnection((err, conn) => {
  conn.connect((errs) => {
    if (errs) {
      throw(errs);
    } else {
      console.log('数据库连接成功');
    }
  })
});

module.exports = connections.promise();
