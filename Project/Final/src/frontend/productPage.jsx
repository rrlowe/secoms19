import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState, useEffect, useContext } from "react";
import {CartContext} from "./App.js"
import { Link, useNavigate } from 'react-router-dom';



export function ProductPage() {
  const headingStyle = {
    textAlign: 'center',
    fontSize: '80px',
    fontFamily: 'Lucida Handwriting, cursive',
  };

  const[items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {cartContent, setCartContent} = useContext(CartContext);
  const navigate = useNavigate(); 

  const addToCart = (el) => {
    setCartContent([...cartContent, el]);
    console.log(cartContent);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cartContent];
    let addBack = howManyofThis(el.id)-1
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    while(addBack > 0){
      hardCopy = [...hardCopy, el]
      addBack -= 1
    }
    setCartContent(hardCopy);
  };

  function howManyofThis(id) {
    let hmot = cartContent.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/AmeroBakery');
        const result = await response.json();
        setItems(result);
        setDisplayItems(result);
        setSearchTerm("")
      } catch (error) {
        console.error('Error fetching the API', error);
      }
    };

    fetchData();
  }, []);

  const filterItems = () => {
    setDisplayItems(
      items.filter((items) => {
        if (searchTerm.trim() === "") {
          return items;
        }
        return (
          items.title.toLocaleLowerCase()
            .indexOf(searchTerm.toLocaleLowerCase()) > -1
        );
      })
    );


  };

  useEffect(() => {
    filterItems();
  }, [searchTerm]);

  const handleViewProduct = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  const listItems = displayItems.map((el) => (
    // PRODUCT
    <article class="card">
    <img src={el.image} alt={el.title} />
      <div class="card-content">
        <h1>{el.title}</h1>
        <p>${el.price}.00</p>
        <br></br>
        {/* <Link class="view-product" to={`/viewProduct/${el.id}`} >View Product</Link>
          */}
          <button
          class="view-product"
          onClick={() => handleViewProduct(el.id)}
        >
          View Product
        </button>
        <div class="add-sub">
        <button
           class="sub"
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
          <button class="add" type="button" variant="light" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
          </div>
      </div>
    </article>
  ));

  return (
    <div>
      <div class="header">
        <h1 style={headingStyle}>Order Now</h1>
      </div>
      <div class="search">
        <label>
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <legend></legend>

    <div class="cards">
      {listItems}
    </div>
    </div>
  );
}
