import { Switch } from "react-router-dom"
import { RouteWithSubRoutes } from "../../router"

function Example(props) {
  const { routes, history } = props
  return (
    <div>
      <div>
        <button onClick={() => { history.push('/') }}>返回首页</button>
      </div>
      <br />
        这是一个二级路由示例
      <br />
      <div>
        <button onClick={() => { history.push('/example') }}>自定义hooks</button>
        <button onClick={() => { history.push('/example/redux') }}>redux</button>
        <button onClick={() => { history.push('/example/request') }}>网络请求</button>
      </div>
      <div>
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </div>
    </div>
  )
}

export default Example