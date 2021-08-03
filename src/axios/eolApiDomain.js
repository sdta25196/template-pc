const dev = {
  apiData: "apidata", //测试线数据后台
  apiGkcx: "apigkcx", //测试线业务后台
  api: '/api.42.dev.eol.com.cn/gh5/api', //测试线api平台
  staticGkcx: '/static-gkcx.45.dev.eol.com.cn', //测试线业务后台静态资源
  staticData: '/static-data.45.dev.eol.com.cn', //测试线数据后台静态资源
  eAnswer: '/answer.44.dev.eol.com.cn', //测试线E答链接
  adUrl: '/xsxt.43.dev.eol.com.cn/app/html/www', //测试线广告地址
}

const release = {
  apiData: "apidata", //数据后台
  apiGkcx: "apigkcx", //业务后台
  api: '/api.eol.cn/gh5/api', //api平台
  staticGkcx: '/static-gkcx.eol.cn', //业务后台静态资源
  staticData: '/static-data.eol.cn', //数据后台静态资源
  eAnswer: '/answer.eol.cn', //E答链接
  adUrl: '/misc.eol.cn/js', //广告地址
}

module.exports = process.env.REACT_APP_API_MODEL === "DEV" ? dev : release
