import {NavBar} from './nav.js';
import {ProductPage} from './productPage.js';
import {React, useState } from "react";
import './App.css';
import CheckoutForm from './checkoutForm.js';
import Footer from './footer.js';

function App() {    

  return (
    <div className="App">
        <NavBar></NavBar>
        <CheckoutForm/>
        {/* <ProductPage/> */}
        <legend></legend>
        <Footer/>
    </div>
  );
}

export default App;
