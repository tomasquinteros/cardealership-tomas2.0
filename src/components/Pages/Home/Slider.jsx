import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
const Slider = ({ slides }) => {
   const [current, setCurrent] = useState(0)
   const length = slides.length
   const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1)
   }
   const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
   }
   if (!Array.isArray(slides) || slides.length <= 0) {
      return null
   }
   return (
      <section className="Slider">
         <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
         <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
         {slides.map((slider, index) => {
            return (
               <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (<img src={slider.logo} alt="hero" className="image" />)}
               </div>
            )
         }
         )
         }
      </section>
   )
}

export { Slider }