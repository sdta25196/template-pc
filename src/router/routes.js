import { lazy } from 'react'
import { setRouter, setDeepRouter } from './setRouterFun'


const routes = [
  setRouter("首页", { path: "/", exact: true, Comp: lazy(() => import('../pages/home')) }),
  setDeepRouter("示例页面", {
    path: "/example", exact: false, Comp: lazy(() => import('../pages/example')),
    children: [
      {
        path: "/example", exact: true, Comp: lazy(() => import('../pages/example/Demo-customHooks')),
      },
      {
        path: "/example/redux", exact: true, Comp: lazy(() => import('../pages/example/Demo-redux')),
      },
      {
        path: "/example/request", exact: true, Comp: lazy(() => import('../pages/example/Demo-request')),
      },
    ]
  }),
  setRouter("全局匹配404", { path: "*", exact: true, Comp: lazy(() => import('../pages/_404')) }),
]

export default routes