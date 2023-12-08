import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

export function DeleteProduct() {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/AmeroBakery');
        const result = await response.json();
        setItems(result);
        setDisplayItems(result);
      } catch (error) {
        console.error('Error fetching the API', error);
      }
    };

    fetchData();
  }, []);

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:8081/AmeroBakery/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          const updatedItems = items.filter(item => item.id !== deleteid);
          setItems(updatedItems);
          setDisplayItems(updatedItems);
          const key = Object.keys(data);
          const value = Object.values(data);
          alert(key + value);
        }
      });
  }
  const handleProductEdit = (productId) => {
    navigate(`/productEdit/${productId}`);
  };

  const listItems = displayItems.map((el) => (
    <article key={el.id} className="card">
      <img src={el.image} alt={el.title} />
      <div className="card-content">
        <h1>{el.title}</h1>
        <p>${el.price}.00</p>
        <br />
        <button
          className="view-product"
          onClick={() => deleteOneProduct(el.id)}
        >
          Delete Product
        </button>
        <button
          className="view-product"
          onClick={() => handleProductEdit(el.id)}
        >
          Edit Product
        </button>
      </div>
    </article>
  ));

  return (
    <div>
      <div className="cards">
        {listItems}
      </div>
    </div>
  );
}
