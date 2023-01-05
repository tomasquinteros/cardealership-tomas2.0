import logo from './logo.svg'
import '../../styles/loader.scss'
const Loader = () =>{
   return (
      <div className="loader">
         <h1>Loading...</h1>
         <img src={logo} alt="" className="App-logo" />
         <p>Please wait a second while site web charge the data</p>
         
      </div>
   )
}
export {Loader}