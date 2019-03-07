import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import { Users,LoginUsers } from './data/user.js'; // 导入Users数据
let _Users = Users;
export default {
  /**
   * mock start
   */
  start() { // 初始化函数
    let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
    
    //登录接口
    mock.onPost('/login').reply((config)=>{
    	
    	let {username,password} = JSON.parse(config.data);
			
    	return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
    		
    		let hasUser = LoginUsers.some((value,key,arr)=>{

    			if(value.username === username && value.password === password){
    				return true
    			}
    		})
    		
    		if(hasUser){
    			resolve([200, {
            code:200,
            msg:'登录成功'
          }]);
    		}else{
    			resolve([200, {
            code:500,
            msg:'账号或密码错误'
          }]);
    		}

      });
    	
    	
    })

    //获取用户列表接口
    mock.onGet('/user/list',).reply(config => { //  config 指 前台传过来的值  网址自己随意定义，访问时要和这个网址一致就可以，这个'/user/list'，就是get请求时的url地址
      /*let {name} = config.params;
      let mockUsers = Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });*/
     //console.log(config)
      return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
        setTimeout(() => {
          resolve([200, {
            users: _Users
          }]);
        }, 1000);
      });
    });
    
    //增加用户接口
    mock.onGet('/user/addUser').reply(config=>{
    	let {id,username,age,sex,date1,address} = config.params;
    	_Users.push({
    		id:id,
    		name:username,
    		address:address,
    		age:age,
    		birth:date1,
    		sex:sex
    	})
    	return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
        setTimeout(() => {
          resolve([200, {
            code:200,
            msg:'新增成功'
          }]);
        }, 1000);
      });
    	
    })
    
    //删除用户接口
		mock.onGet('/user/deleteUser').reply(config=>{
			let _id = config.params.id;
			
			_Users = _Users.filter((value,key,arr)=>{
				return value.id !== _id
			})

			return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
        setTimeout(() => {
          resolve([200, {
            code:200,
            msg:'删除成功'
          }]);
        }, 1000);
      });
			
			
		})
		
		//编辑用户接口
		mock.onGet('/user/editUser').reply(config=>{
			let {id,username,age,sex,date1,address} = config.params;
			_Users.some((value,key,arr)=>{
				if(value.id === id){
					value.id = id;
					value.username = username;
					value.age = age;
					value.sex = sex;
					value.date1 = date1;
					value.address = address;
				}
			})

			return new Promise((resolve, reject) => {  //响应请求，返回数据给前台
        setTimeout(() => {
          resolve([200, {
            code:200,
            msg:'编辑成功'
          }]);
        }, 1000);
      });
			
			
		})
		
		
		
  }
};