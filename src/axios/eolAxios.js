import CachePorxy from './cachePorxy'
import getRealUrl from './eolApiRealUrl'
import axios from 'axios'
import { message } from 'antd'


/**
*
* @author: 田源
* @date : 2021-08-13 15:35
* @description: 请求类
*/
class EolAxios {

  #cachePorxy = new CachePorxy()
  #canceledRequest = new Set()
  #CancelToken = axios.CancelToken

  /**
   * @description 静态接口请求方法
   * @path {请求路径 string}
   * @method {请求方法 post|get 默认get} 
   * @params {静态请求中的参数 array}
   * @needCache {当前接口是否需要缓存，默认为true}
   * @needBlock {当前接口是否需要阻拦多次请求，默认为true}
   * 
   * !示例：通常静态接口全部需要缓存，存在并发调用时，可设置(needBlock=false)
   */
  async staticRequest({ path, method = "get", params = [], needCache, needBlock }) {
    return this.#sendRequest(getRealUrl(path, params), method, needCache, needBlock)
  }

  /**
   * @description 动态接口请求方法
   * @path {请求路径 string}
   * @method {请求方法 post|get 默认post} 
   * @formData {请求中的参数 object}
   * @needCache {当前接口是否需要缓存，默认为true}
   * @needBlock {当前接口是否需要阻拦多次请求，默认为true}
   * 
   * !示例： 点赞按钮请求需要设置：阻拦(needBlock=true)，不缓存(needCache=false)
   * !示例： 并发调用同一(非点赞\关注等功能按钮)接口需要设置：缓存(needCache=true)，不阻拦(needBlock=false)
   */
  async dynamicRequest({ path, method = "post", formData = {}, needCache, needBlock }) {

    let url = getRealUrl(path)

    // 如果方法是get,并且拥有formData参数的情况下，添加参数至url
    if (method === 'get' && Object.keys(formData).length) {
      for (let key in formData) {
        url += `${url.indexOf('?') !== -1 ? '&' : '?'}${key}=${formData[key]}`
      }
    }
    // 请求
    const response = await this.#sendRequest(url, method, formData, needCache, needBlock)

    return response
  }

  /** 取消当前未返回的请求, 处理react认为setState存在的内存泄露bug */
  cancel() {
    this.#canceledRequest.forEach(source => {
      source.cancel()
    })
    this.#canceledRequest.clear()
  }

  async #sendRequest(url, method, formData = {}, needCache = true, needBlock = true) {
    const cacheKey = url + JSON.stringify(formData)
    const cacheRes = this.#getCache(cacheKey)
    if (cacheRes && needCache) {
      return cacheRes
    }
    const isPending = this.#pendingCache(cacheKey)
    if (isPending && needBlock) return null
    return this.#axios({ url, method, formData, cacheKey })
  }

  async #axios({ url, method, formData, cacheKey }) {
    const source = this.#CancelToken.source()
    this.#canceledRequest.add(source)

    try {
      const res = await axios({
        url: url,
        method: method,
        data: formData,
        cancelToken: source.token
      })
      // 请求成功，返回数据
      if (res.data.code === '0000') {
        this.#setCache(cacheKey, res.data.data)
        return res.data.data
      }

      // 抛异常
      res.statusText = res.data.message
      throw { response: res } // eslint-disable-line
    } catch (err) {
      if (err.response && process.env.REACT_APP_API_MODEL === 'DEV') {
        message.info(err.response.statusText)
      } else {
        console.log(err)
      }
      return null
    } finally {
      this.#canceledRequest.delete(source)
      this.#deletePendingCache(cacheKey)
    }
  }

  #getCache(cacheKey) {
    const cacheRes = this.#cachePorxy.apiMap.get(cacheKey)
    if (cacheRes) {
      console.log("缓存请求结果", cacheRes)
      return cacheRes
    }
  }
  #setCache(cacheKey, data) {
    this.#cachePorxy.apiMap.set(cacheKey, data)
  }

  /** 当前接口是否pending中 */
  #pendingCache(cacheKey) {
    if (this.#cachePorxy.pending.get(cacheKey)) {
      return true
    } else {
      this.#addPendingCache(cacheKey)
      return false
    }
  }

  /** 添加pending接口 */
  #addPendingCache(cacheKey) {
    this.#cachePorxy.pending.set(cacheKey, true)
  }

  /** 删除pending中的接口状态 */
  #deletePendingCache(cacheKey) {
    delete this.#cachePorxy.pending.delete(cacheKey)
  }
}

export default new EolAxios()
