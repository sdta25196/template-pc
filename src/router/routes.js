import { lazy } from 'react'
/** 路由配置，路由名全部小写 */
const routes = [
  setRouter({ path: "/", exact: true, Comment: lazy(() => import('../pages/home')) }),
  setRouter({ path: "/example", exact: true, Comment: lazy(() => import('../pages/example')) }),
  setRouter({ path: "*", exact: true, Comment: lazy(() => import('../pages/_404')) }),
]

/**
 * @description 设置路由
 * @param {path}  路径
 * @param {exact} 是否严格匹配 
 * @param {Comment} 组件 
 * @returns 路由对象
 */
function setRouter({ path, exact, Comment }) {
  return {
    path: path,
    exact: exact,
    component: (props) => <Comment {...props} />
  }
}

/* eslint-disable */
/**
 * @description 设置嵌套路由
 * @param {path}  路径
 * @param {exact} 是否严格匹配 
 * @param {Comment} 组件 
 * @param {children :Array<{path,Comment}>} 包含路径和组件的数组
 * @returns 路由对象
 */
function setDeepRouter({ path, exact, Comment, children }) {
  return {
    path: path,
    component: Comment,
    exact: exact,
    routes: children.map(item => ({
      path: item.path,
      component: item.Comment
    }))
  }
}

export default routes