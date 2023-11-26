import { React, useState } from "react";

export function CheckoutForm() {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    card: "",
    zip: "",
  });
  const [cartTotal, setCartTotal] = useState(0);
  const [displayItems, setDisplayItems] = useState();
  const [searchVal, setSearchVal] = useState("");
  const [checkoutActive, setcheckoutActive] = useState(true);
  const [orderSumActive, setorderSumActive] = useState(false);
  let val;

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
          {/* {cartItems} */}
          {orderList}
        </div>

        <button class="btn">Return</button>
      </div>
    );
  };

  const CheckoutForm = () => {
    return (
      <div class="orderSum">
        <button class="btn-return" onClick={() => {}}>
          Continue Shopping
        </button>
        <legend></legend>
        <div class="col-md-8 cart">
          <div class="cart-list">
            <div>
              <span class="notlast small text-muted">Item</span>
              <span class="notlast small text-muted">Quantity</span>
              <span class="last small text-muted">Price</span>
            </div>
            <article>
              <img src="../public/images/BananaBread.jpeg" />
              <div class="card-content">
                <p class="info">2</p>
                <p class="info">item name</p>
                <p class="price"> $23.00</p>
              </div>
            </article>
            <article>
              <img src="..\public\images\monsterCookiesAndMild.jpeg" />
              <div class="card-content">
                <p class="info">10</p>
                <p class="info">item name</p>
                <p class="price"> $23.00</p>
              </div>
            </article>
            <div class="order-price">
              <span class="small text-muted">Order total: </span>
              <span class="lead fw-normal"> $50</span>
            </div>
          </div>
          <legend></legend>
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
        </div>
      </div>
    );
  };
  return (
    <div>
      <div class={`checkout ${checkoutActive ? "" : "collapse"}`}>
        <CheckoutForm />
      </div>
      <div class={`orderSummary ${orderSumActive ? "" : "collapse"}`}>
        <OrderSummary />
      </div>
    </div>
  );
}

export default CheckoutForm;
