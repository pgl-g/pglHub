const Router = require('koa-router');
const {
  create
} = require('../controller/user.controller');
const {
  verifyUser
} = require('../middleware/user.middleware');

const userRouter = new Router({ prefix: '/' });

// verifyUser （验证用户） 拦截中间件
userRouter.post('/', verifyUser, create);

module.exports = userRouter;
