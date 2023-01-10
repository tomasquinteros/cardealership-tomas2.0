import cars from "../../../data/cars.json";
import { Carousel } from "../../Carousel"
import { Product } from "./components_models/Product"

const hero = ["./images/heroProducts/image1.jpg", "./images/heroProducts/image2.jpg", "./images/heroProducts/image3.jpg", "./images/heroProducts/image4.jpg", "./images/heroProducts/image5.jpg"]

const array_audi = [];
const array_mercedes = [];
const array_bmw = [];
const array_porsche = [];

const arrayModel = () => {
   cars.forEach((car) => {
      const { make } = car;
      if (make === "Audi") {
         array_audi.push(car);
      } else if (make === "Mercedes Benz") {
         array_mercedes.push(car);
      } else if (make === "Porsche") {
         array_porsche.push(car);
      } else {
         array_bmw.push(car);
      }
   });
};
arrayModel();

const Models = () => {
   return (
      <div>
         <Carousel hero={hero} class="hero_products" />
         <h1 className="models">MODELS</h1>
         <Product array={array_audi} company="Audi" />
         <Product array={array_porsche} company="Porsche" />
         <Product array={array_bmw} company="BMW" />
         <Product array={array_mercedes} company="Mercedes Benz" />
      </div>
   )
}

export { Models }