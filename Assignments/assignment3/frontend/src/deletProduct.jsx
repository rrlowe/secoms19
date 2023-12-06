import { useState, useEffect } from "react";

function App() {
  const [viewer1, setViewer1] = useState(false);
  const [viewer4, setViewer4] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [index, setIndex] = useState(0);

  const [product, setProduct] = useState([]);

  



  function getOneByOneProductNext() {
    if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }
  function getOneByOneProductPrev() {
    if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
      if (product.length > 0) setViewer4(true);
      else setViewer4(false);
    }
  }

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:8081/deleteProduct", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete a product completed : ", deleteid);
        console.log(data);
        if (data) {
          const key = Object.keys(data);
          const value = Object.values(data);
          alert(key + value);
        }
      });
    //setChecked4(!checked4);
    getAllProducts();
  }

  useEffect(() => {
    getAllProducts();
  }, [checked4]);

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
    setViewer1(!viewer1);
  }

  return (
    <div>
      <div>
        <div>
          <h3 class="Heading">Delete one product:</h3>
          <div class="buttonContainer">
          <input
            type="checkbox"
            id="acceptdelete"
            name="acceptdelete"
            checked={checked4}
            onChange={(e) => setChecked4(!checked4)}
          />
          <button onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button onClick={() => getOneByOneProductNext()}>Next</button>
          <button onClick={() => deleteOneProduct(product[index].id)}>
            Delete
          </button>
          </div>
          {checked4 && (
            <div key={product[index].id}>
                <h1 class="title">Title: {product[index].title} <br /></h1>
                <div class="oneItem">
                <img src={product[index].image} width={30} alt="images" /> <br />
                <p>
                Id:{product[index].id} <br />
                Category: {product[index].category} <br />
                Price: {product[index].price} <br />
                Rating: {product[index].rating.count}, By {product[index].rating.rate} people</p>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
