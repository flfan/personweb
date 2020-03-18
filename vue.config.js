const path = require('path')// 引入path模块

function resolve (dir) {
  return path.join(__dirname, dir)// path.join(__dirname)设置绝对路径
}

module.exports = {
  // publicPath: '/vuegowhere',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@styles', resolve('./src/assets/styles'))
      // set第一个参数：设置的别名，第二个参数：设置的路径
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:80/', // 上线test地址
  //       pathRewrite: {
  //         '^/api': '/mock'
  //       }
  //     }
  //   }
  // }
}
