const app = require('./app');
const config = require('./app/config');

// 启动服务
app.listen(config.APP_PORT, () => {
  console.log('服务器启动成功~');
});

