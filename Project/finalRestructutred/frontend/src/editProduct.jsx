import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {NavBar, AdminNavBar} from './nav';

export function EditProduct(){
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8081/AmeroBakery/products/${productId}`);
            const result = await response.json();
            setProduct(result);
          } catch (error) {
            console.error('Error fetching the API', error);
          }
        };
        
        fetchData();
      }, []);
    
      function handleChange(evt) {
        const value = evt.target.value;
        if (evt.target.name === "id") {
            setProduct({ ...product, id: value });
        } else if (evt.target.name === "title") {
            setProduct({ ...product, label: value });
        } else if (evt.target.name === "type") {
            setProduct({ ...product, type: value });
        } else if (evt.target.name === "price") {
            setProduct({ ...product, price: value });
        } else if (evt.target.name === "category") {
            setProduct({ ...product, type: value });
        } else if (evt.target.name === "image") {
            setProduct({ ...product, image: value });
        } else if (evt.target.name === "description") {
            setProduct({ ...product, text: value });
          }
      }


  if (!product) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const productId = product.id;
    fetch(`http://127.0.0.1:8081/updateProduct/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Edit product completed");
        console.log(data);
        if (data) {
          const value = Object.values(data);
          alert(value);
        }
      });
  }

  return (
    <div>
      <AdminNavBar></AdminNavBar>
    <div className="newProductContent">
      <h3 class="Heading">Edit the product :</h3>
      <form action="">
        <div class="item">
      <label>
        Product ID:
        </label>
        <input
          type="number"
          placeholder="id?"
          name="id"
          value={product.id}
          onChange={handleChange}
        />
        </div>
        <br></br>
        <div class="item">
        <label>
        Product Title:
        </label>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={product.lable}
          onChange={handleChange}
        /></div>
        <br></br>
        <div class="item">
        <label>
        Product Type:
        </label>
        <input
          type="text"
          placeholder="type"
          name="type"
          value={product.type}
          onChange={handleChange}
        />
        </div>
        <br></br>
        <div class="item">
        <label>
        Product Price:
        </label>
        <input
          type="number"
          placeholder="price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        </div>
        <br></br>
        <div class="item">
        <label>
        Product Description:
        </label>
        <input
          type="text"
          placeholder="description"
          name="description"
          value={product.text}
          onChange={handleChange}
        /></div>
        <br></br>
        <div class="item">
        <label>
        Product Category:
        </label>
        <input
          type="text"
          placeholder="category"
          name="category"
          value={product.type}
          onChange={handleChange}
        /></div>
        <br></br>
        <div class="item">
        <label>
        Product Image:
        </label>
        <input
          type="text"
          placeholder="image?"
          name="image"
          value={product.image}
          onChange={handleChange}
        /></div>
        <br></br>
        <img src={'../../'+product.image}></img>
        <button type="submit" onClick={handleOnSubmit}>
          submit
        </button>
      </form>
    </div>
  </div>
  );
}

export default EditProduct;