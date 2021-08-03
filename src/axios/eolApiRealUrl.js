const realUrl = {}
function setRealUrl(describe, key, value) {
  realUrl[key] = value
}

const {
  apiData, apiGkcx, api, staticGkcx,
  staticData, eAnswer, adUrl,
} = require('./eolApiDomain')

export const eAnswerUrl = 'eAnswerUrl'
export const getAD = 'getAD'
export const schoolInfo = 'schoolInfo'
export const schoolList = 'schoolList'
export const newsList = 'newsList'
export const videoDetail = 'videoDetail'

setRealUrl(`E答链接关系映射表`,
  eAnswerUrl, (params) => eAnswer + `/app/html/www/questionurl/zsgk_id_app_url.json`
)
setRealUrl(`广告位param["广告类型","页面位置","省份id"]`,
  getAD, (params) => adUrl + `/target/move/${params[0]}/${params[1]}/${params[2]}.json`
)
setRealUrl(`学校详细信息`,
  schoolInfo, (params) => staticData + `/www/2.0/school/${params[0]}/info.json`
)
setRealUrl(`查大学`,
  schoolList, (params) => api + `?uri=${apiData}/api/gkv3/school/lists`
)
setRealUrl(`资讯列表`,
  newsList, (params) => api + `?uri=${apiGkcx}/api/gkv3/news/lists`
)
setRealUrl(`视频详情`,
  videoDetail, (params) => staticGkcx + `/www/2.0/json/videos/${params[0]}.json`
)

export default realUrl