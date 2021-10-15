const app = require('./app');
// TDOO：先写死这边有问题
const config = require('./app/config');

// 启动服务
app.listen(8888, () => {
  console.log('服务器启动成功~');
});

