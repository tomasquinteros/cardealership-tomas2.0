import { useState } from "react";
import { Link } from "react-router-dom";
import '../../../../../styles/description.scss'

const DescriptionContainer = ({details, car}) => {
   const {cylinders, displacement, drive, fuel_type, transmission, city_mpg, highway_mpg} = details
   const { id, model, price, make, img } = car;
   const classes = details.class 
   const [currentImage, setCurrentImage] = useState(img[0])
   const [active, setActive] = useState(0)
   const handleImage = (index) => {
      setCurrentImage(img[index])
      setActive(index)
   }


   return (
      <div className="description">
         <div id={id} className="content max-content">
            <Link to={"/models"} className="back-to-models">Back to models</Link>
            <div className="container">
               <section className="img-container">
                  <img src={currentImage} alt=""  className="big-img"/>
                  <div className="thumbnail-img">
                     {
                        img.map((image, index) => (
                           <img key={index} src={image} alt={index} 
                           onClick={() => {handleImage(index)}}
                           className={active === index ? 'img active' : 'img'}
                           />
                           ))
                        }
                  </div>
               </section>
               <section className="description-details">
                     <h1>{make} {model}</h1>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga qui temporibus ducimus impedit modi minus.</p>
                     <div className="details">
                        <h2>DETAILS</h2>
                        <ul>
                           <li><strong className="title">Class:</strong> {classes}</li>
                           <li><strong className="title">Miles for galon in City: </strong>{city_mpg}</li>
                           <li><strong className="title">Miles for galon in Highway:</strong> {highway_mpg}</li>
                           <li><strong className="title">Fuel type:</strong> {fuel_type}</li>
                           <li><strong className="title">Drive: </strong>{drive}</li>
                           <li><strong className="title">Transmission: </strong>{transmission.toUpperCase()}</li>
                           <li><strong className="title">Displacement: </strong>{displacement}</li>
                           <li><strong className="title">Cylinders: </strong>{cylinders}</li>
                        </ul>
                        <h2 className="price">Price : ${price} </h2>
                     </div>
                        
               </section>
            </div>
         </div>
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