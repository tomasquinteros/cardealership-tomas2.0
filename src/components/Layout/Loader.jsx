import logo from './logo.svg'
import '../../styles/Loader-Error404.scss'
const Loader = () => {
   return (
      <div className="Loader">
         <h1>Loading...</h1>
         <img src={logo} alt="" className="App-logo" />
         <p>Please wait a second while site web charge the data</p>

      </div>
   )
}
export { Loader }