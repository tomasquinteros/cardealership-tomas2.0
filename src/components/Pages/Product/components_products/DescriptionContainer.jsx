import { useState } from "react";


const DescriptionContainer = ({details, car}) => {
   const {cylinders, displacement, drive, fuel_type, transmission, year} = details
   const { id, model, price, make, img } = car;
   const [currentImage, setCurrentImage] = useState(img[0])
   const [active, setActive] = useState()
   console.log(img)
   function handleImage (index) {
      setCurrentImage(img[index])
      setActive(index)
   }


   return (
      <div id={id} className="description-container">
         <section className="img-container">
            <img src={currentImage} alt=""  className="big-img"/>
            <div>
               {
                  img.map((image, index) => (
                     <img key={index} src={image} alt={index} 
                     onClick={() => {handleImage({index})}}
                     className={active === index ? 'img active' : 'img'}
                     />
                  ))
               }
            </div>
         </section>
         <section className="description">

         </section>
      </div>
   )
}

export {DescriptionContainer}
/* [
   {
      "city_mpg": 21,
      "class": "small station wagon",
      "combination_mpg": 24,
      "cylinders": 4,
      "displacement": 2,
      "drive": "fwd",
       "fuel_type": "gas",
       "highway_mpg": 29,
       "make": "audi",
       "model": "a3",
       "transmission": "m",
       "year": 2006
      }
   ] */