// import http from "@/utils/request"
import { getUserData, addUser,updateUser, delUser } from './user'

// // 请求首页数据
// export const getData = () => {
//     return http.get('/home/getData')
// }

// // 登录
// export const getMenu = (data) => {
//     return http.post('/permission/getMenu', data)
// }

export {
    getUserData,
    addUser,
    updateUser,
    delUser
}