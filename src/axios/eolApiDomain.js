// 处理ie浏览器请求多个/问题
function handlerProduction(url) {
  if (process.env.NODE_ENV === "development") {
    url = '/' + url
  }
  return url
}
const dev = {
  api: handlerProduction('img-home.csdnimg.cn'),
}

const release = {
  api: handlerProduction('img-home.csdnimg.cn'),
}


module.exports = process.env.REACT_APP_API_MODEL === "DEV" ? dev : release
