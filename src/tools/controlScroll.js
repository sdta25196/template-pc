/**
*
* @author : 田源
* @date : 2021-10-16 17:15
* @description : 控制滚动条位置
*
*/
const controlScroll = ({ x = 0, y = 0 }) => {
  window.scrollTo(x, y)
}

export { controlScroll }