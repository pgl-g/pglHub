const errorTypes = require('../constants/error-types');
// 错误处理收集
const errorHandler = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad Request
      message = '用户名或密码不能为空';
      break;
  
    default:
      status = 404;
      message = 'NOT FOUND';
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
