const { api } = require('./eolApiDomain')

const realUrl = {}
function setRealUrl(describe, key, value) {
  realUrl[key] = value
}

export const staticTest = 'staticTest'

setRealUrl(`接口 example, params:[id]`,
  staticTest, (params) => api + `/data_json/toolbar/toolbar${params[0]}.json`
)

export default realUrl