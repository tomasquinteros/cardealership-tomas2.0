import { FaAngleRight } from "react-icons/fa";
import {Link} from "react-router-dom";
const Button = ({model, make}) => {
   
   return (
      <>
         <Link to={`/models/${make}/description/${model}`} className="btns btn-description">
            <FaAngleRight />
            <span>General description</span>
         </Link>
      </>
   )
}

export default Button;