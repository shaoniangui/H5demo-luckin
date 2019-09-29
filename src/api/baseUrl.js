// 在此文件定义各环境的URL

let baseUrl = '/api' // 本地代理

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('当前环境','development')
    baseUrl = 'https://easy-mock.com/mock/5cb098cdfeb025683678126b/api' // 测试环境url
    break
  case 'pre':
    console.log('当前环境','pre')
    baseUrl = 'https://pre-server.project.cn' // 预上线环境url
    break
  case 'production':
    baseUrl = 'https://api.project.cn' // 生产环境url
    break
}

export default baseUrl