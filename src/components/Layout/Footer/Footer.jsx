import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'
const Footer = () => {
   return (
      <footer>
            <div className='Icons'>
               <a href="https://www.instagram.com/tomas_rolfo/" target="_blank" rel="noopener noreferrer"><FaInstagram className='fontIcons'/></a>

               <a href="https://twitter.com/said_quinteros" target="_blank" rel="noopener noreferrer">
               <FaTwitter className='fontIcons'/>
               </a>
               <a href="https://www.facebook.com/TomasQuin123/" target="_blank" rel="noopener noreferrer">
               <FaFacebookF className='fontIcons'/>
               </a>
            </div>
            <h2>CAR DEALERSHIP</h2>
            <div>
               <ul>
                  <li>901-947 South Drive, Houston, USA</li>
                  <li>Telephone: +1 555 1236</li>
               </ul>
            </div>
            <p>Page created by Quinteros Tomas - 2022</p>
      </footer>
   )
}

export {Footer}