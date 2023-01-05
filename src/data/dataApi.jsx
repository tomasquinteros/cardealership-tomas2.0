import { useEffect, useState } from "react"

const APIKEY = "xmbo+x7oyvWlmGvMVaKiCw==8KtH1ToJ8lcGUkZi"

const DataApi = ({model})=>{
   const url =  'https://api.api-ninjas.com/v1/cars?limit=20&model=' + model
   const [isLoading, setLoading] = useState(true)
   const [details, setDetails] = useState([])
   useEffect(()=> {
      if (isLoading) {
         fetch( url, {
            method: "GET",
            url:  url,
            headers: {'X-Api-Key': APIKEY},
            contentType: 'application/json',
         }).then(response => response.json()).then((car) => {
            setDetails(car)
            setLoading(false)
         })
      }
      }, [isLoading, url]
   )
   if (isLoading) {
      console.log()
   } else {
      return details;
   }
}
export {DataApi};