const errorTypes = require('../constants/error-types');
// 错误处理收集
const errorHandler = (error, ctx) => {
  let status, message;

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad Request
      message = '用户名或密码不能为空～';
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409;
      message = '用户名已存在～';
      break;
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400;
      message = '用户名不存在～';
      break;
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400;
      message = '密码是错误的～';
      break;
    default:
      status = 404;
      message = 'NOT FOUND～';
      break;
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
