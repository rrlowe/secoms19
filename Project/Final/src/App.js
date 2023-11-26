import {NavBar} from './nav.js';
import {ProductPage} from './productPage.js';
import {React, createContext,useContext,useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About.js'; // Adjust the import path based on your project structure
import Home from './Home.js';
import{ProductDetails} from "./ProductDetails.js"
import CheckoutForm from './checkoutForm.js';
import Footer from './footer.js';

export const CartContext = createContext([])

function App() {    

  const [cartContent, setCartContent] = useState([])
  return (
    <Router>
    <CartContext.Provider value={{cartContent, setCartContent}}>
    <NavBar></NavBar>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CheckoutForm />} />
          < Route path="/products" element={<ProductPage/>}/>
          <Route path="/viewProduct/:id" element={<ProductDetails />} /> 
      </Routes>
      <legend></legend>
      <Footer/>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
