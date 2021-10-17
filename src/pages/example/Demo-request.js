import { useEffect, useState } from "react"
import EolAxios, { API } from "../../axios"
import { RequestContent } from "../../components/example"


function DemoRequest(props) {

  const [staticRes, setStaticRes] = useState({})
  const [dynamicRes, setDynamicRes] = useState([])

  useEffect(() => {
    // 静态请求
    EolAxios.staticRequest({
      path: API.staticTest,
      params: ['0803']
    }).then(res => {
      if (res === null) return
      setStaticRes(res)
    })
    // 动态请求
    // EolAxios.dynamicRequest({
    //   path: API.dynamicTest,
    //   formData: {
    //     page: 1,
    //     class_id: '1001',
    //     size: 10
    //   }
    // }).then(res => {
    //   if (res === null) return
    //   setDynamicRes(res)
    // })
    // 取消网络请求
    return () => {
      EolAxios.cancel()
    }
  }, [])
  return (
    <div>
      <br />
      <h1>网络请求示例</h1>
      <h1>静态请求结果:</h1>
      <RequestContent content={staticRes}></RequestContent>
      <h1>动态请求结果:</h1>
      <RequestContent content={dynamicRes}></RequestContent>
    </div>
  )
}

export default DemoRequest