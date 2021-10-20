
class AuthController {
  async login(ctx, next) {
    const { name } = ctx.request.body;

    ctx.body = name;
  }
}

module.exports = new AuthController();
