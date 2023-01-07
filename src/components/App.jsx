import "../styles/styles.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// Import components
import { Nav } from "../components/Layout/Navbar/Nav";
import { Footer } from "../components/Layout/Footer/Footer";
import {GoToTop} from '../components/GoToTop';

// Import Pages
import { Home } from "../components/Pages/Home/Home";
import {Models} from "../components/Pages/Product/Models"
import { About } from "../components/Pages/About/About";
import { Contact } from "../components/Pages/Contact/Contact";
import {Description} from "./Pages/Product/components_products/description/Description"

// Create function to leave page up
const ScrollToTop = () => {
  const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left:0,
        behavior: 'smooth'
      });
    }, [pathname]);
  }


function App() {
  return (
    <div className="App">
      <GoToTop/>
      <BrowserRouter>
        <ScrollToTop/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/models/:model" element={<Description/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
