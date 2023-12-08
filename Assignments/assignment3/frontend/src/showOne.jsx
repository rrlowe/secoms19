
import { useState, useEffect } from "react";

function ShowOneItem() {
  const [inInput, setInput] = useState("")
  const [productfound, setProductFound] = useState(false);
  const [oneProduct, setOneProduct] = useState([]);
  const showOneItem = oneProduct.map((el) => (
    <div>
        <h1 class="title">Title: {el.title} <br /></h1>
        <div class="oneItem" key={el.id}>
        <img src={el.image} width={30} alt="images" /> <br />
        <p>Category: {el.category} <br />
        Price: {el.price} <br />
        Rating: {el.rating.rate} By {el.rating.count} people</p>
        </div>
    </div>

  ));


  function getOneProduct(id) {
    setInput(id);
    console.log(id);
    if (id >= 1 && id <= 20) {
      fetch("http://127.0.0.1:8081/fakestore/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log("Show one product :", id);
          console.log(data);
          // const dataArr = [];
          // dataArr.push(data);
          if(data != null){
            setOneProduct([data]);
            setProductFound(true);
          }else{
            setProductFound(false);
          }
        });
    } else {
      console.log("Wrong number of Product id.");
    }
  }
  return (
      <div class="oneItemContent">
        <h3 class="Heading">Show one Product by Id:</h3>
        <label>Enter ID:</label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="id"
          onChange={(e) => getOneProduct(e.target.value)}
        />
        {productfound &&<div><h3 class="product">Product:</h3> <br></br><br></br><br></br><br></br><div>{showOneItem}</div></div>}
        {inInput != "" &&  !productfound &&<div>Product: <br></br> Product Not Found</div>}
      </div>
  );
}

export default ShowOneItem;
