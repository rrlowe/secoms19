import { useState, useEffect } from "react";
import {NavBar, AdminNavBar} from './nav';

export function AddItem() {
  // new Product
  const [addNewProduct, setAddNewProduct] = useState({
    id: 0,
    type: "",
    image: '.\\images\\',
    title: "",
    text: "",
    category: "",
    price: 0.0,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    if (evt.target.name === "id") {
      setAddNewProduct({ ...addNewProduct, id: value });
    } else if (evt.target.name === "title") {
      setAddNewProduct({ ...addNewProduct, title: value });
    } else if (evt.target.name === "type") {
      setAddNewProduct({ ...addNewProduct, type: value });
    } else if (evt.target.name === "price") {
      setAddNewProduct({ ...addNewProduct, price: value });
    } else if (evt.target.name === "category") {
      setAddNewProduct({ ...addNewProduct, category: value });
    } else if (evt.target.name === "image") {
        setAddNewProduct({ ...addNewProduct, image: value });
    } else if (evt.target.name === "description") {
        setAddNewProduct({ ...addNewProduct, description: value });
      }
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
    fetch("http://127.0.0.1:8081/AmeroBakery/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
          //const keys = Object.keys(data);
          const value = Object.values(data);
          alert(value);
        }
      });
  }


  return (
    <div>
      <AdminNavBar></AdminNavBar>
        <div className="newProductContent">
          <h3 class="Heading">Add a new product :</h3>
          <form action="">
            <div class="item">
          <label>
            Product ID:
            </label>
            <input
              type="number"
              placeholder="id?"
              name="id"
              value={addNewProduct.id}
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
              value={addNewProduct.title}
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
              value={addNewProduct.type}
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
              value={addNewProduct.price}
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
              value={addNewProduct.description}
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
              value={addNewProduct.category}
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
              value={addNewProduct.image}
              onChange={handleChange}
            /></div>
            <br></br>
            <button type="submit" onClick={handleOnSubmit}>
              submit
            </button>
          </form>
        </div>
      </div>
  );
}

export default AddItem;
