import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import React, { useState, useEffect } from "react";

export function Cart() {
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/AmeroBakery');
        const result = await response.json();
        setDisplayItems(result);
      } catch (error) {
        console.error('Error fetching the API', error);
      }
    };

    fetchData();
  }, []);

  const listItems = displayItems.map((el) => (
    // PRODUCT
    <div className="row border-top border-bottom" key={el.id}>
      <div className="row main align-items-center">
        <div className="col-2">
          <img className="img-fluid" src={el.image} alt={el.title} />
        </div>
        <div className="col">
          <div className="row text-muted">{el.title}</div>
          <div className="row">{el.text}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <div class="displayItems">
      {listItems}
    </div>
  );
}
