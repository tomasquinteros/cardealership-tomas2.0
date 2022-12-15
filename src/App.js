import "./styles/styles.scss";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import components
import { Nav } from "./components/Navbar/Nav";
import { Footer } from "./components/Footer/Footer";
import {GoToTop} from './components/GoToTop'

// Import Pages
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
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
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
