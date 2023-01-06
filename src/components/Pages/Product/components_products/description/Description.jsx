import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import cars from '../../../../../data/cars.json'
import { DataApi } from '../../../../../data/dataApi';
import { ListOfDetails } from './ListOfDetails';
import { Error404 } from "../../../../Layout/Error404";

const Description = () => {
   const {model} = useParams();
   const [car, setCar] = useState();
   const [error, setError] = useState(true);
   
   useEffect(() => {
      setCar(cars.find(car => car.model === model))
      if (car) {
         setError(false)
      }
   },[model,car]);
   const details = DataApi({model})

   if (error) {
      return <Error404/>
   }
   return (
      <ListOfDetails car={car} arrayDetails={details} />
   )
}


export {Description};