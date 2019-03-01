import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import { Users } from './data/user.js'; // 导入Users数据

export default {
  /**
   * mock start
   */
  start() { // 初始化函数
    let mock = new MockAdapter(axios); // 创建 MockAdapter 实例

        //获取用户列表
    mock.onGet('/user/list').reply(config => { //  config 指 前台传过来的值  网址自己随意定义，访问时要和这个网址一致就可以，这个'/user/list'，就是get请求时的url地址
      /*let {name} = config.params;
      let mockUsers = Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });*/
      return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
        setTimeout(() => {
          resolve([200, {
            users: Users
          }]);
        }, 1000);
      });
    });

  }
};