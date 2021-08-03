import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'
import styles from './Layout.module.scss'

/**
*
* @author: 田源
* @date: 2021-08-02 15:15
* @description: 整体布局组件
*
*/
function Layout({
  children,
  title = "",
  content = "",
  header = true,
  footer = true
}) {
  useEffect(() => {
    title && (document.querySelector("#zj-title").innerText = title)
    content && (document.querySelector("#zj-description").setAttribute("content", content))
  }, [title, content])
  return (
    <div className={styles.layout}>
      {header && <Header></Header>}
      <main>
        {children}
      </main>
      {footer && <Footer></Footer>}
    </div>
  )
}

export default Layout