
import { useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

function EolSwiper({ }) {
  useEffect(() => {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,//可选选项，自动滑动
    })
    console.log(mySwiper)
    return () => {
    }
  }, [])
  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">slider1</div>
          <div className="swiper-slide">slider2</div>
          <div className="swiper-slide">slider3</div>
        </div>
      </div>
    </div>
  )
}

export default EolSwiper
