import { useState, useEffect } from "react";

function GetAll() {
  const [product, setProduct] = useState([]);


  const showAllItems = product.map((el) => (
    
    <div class="allItems" key={el.id}>
      <h1 class="title">Title: {el.title} <br /></h1>
        <div class="oneItem" key={el.id}>
        <img src={el.image} width={30} alt="images" /> <br />
        <p>Category: {el.category} <br />
        Price: {el.price} <br />
        Rating: {el.rating.rate} By {el.rating.count} people</p>
        </div>
    </div>
  ));


  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    fetch("http://127.0.0.1:8081/fakestore")
      .then((response) => response.json())
      .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setProduct(data);
      });
  }

  return (
    <div>
    <h1 class="Heading">Catalog of Products</h1>
      <div>
        {<div> {showAllItems}</div>}
      </div>
    </div>
  );
}

export default GetAll;
