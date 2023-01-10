import '../../styles/Loader-Error404.scss'
import { Link } from 'react-router-dom'
const Error404 = ()=>{
   return (
   <div className='Error404'>
      <img src="" alt="" />
      <h1>PAGE NOT FOUND</h1>
      <p>The page you are looking not working</p>
      <button>
         <Link to="/models">Go Back</Link>
      </button>
   </div>)
}
export {Error404}