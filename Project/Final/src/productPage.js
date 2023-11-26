import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState, useEffect } from "react";

export function ProductPage() {
  const[items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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

  const listItems = displayItems.map((el) => (
    // PRODUCT
    <article class="card">
    <img src={el.image} alt={el.title} />
      <div class="card-content">
        <h1>{el.title}</h1>
        <p>${el.price}.00</p>
        <button>View Product</button>
      </div>
    </article>
  ));

  return (
    <div>
      <div class="header">
        <h1>Order Now</h1>
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
