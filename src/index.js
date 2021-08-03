import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { routes, RouteWithSubRoutes } from './router'
import { Provider } from 'react-redux'
import store from './redux/store'
import { reportWebVitals } from './utils'
import { Loading } from './components/common'
import './assets/style/common.scss'

/**
*
* @author: 田源
* @date: 2021-08-02 14:13
* @description: PC端入口文件
*
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// 控制台性能输出
reportWebVitals(console.log)