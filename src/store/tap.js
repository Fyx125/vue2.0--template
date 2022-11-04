// 导航栏相关
export default {
  state: {
    isCollapse: false, // 控制侧边栏展开还是收起
    menuData: [],  // 侧边栏菜单数据
    tabsList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home"
      }
    ] // 面包屑数据
  },
  mutations: {
    // 动态添加路由
    addMenu(state, router) {
      // if(!Cookie.get('menu')) return
      // let menu = JSON.parse(Cookie.get('menu'))
      let menuArr = []
      menu.forEach(item => {
        if(item.children) {
          item.children = item.children.map(sonItem => {
            sonItem.component = () => import(`../view/${sonItem.url}`)
            return sonItem
          })
          menuArr.push(...item.children)
        }else {
          item.component = () => import(`../view/${item.url}`)
          menuArr.push(item)
        }
      });
      menuArr.forEach(item => {
        router.addRoute('main', item)
      })
    },
    // 改变侧边栏展现状态
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    // 侧边栏点击增加面包屑数据
    selectMenu(state, data) {
      if(data.name !== 'home') {
        let flag = state.tabsList.findIndex(item => item.name == data.name)
        if(flag === -1) {
            state.tabsList.push(data)
        }
      }
    },
    // 关闭 tags 删除指定tag数据
    closeMenu(state, data) {
      let index = state.tabsList.findIndex(val => val.name === data.name)
      state.tabsList.splice(index, 1)
    }
  }
};
