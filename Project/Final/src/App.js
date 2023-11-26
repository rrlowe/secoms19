import {NavBar} from './nav.js';
import {Cart} from './cart.js';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {About} from './About.js';
import {Home} from './Home.js';
import {ProductDetails} from './ProductDetails.js';
import { StudentInfo } from './StudentInfo.js';


function App() {
  const [cart, setCart] = useState([]);
    
  return (    
    <Router>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/studentInfo" element={<StudentInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
