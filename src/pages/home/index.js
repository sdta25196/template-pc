import eolAxios, { schoolList, newsList } from "../../axios"
import { Layout } from "../../components/common"


export default function Home({ history }) {
  console.log(history)
  function getData() {
    eolAxios({
      path: schoolList
    }).then(e => {
      console.log(e)
    })
  }
  function getData1() {
    eolAxios({
      path: newsList
    }).then(e => {
      console.log(e)
    })
  }
  return (
    <div>
      <Layout title="首页" header={false} footer={false}>
        <div>
          home
          <button onClick={getData}>
            发送请求
          </button>
          <button onClick={getData1}>
            发送请求
          </button>
          <button onClick={() => history.push("/example")}>
            去example
          </button>
        </div>
      </Layout>
    </div>
  )
}