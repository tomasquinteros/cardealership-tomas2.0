import { useEffect, useState } from "react";
import { Loader } from '../../../Layout/Loader';
import { DescriptionContainer } from "./DescriptionContainer";

const ListOfDetails = ({ car, arrayDetails }) => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (arrayDetails) {
      setDetails(arrayDetails);
    }
    if (Array.isArray(details)) {
      setLoading(false)
    }
  }, [arrayDetails, details]);

  if (loading) {
     return <Loader/>
   } else {
      return (<DescriptionContainer details={details[0]} car={car}/>);

  }
};

export { ListOfDetails };

   
   /* useEffect(() => {
    if (Array.isArray(details)) {
       setLoading(false)
     }
   }, [setLoading, details]) */