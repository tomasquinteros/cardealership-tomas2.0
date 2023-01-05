import cars from "../../../data/cars.json";
import { Carousel } from "../../Carousel"
import { Product } from "./components_products/Product"

const Hero = ["./images/heroProducts/image1.jpg", "./images/heroProducts/image2.jpg", "./images/heroProducts/image3.jpg", "./images/heroProducts/image4.jpg", "./images/heroProducts/image5.jpg"]

const arrayAudi = [];
const arrayMercedes = [];
const arrayBMW = [];
const arrayPorsche = [];

const arrayModel = () => {
   cars.forEach((car) => {
      const {make} = car;
   if (make === "Audi") {
      arrayAudi.push(car);
   } else if (make === "Mercedes Benz") {
      arrayMercedes.push(car);
   } else if (make === "Porsche") {
      arrayPorsche.push(car);
   } else {
      arrayBMW.push(car);
   }
});
};
arrayModel();

const Models = ()=>{
   return (
      <div>
         <Carousel hero={Hero} class="hero_products"/>
         <h1 className="models">MODELS</h1>
         <Product array={arrayAudi} company="Audi"/>
         <Product array={arrayPorsche} company="Porsche"/>
         <Product array={arrayBMW} company="BMW"/>
         <Product array={arrayMercedes} company="Mercedes Benz"/>
      </div>
   )
}

export {Models}