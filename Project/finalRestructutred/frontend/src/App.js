import {ProductPage} from './productPage.jsx';
import {React,createContext,useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from "./ProductDetails.jsx"
import CheckoutForm from './checkoutForm.jsx';
import Footer from './footer.jsx';
import {About} from './About.jsx';
import {Home} from './Home.jsx';
import { StudentInfo } from './StudentInfo.jsx';
import {DeleteProduct} from './DeleteProduct.jsx';
import {AddItem} from './addItem.jsx';
import {EditProduct} from './editProduct.jsx';



export const CartContext = createContext([])

function App() {
  const [cartContent, setCartContent] = useState([]);
    
  return (    
    <Router>
    <CartContext.Provider value={{cartContent, setCartContent}}>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
          <Route path="/cart" element={<CheckoutForm />} />
          < Route path="/products" element={<ProductPage/>}/>
          <Route path="/productDetails/:productId" element={<ProductDetails />} /> 
          <Route path="/admin/productEdit/:productId" element={<EditProduct />} /> 
        <Route path="/admin" element={<StudentInfo />} />
        <Route path="/admin/deleteProducts" element={<DeleteProduct />} />
        <Route path="/admin/addItem" element={<AddItem />} />
      </Routes>
      <legend></legend>
      <Footer/>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
