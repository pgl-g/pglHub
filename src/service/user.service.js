class UserService {
  async create(user) {

    console.log('将user存储到数据库中', user);
    // 将user存储到数据库中
    return '创建成功';
  }
}

module.exports = new UserService();
