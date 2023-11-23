import {NavBar} from './nav.js';
import {Cart} from './cart.js';
import React, { useState } from "react";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
    
  return (
    <div className="App">
        <NavBar></NavBar>
        <Cart/>
    </div>
  );
}

export default App;
