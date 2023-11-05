import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import "bootstrap/dist/css/bootstrap.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    card: "",
    zip: "",
  });
  const [cartTotal, setCartTotal] = useState(0);
  const [displayItems, setDisplayItems] = useState(items);
  const [searchVal, setSearchVal] = useState("");
  const [storeActive, setstoreActive] = useState(true);
  const [checkoutActive, setcheckoutActive] = useState(false);
  const [orderSumActive, setorderSumActive] = useState(false);
  let val;

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const listItems = displayItems.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          <div class="row">{el.category}</div>
        </div>
        <div class="col">
          <button
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  function handleClick(search) {
    setDisplayItems(
      items.filter((items) => {
        if (search === "") {
          return items;
        }
        return (
          items.title
            .toLocaleLowerCase()
            .indexOf(searchVal.toLocaleLowerCase()) > -1
        );
      })
    );
  }

  const addToCart = (el) => {
    setCart([...cart, el]);
    console.log(cart);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const uniqueItems = cart.filter((val, id, array) => {
    return array.indexOf(val) == id;
  });

  const cartItems = uniqueItems.map((el) => (
    <div key={el.id}>
      <div class="row border-top border-bottom" key={el.id}>
        <div class="row main align-items-center">
          <div class="col-2">
            <img class="img-fluid" src={el.image} />
          </div>
          <div class="col">
            <div class="row text-muted">{el.title}</div>
            <div class="row">{el.category}</div>
          </div>
          <div class="col">
            ${el.price} <span class="close">&#10005;</span>
            {howManyofThis(el.id)}
          </div>
          <div class="col">${el.price * howManyofThis(el.id)}</div>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  const SearchBar = () => {
    return (
      <form class="search">
        <input
          onChange={handleChange}
          value={searchVal}
          class="form-search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button
          class="btn-search"
          type="submit"
          onClick={() => {
            handleClick(searchVal);
          }}
        >
          Search
        </button>
        <button
          class="btn-search"
          type="submit"
          onClick={() => {
            setSearchVal("");
            handleClick("");
          }}
        >
          Clear
        </button>
      </form>
    );
  };

  //Add your code under this line
  const summaryList = document.querySelector(".card > ul");
  console.log(summaryList);

  //insert phone number field
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  let validate = function () {
    val = true;
    let email = document.getElementById("inputEmail4");
    let name = document.getElementById("inputName");
    let card = document.getElementById("inputCard");
    let zip = document.getElementById("inputZip");

    if (
      !email.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      email.setAttribute("class", "form-control is-invalid");
      val = false;
    } else {
      email.setAttribute("class", "form-control is-valid");
      order.email = email.value;
    }

    if (!zip.value.match(/^[0-9]{5}$/)) {
      zip.setAttribute("class", "form-control is-invalid");
      val = false;
    } else {
      zip.setAttribute("class", "form-control is-valid");
      order.zip = zip.value;
    }

    if (name.value.length == 0) {
      name.setAttribute("class", "form-control is-invalid");
      val = false;
    } else {
      name.setAttribute("class", "form-control is-valid");
      order.name = name.value;
    }

    if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
      card.setAttribute("class", "form-control is-invalid");
      val = false;
    } else {
      card.setAttribute("class", "form-control is-valid");
      order.card = card.value.substring(0, 4) + "-XXXX-XXXX-XXXX";
    }

    if (val) {
      setcheckoutActive((current) => !current);
      setorderSumActive((current) => !current);
    }
    return val;
  };

  const CheckoutForm = () => {
    return (
      <div class="card">
        <div>
          <button
            class="btn-search"
            onClick={() => {
              setcheckoutActive((current) => !current);
              setstoreActive((current) => !current);
            }}
          >
            Return</button>
          <div class="col-md-8 cart">
            <div class="col g-3">
              <span class="small text-muted me-5">Item</span>
              <span class="small text-muted me-5 col-2">Quantity</span>
              <span class="small text-muted me-5 col-2"></span>
              <span class="small text-muted me-5 col-2"></span>
              <span class="small text-muted me-5 col-2"></span>
              <span class="small text-muted me-5">Price</span>
            </div>
            <div>{cartItems}</div>
            <span class="small text-muted me-2">Order total:</span>
            <span class="lead fw-normal">${cartTotal}</span>
          </div>
        </div>

        <div class="row">
          <div class="col-2"></div>

          <div class="col-8">
            <div id="liveAlertPlaceholder"></div>

            <form class="row g-3" id="checkout-form">
              <div class="col-md-6">
                <label for="inputName" class="form-label">
                  Full Name
                </label>
                <input type="text" class="form-control" id="inputName"></input>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Must be like, "John Doe"</div>
              </div>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                ></input>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Must be like, "abc@xyz.efg"</div>
              </div>

              <div class="col-12">
                <label for="inputCard" class="form-label">
                  Card
                </label>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    id="inputCard"
                    class="form-control"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  <div class="valid-feedback">Looks good!</div>
                  <div class="invalid-feedback">
                    Must be like, "7777-7777-7777-7777"
                  </div>
                </div>
              </div>

              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                ></input>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">
                  Address 2
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                ></input>
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  State
                </label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">
                  Zip
                </label>
                <input type="text" class="form-control" id="inputZip"></input>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Must be like, "55555"</div>
              </div>
              <div class="col-12">
                <button
                  type="submit"
                  class="btn-order btn-search"
                  onClick={(event) => {
                    event.preventDefault();
                    validate();
                  }}
                >
                  {" "}
                  Order
                </button>
              </div>
            </form>
          </div>

          <div class="col-2"></div>
        </div>
      </div>
    );
  };

  const OrderSummary = () => {
    const orderList = Object.entries(order).map(([key, value]) => {
      return (
        <div>
          {key} : {value.toString()}
        </div>
      );
    });

    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Order summary</h5>
          <p class="card-text">Here is a summary of your order.</p>
          {cartItems}
          {orderList}
        </div>

        <a href="" class="btn btn-secondary">
          {" "}
          <i class="bi-arrow-left-circle"></i>
          Return
        </a>
      </div>
    );
  };

  return (
    <div>
      <div class={`store ${storeActive ? "" : "collapse"}`}>
        <h1>STORE SE/ComS319</h1>
        <div class="card">
          <SearchBar />
          <div class="row">
            {/* HERE, IT IS THE SHOPING CART */}
            <div class="col-md-8 cart">
              <div class="title">
                <div class="row">
                  <div class="col">
                    <h4>
                      <b>319 Shopping Cart</b>
                    </h4>
                  </div>
                  <div class="col align-self-center text-right text-muted">
                    Products selected {cart.length}
                  </div>
                </div>
              </div>
              <div>{listItems}</div>
            </div>
            <div class="float-end">
              <p class="mb-0 me-5 d-flex align-items-center">
                <span class="small text-muted me-2">Order total:</span>
                <span class="lead fw-normal">${cartTotal}</span>
                <button
                  class="btn-checkout btn-search"
                  onClick={() => {
                    setcheckoutActive((current) => !current);
                    setstoreActive((current) => !current);
                  }}
                >
                  CHECKOUT
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class={`checkout ${checkoutActive ? "" : "collapse"}`}>
        <CheckoutForm />
      </div>
      <div class={`orderSummary ${orderSumActive ? "" : "collapse"}`}>
        <OrderSummary />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Shop />
    </React.StrictMode>
);