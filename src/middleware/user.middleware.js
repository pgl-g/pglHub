
const errorTypes = require('../constants/error-types');
// 验证用户进行拦截操作
const verifyUser = async (ctx, next) => {
  // 1. 获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2. 判断用户名和密码不能为空
  if (!name || !password || name === '' || password === '') {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  // 3. 判断这次注册的用户名是没有被注册过的

  await next();
}

module.exports = {
  verifyUser
};
