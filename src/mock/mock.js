import Mock from "mockjs"
import homeData from './mockServeData/home'
import user from './mockServeData/user'
// import permission from './mockServeData/permission'

//首页数据 跟接口地址一致
Mock.mock('/api/home/getData', homeData.getStatisticalData)

//用户列表数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/delete', 'post', user.deleteUser)
Mock.mock('/api/user/update', 'post', user.updateUser)
Mock.mock('/api/user/batchremove', 'post', user.batchRemove)
// Mock.mock(/api\/user\/getUser/, user.getUserList)

//登录和获取菜单权限
// Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)
