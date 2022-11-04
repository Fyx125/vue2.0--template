const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false //关闭eslint
  // 配置跨域 (开发环境下)
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
