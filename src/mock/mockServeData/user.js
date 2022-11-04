import Mock from "mockjs";

// 用户列表 数据 mock

function param2Obj(url) {
    let search = url.split('?')[1]
    if(!search) {
        return {}
    }
    return JSON.parse(
        '{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g,'","').replace(/=/g, '":"') + '"}'
    )
}

let list = []
let count = 200

for(let i=0;i<count;i++){
    list.push(
        Mock.mock({
            id: Mock.Random.guid(),
            name: Mock.Random.cname(),
            address:Mock.mock('@county(true)'),
            sex: Mock.Random.integer(0,1),
            birth: Mock.Random.date(),
            'age|18-60': 1
        })
    )
}

export default {
    /**
     * 获取列表
     * name可以不填,page,limit有默认值
     * @param {name, page, limit} config 
     * @return {{ code: number, count: number,page:number,limit:number, data: [] }}
     */
    getUserList: config => {
        let { name, page = 1, limit = 20 } = param2Obj(config.url)
        let mockList = list.filter(user => {
            if(name && user.name.indexOf(name) === -1 && user.address.indexOf(name) === -1) return false
            return true
        })
        let pageList = mockList.filter((item, index) => index < limit*page && index >= limit *(page - 1))
        return {
            code: 20000,
            count: mockList.length,
            page: page,
            limit: limit,
            list: pageList
        }
    },
    /**
     * 添加用户
     * @param {name, address, age, birth, sex} config 
     * @return {{ code: number, data: { message: string} }}
     */
    createUser: config => {
        let { name, address, age, birth, sex } = JSON.parse(config.body)
        list.unshift({
            id:Mock.Random.guid(),
            name: name,
            address: address,
            age: age,
            birth: birth,
            sex: sex
        })
        return {
            code: 20000,
            data: {
                message: '添加成功!'
            }
        }
    },
    /**
     * 删除用户
     * @param {id} config 
     * @return {{ code: number, data: {message: string} }}
     */
    deleteUser: config => {
        let {id} = JSON.parse(config.body)
        if(!id) {
            return {
                code: -999,
                data: {
                    message: '参数不正确!'
                }
            }
        } else {
            list = list.filter(u => u.id !== id)
            return {
                code: 20000,
                data: {
                    message: '删除成功!'
                }
            }
        }
    },
    /**
     * 批量删除成功
     * @param {*} config 
     * @return {{ code: number, data: {message: string} }} 
     */
    batchRemove: config => {
        let { ids } = param2Obj(config.url)
        ids = ids.split(',')
        list = list.filter(u => !ids.includes(u.id))
        return {
            code: 20000,
            data: {
                message: '批量删除成功!'
            }
        }
    },
    /**
     * 修改用户
     * @param {id, name, address, age, birth, sex} config 
     * @return {{ code: number, data: {message: string} }} 
     */
    updateUser: config => {
        let {id, name, address, age, birth, sex } = JSON.parse(config.body)
        let sex_num = parseInt(sex)
        list.some(u => {
            if(u.id === id) {
                u.name = name
                u.age = age
                u.sex = sex_num
                u.address = address
                u.birth = birth
                return true
            }
        })
        return {
            code: 20000,
            data: {
                message: '编辑修改成功!'
            }
        }
    }
}

let userFormLabel = [
    {
        model: 'name',
        label: '姓名',
        type: 'input'
    },
    {
        model: 'age',
        label: '年龄',
        type: 'input'
    },
    {
        model: 'sex',
        label: '年龄',
        type: 'select',
        opts: [
            {
                label: '男',
                value: 1
            },
            {
                label: '女',
                value: 2
            }
        ]
    },
    {
        model: 'birth',
        label: '出生日期',
        type: 'date'
    },
    {
        model: 'address',
        label: '地址',
        type: 'input'
    }
]