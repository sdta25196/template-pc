import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { PROVINCE } from '../../assets/static'

function Home(props) {
  const { history } = props
  const { provinceid } = useSelector(store => store.userLocation)
  const [proviceName, setProvinceName] = useState('')
  useEffect(() => {
    setProvinceName(() => {
      let item = PROVINCE.find((item) => { return item.provinceid.toString() === provinceid.toString() })
      return item.province
    })
  }, [provinceid])
  return (
    <div>
      您当前定位：{proviceName}
      <button onClick={() => { history.push('/example') }}>
        点击查看示例
      </button>
    </div>
  )
}

export default Home