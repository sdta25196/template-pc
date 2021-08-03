import realUrl from './eolApiRealUrl'
// 生产环境下，url添加 https://
function isProduction(url) {
  return (process.env.NODE_ENV === "production" ? "https://" + url : url)
}

// 根据path获取真实url
function getRealUrl(path, params) {
  return isProduction(realUrl[path](params))
}

export default getRealUrl