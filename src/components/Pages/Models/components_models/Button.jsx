import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Button = ({ model }) => {

   return (
      <>
         <Link to={`/models/${model}`} className="btns btn-description">
            <FaAngleRight />
            <span>General description</span>
         </Link>
      </>
   )
}

export default Button;