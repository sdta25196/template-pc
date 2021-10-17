import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PROVINCE } from "../../assets/static"
import { updateUserLocation } from "../../redux/actions"

function DemoRedux(props) {
  const [bj] = useState({ "provinceid": 11, "province": "北京", "cityid": 1101, "city": "北京市" })
  const [sh] = useState({ "provinceid": 33, "province": "浙江", "cityid": 3301, "city": "杭州市" })
  const [sd] = useState({ "provinceid": 37, "province": "山东", "cityid": 3701, "city": "济南市" })
  const { provinceid: provinceId } = useSelector(store => store.userLocation)
  const [proviceName, setProvinceName] = useState('')
  const disPatch = useDispatch()

  useEffect(() => {
    setProvinceName(() => {
      let item = PROVINCE.find((item) => { return item.provinceid.toString() === provinceId.toString() })
      return item.province
    })
  }, [provinceId])

  return (
    <div>
      <h1>redux示例</h1>

      <h1>获取redux中定位信息：</h1>
      <b>{provinceId}-{proviceName}</b>


      <h1>设置redux中定位信息：</h1>
      <button onClick={() => { disPatch(updateUserLocation(sh)) }}>点击设置定位为浙江</button>
      <button onClick={() => { disPatch(updateUserLocation(bj)) }}>点击设置定位为北京</button>
      <button onClick={() => { disPatch(updateUserLocation(sd)) }}>点击设置定位为山东</button>
    </div>
  )
}

export default DemoRedux