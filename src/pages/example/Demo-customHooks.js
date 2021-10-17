import { useForceUpdate } from "../../hooks"

function DemoCustomHooks(props) {
  const upDate = useForceUpdate()
  console.log('触发渲染函数')
  return (
    <div>
      <h1>自定义hooks示例</h1>

      <h1>强制刷新组件hooks</h1>
      <button onClick={upDate}>点击刷新组件</button>
    </div>
  )
}

export default DemoCustomHooks