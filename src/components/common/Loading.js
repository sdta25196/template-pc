import { useEffect, useState } from "react"

/**
*
* @author: 田源
* @date: 2021-08-02 14:56
* @description: 显示loading组件，延迟300毫秒显示
*
*/
function Loading() {
  const [waiting, setWait] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(true)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return (
    <div>
      {waiting && "loading...."}
    </div>
  )
}

export default Loading