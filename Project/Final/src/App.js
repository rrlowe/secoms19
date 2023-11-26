import {NavBar} from './nav.js';
import {Cart} from './cart.js';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About.js'; // Adjust the import path based on your project structure
import Home from './Home.js';


function App() {
  const [cart, setCart] = useState([]);
    
  return (
    // <div className="App">
        
        // <Cart/>
    
    <Router>
    <NavBar></NavBar>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
