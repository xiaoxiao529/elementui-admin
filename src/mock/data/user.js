import Mock from 'mockjs'; // 导入mockjs 模块

//定义已经存在的用户
let LoginUsers = [
	{
		id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
	}
]

let Users = []; // 定义我们需要的数据，后面导出

const COUNT = [1, 2, 3, 4, 5]; // 定义我们需要数量，即生成几条模拟数据

for (let i = 1; i <= 30; i++) {
  Users.push(Mock.mock({ // 根据数据模板生成模拟数据。
    id: Mock.Random.guid(), // 随机id
    title: Mock.Random.first(), // 随机标题
    name:Mock.Random.cname(),  //随机中文名
    address: Mock.mock('@county(true)'),  //随机地址
    'age|18-60': 1,  //随机年龄
    birth: Mock.Random.date(),  //随机生日
    sex: Mock.Random.integer(0, 1),  //随机性别
    isDelete: false, //是否删除
  }));
}
export { Users,LoginUsers };  // 导出用户数据