# react模板-PC端
### 设计图1200px
### 样式
  重置样式 `public/assets/css/normalize.css`
  全局样式 `src/1-assets/scss/common.scss`
  局部样式 每个组件的对应 `[name].moudle.scss`

### 代码结构
  路由页面 `src/pages/[page]`
  组件页面 `src/components/[page]`
    组件统一由 `src/components/[page]/index.js` 导出

### 环境变量process.env[.parame]
  src同级目录下创建 *.env* 内容可编辑，自定义环境变量需要*REACT_APP_*开头
```javascript
  // 配置不构建map文件
  GENERATE_SOURCEMAP = false
  // 端口号
  PORT = 3000
```

### redux使用
 * redux/actions/actionCreators 新建处理函数，actionTypes中 编写type
  ```javascript
      <!-- 使用thunk写法-->
      let nextTodoId = 0
      export const addTodo = text => {
        return async function (dispatch, getState) {
          let res = await fetchSecretSauce() //调用某个异步函数
          return dispatch({ //处理dispatch
            type: ADD_TODO,
            id: nextTodoId++,
            text
          })
        }
      }
      <!-- 不使用thunk写法 -->
      export const setVisibilityFilter = (filter) => {
        return {  //不使用thunk, 直接return action即可
          type: SET_VISIBILITY_FILTER,
          filter
        }
      }

  ```
 * reducers 下 新建对应的功能reducer文件夹，或者再某文件中添加对应的case, type与actionType对应

### 接口添加
  * `src/axios/eolApiRealUrl.js` 中添加
    ```javascript
      export const videoDetail = 'videoDetail' // 页面调用的path

      setRealUrl(`E答链接关系映射表`, // 描述
        eAnswerUrl, (params) => eAnswer + `/app/html/www/questionurl/zsgk_id_app_url.json` //path与url
      )
    ```
  * 任意组件中使用 
    ```javascript
      import eolAxios, { videoDetail } from "../../axios"
      function getData() {
        eolAxios({
          path: videoDetail
        }).then(e => {
          console.log(e)
        })
      }
    ```

# 项目概览
### 路由 "react-router-dom": "^5.2.0",
### 路由懒加载
### 兼容IE10
### UI框架（兼容IE9） "antd": "3.26.19",
### 接口代理 "http-proxy-middleware": "^1.2.0",
### 数据管理及中间件 "redux": "^4.0.5", "react-redux": "^7.2.3", "redux-thunk": "^2.3.0",
### 因为antd3不支持react的严格模式，所以开发期间使用到antd3的组件，控制台会报错

## useMemo demo, 用来优化组件防止多次渲染, memo传下去的是个缓存的值
```jsx
  // Home.js
 // 父组件使用useMemo缓存一个函数，依赖为返回项
 const [name, setName] = useState("666")
  const data = useMemo(() => {
    return {
      name
    }
  }, [name])
  // 父组件使用子组件，把缓存的函数传给子组件
  <Test data={data}></Test>

  // Test.js
  // 子组件中，使用data，导出组件时需要使用memo套一下
  function Test({ data }) {
    return (
      <div>
        这是一个测试组件{data.name}
      </div>
    )
  }
  export default memo(Test)
```
## useCallback demo, 用来优化组件防止多次渲染, callback传下去的是个缓存的存函
```jsx
  // Home.js
 // 父组件使用useCallback缓存一个函数，依赖为返回项
  const [name, setName] = useState("666")
  const data = useCallback(() => {
    return name + "memo";
  }, [name]);
  // 父组件使用子组件，把缓存的函数传给子组件
  <Test data={data}></Test>

  // Test.js
  // 子组件中，使用data()，导出组件时需要使用memo套一下
  function Test({ data }) {
    return (
      <div>
        {data()}
      </div>
    )
  }
  export default memo(Test)
```


## todoList
- [x] axios配置
- [x] swiper@3.4.2,不兼容ie9
- [x] router
- [x] 跨域代理
- [x] ie10
- [x] redux
- [x] 整体布局Layout