import { useState } from "react";

function Put() {
  const [editedProduct, setEditedProduct] = useState({
    id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: { count: 0, rate: 0.0 },
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    if (name === "ratingCount" || name === "ratingRate") {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        rating: {
          ...prevProduct.rating,
          [name === "ratingCount" ? "count" : "rate"]: parseFloat(value),
        },
      }));
    } else {
      setEditedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: name === "rating" ? parseFloat(value) : value,
      }));
    }
  }

  function handleIdChange(evt) {
    const productId = parseInt(evt.target.value, 10);
    setEditedProduct((prevProduct) => ({ ...prevProduct, id: productId }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    const productId = editedProduct.id;
    fetch(`http://127.0.0.1:8081/updateProduct/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedProduct),
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
      <div className="editProductContent">
        <h3 className="Heading">Edit Product:</h3>
        <form onSubmit={handleOnSubmit}>
          <label>
            Product ID:
            <input
              type="number"
              placeholder="Enter Product ID"
              name="id"
              value={editedProduct.id}
              onChange={handleIdChange}
            />
          </label>
          <br />
          <br />
          <label>
            Title:
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={editedProduct.title}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              placeholder="Enter Price"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              placeholder="Enter Description"
              name="description"
              value={editedProduct.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              placeholder="Enter Category"
              name="category"
              value={editedProduct.category}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Image:
            <input
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={editedProduct.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Rating Count:
            <input
              type="number"
              placeholder="Enter Rating Count"
              name="ratingCount"
              value={editedProduct.rating.count}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Rating Rate:
            <input
              type="number"
              step="0.1"
              placeholder="Enter Rating Rate"
              name="ratingRate"
              value={editedProduct.rating.rate}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Put;