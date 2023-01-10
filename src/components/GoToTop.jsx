
import { FaAngleDoubleUp } from 'react-icons/fa'

const GoToTop = () => {
   const goToTop = () => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
      })
   }
   return (
      <button onClick={goToTop} className="go-to-top">
         <FaAngleDoubleUp />
      </button>
   )
}
export { GoToTop }