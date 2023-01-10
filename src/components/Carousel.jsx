import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';


const Carousel = props => {
   const settings = {
      arrows: false,
      infinite: true,
      speed: 2500,
      autoplaySpeed: 1400,
      fade: true,
      autoplay: true
   }
   return (
      <div>
         <Slider {...settings} >
            {props.hero.map(image => <img key={image} className={props.class} src={image} alt="hero_image" />)}
         </Slider>
      </div>)
}

export { Carousel };