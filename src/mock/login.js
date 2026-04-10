import Mock from "mockjs";

// 模拟用户数据库（可自行添加更多测试账号）
const userDB = [
  {
    account: "22300107",
    password: "123456",
    token: Mock.Random.guid(), // 生成唯一 Token
    nickname: "小兔鲜用户",
    avatar: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/avatar.png"
  },
  {
    account: "admin",
    password: "123456",
    token: Mock.Random.guid(),
    nickname: "管理员",
    avatar: "https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/admin_avatar.png"
  }
];

// 拦截 POST /login 请求，实现登录逻辑
Mock.mock('/login', 'post', (options) => {
  // 解析前端传来的请求体（account 和 password）
  const { account, password } = JSON.parse(options.body);

  // 1. 校验账号是否存在
  const user = userDB.find(item => item.account === account);
  if (!user) {
    return {
      code: "0",
      msg: "账号不存在",
      result: null
    };
  }

  // 2. 校验密码是否正确
  if (user.password !== password) {
    return {
      code: "0",
      msg: "密码错误",
      result: null
    };
  }

  // 3. 登录成功，返回用户信息 + Token
  return {
    code: "1",
    msg: "操作成功",
    result: {
      token: user.token,
      account: user.account,
      nickname: user.nickname,
      avatar: user.avatar
    }
  };
});