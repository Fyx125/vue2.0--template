import http from "@/utils/request"

export const getUserData = (params) => {
    return http.get('/user/getUser', params)
}

export const addUser = (data) => {
    return http.post('/user/add', data)
}

export const updateUser = (data) => {
    return http.post('/user/update', data)
}

export const delUser = (data) => {
    return http.post('/user/delete', data)
}