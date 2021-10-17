import { useReducer } from "react";

/**
*
* @author : 田源
* @date : 2021-10-17 14:35
* @description : 强制刷新组件
*
*/
function useForceUpdate(props) {
  const [, forceUpdate] = useReducer(x => x = !x, false);
  return forceUpdate;
}

export default useForceUpdate