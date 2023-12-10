// import { React, useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "./App.js";

// export function CheckoutForm() {
//   const { cartContent, setCartContent } = useContext(CartContext);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [cart, setCart] = useState(cartContent)
//   const [checkoutActive, setcheckoutActive] = useState(true);
//   const [customerInfoSumActive, setcustomerInfoSumActive] = useState(false);
//   let val;

//   useEffect(() => {
//     total();
//   }, cart);

//   const [customerInfo, setcustomerInfo] = useState({
//     name: "",
//     email: "",
//     card: "",
//     zip: "",
//   });

//   const [order, setOrder] = useState({
//     items: cartContent,
//     total: cartTotal,
//     customerInfo: customerInfo
//   });



//   function howManyofThis(id) {
//     let hmot = cart.filter((cartItem) => cartItem.id === id);
//     return hmot.length;
//   }

//   const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal);
//   };


//   function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }

//   let validate = function () {
//     val = true;
//     let email = document.getElementById("inputEmail4");
//     let name = document.getElementById("inputName");
//     let card = document.getElementById("inputCard");
//     let zip = document.getElementById("inputZip");

//     if (
//       !email.value.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       )
//     ) {
//       email.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       email.setAttribute("class", "form-control is-valid");
//       customerInfo.email = email.value;
//     }

//     if (!zip.value.match(/^[0-9]{5}$/)) {
//       zip.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       zip.setAttribute("class", "form-control is-valid");
//       customerInfo.zip = zip.value;
//     }

//     if (name.value.length == 0) {
//       name.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       name.setAttribute("class", "form-control is-valid");
//       customerInfo.name = name.value;
//     }

//     if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
//       card.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       card.setAttribute("class", "form-control is-valid");
//       customerInfo.card = card.value.substring(0, 4) + "-XXXX-XXXX-XXXX";
//     }

//     if (val) {
//       setcheckoutActive((current) => !current);
//       setcustomerInfoSumActive((current) => !current);
//       setCartContent([]);
//     }
//     return val;
//   };

//   const customerInfoSummary = () => {
//     const customerInfoList = Object.entries(customerInfo).map(([key, value]) => {
//       return (
//         <div>
//           {key} : {value.toString()}
//         </div>
//       );
//     });

//     return (
//       <div class="customerInfo-card">
//         <div class="card-body">
//           <h5 class="card-title">customerInfo summary</h5>
//           <p class="card-text">Here is a summary of your customerInfo.</p>
//           {cartItems}
//           <div class="customerInfo-price">
//             <span class="small text-muted">customerInfo total: </span>
//             <span class="lead fw-normal"> ${cartTotal}</span>
//           </div>
//           <div class="customerInfo-data">
//           {customerInfoList}
//           </div>
//         </div>

//         <Link class="btn" to="/products">
//           Return
//         </Link>
//       </div>
//     );
//   };

//   const uniqueItems = cart.filter((val, id, array) => {
//     return array.indexOf(val) == id;
//   });

//   const listItems = uniqueItems.map((el) => (
//     // PRODUCT
//     <article key={el.id}>
//       <img src={el.image} />
//       <div class="card-content">
//         <p class="info">
//           ${el.price} <span class="close">&#10005;</span>
//           {howManyofThis(el.id)}
//         </p>
//         <p class="info">{el.title}</p>
//         <div class="price">${el.price * howManyofThis(el.id)}</div>
//       </div>
//     </article>
//   ));

//   const cartItems = uniqueItems.map((el) => (
//     <div key={el.id}>
//       <div class="row bcustomerInfo-top bcustomerInfo-bottom" key={el.id}>
//         <div class="row main align-items-center">
//           <div class="col-2">
//             <img class="img-fluid" src={el.image} />
//           </div>
//           <div class="col-4">
//             <div class="row text-muted">{el.title}</div>
//           </div>
//           <div class="col-2">
//             ${el.price} <span class="close">&#10005;</span>
//             {howManyofThis(el.id)}
//           </div>
//           <div class="col price">${el.price * howManyofThis(el.id)}</div>
//         </div>
//       </div>
//     </div>
//   ));

//   const CheckoutForm = () => {
//     return (
//       <div class="customerInfoSum">
//         <Link class="btn-return" to="/products">
//           Continue Shopping
//         </Link>
//         <legend></legend>
//         <div class="col-md-8 cart">
//           <div class="cart-list">
//             <div>
//               <span class="notlast small text-muted">Item</span>
//               <span class="notlast small text-muted">Quantity</span>
//               <span class="last small text-muted">Price</span>
//             </div>
//             {listItems}
//             <div class="customerInfo-price">
//               <span class="small text-muted">customerInfo total: </span>
//               <span class="lead fw-normal"> ${cartTotal}</span>
//             </div>
//           <legend></legend>
//         </div>
//         <div class="row">
//           <div class="col-2"></div>

//           <div class="col-8">
//             <div id="liveAlertPlaceholder"></div>

//             <form class="row g-3" id="checkout-form">
//               <div class="col-md-6">
//                 <label for="inputName" class="form-label">
//                   Full Name
//                 </label>
//                 <input type="text" class="form-control" id="inputName"></input>
//                 <div class="valid-feedback">Looks good!</div>
//                 <div class="invalid-feedback">Must be like, "John Doe"</div>
//               </div>

//               <div class="col-md-6">
//                 <label for="inputEmail4" class="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   class="form-control"
//                   id="inputEmail4"
//                 ></input>
//                 <div class="valid-feedback">Looks good!</div>
//                 <div class="invalid-feedback">Must be like, "abc@xyz.efg"</div>
//               </div>

//               <div class="col-12">
//                 <label for="inputCard" class="form-label">
//                   Card
//                 </label>
//                 <div class="input-group mb-3">
//                   <input
//                     type="text"
//                     id="inputCard"
//                     class="form-control"
//                     placeholder="XXXX-XXXX-XXXX-XXXX"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                   ></input>
//                   <div class="valid-feedback">Looks good!</div>
//                   <div class="invalid-feedback">
//                     Must be like, "7777-7777-7777-7777"
//                   </div>
//                 </div>
//               </div>

//               <div class="col-12">
//                 <label for="inputAddress" class="form-label">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="inputAddress"
//                   placeholder="1234 Main St"
//                 ></input>
//               </div>
//               <div class="col-12">
//                 <label for="inputAddress2" class="form-label">
//                   Address 2
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="inputAddress2"
//                   placeholder="Apartment, studio, or floor"
//                 ></input>
//               </div>
//               <div class="col-md-6">
//                 <label for="inputCity" class="form-label">
//                   City
//                 </label>
//                 <input type="text" class="form-control" id="inputCity"></input>
//               </div>
//               <div class="col-md-4">
//                 <label for="inputState" class="form-label">
//                   State
//                 </label>
//                 <select id="inputState" class="form-select">
//                   <option selected>Choose...</option>
//                   <option value="AL">Alabama</option>
//                   <option value="AK">Alaska</option>
//                   <option value="AZ">Arizona</option>
//                   <option value="AR">Arkansas</option>
//                   <option value="CA">California</option>
//                   <option value="CO">Colorado</option>
//                   <option value="CT">Connecticut</option>
//                   <option value="DE">Delaware</option>
//                   <option value="DC">District Of Columbia</option>
//                   <option value="FL">Florida</option>
//                   <option value="GA">Georgia</option>
//                   <option value="HI">Hawaii</option>
//                   <option value="ID">Idaho</option>
//                   <option value="IL">Illinois</option>
//                   <option value="IN">Indiana</option>
//                   <option value="IA">Iowa</option>
//                   <option value="KS">Kansas</option>
//                   <option value="KY">Kentucky</option>
//                   <option value="LA">Louisiana</option>
//                   <option value="ME">Maine</option>
//                   <option value="MD">Maryland</option>
//                   <option value="MA">Massachusetts</option>
//                   <option value="MI">Michigan</option>
//                   <option value="MN">Minnesota</option>
//                   <option value="MS">Mississippi</option>
//                   <option value="MO">Missouri</option>
//                   <option value="MT">Montana</option>
//                   <option value="NE">Nebraska</option>
//                   <option value="NV">Nevada</option>
//                   <option value="NH">New Hampshire</option>
//                   <option value="NJ">New Jersey</option>
//                   <option value="NM">New Mexico</option>
//                   <option value="NY">New York</option>
//                   <option value="NC">North Carolina</option>
//                   <option value="ND">North Dakota</option>
//                   <option value="OH">Ohio</option>
//                   <option value="OK">Oklahoma</option>
//                   <option value="OR">Oregon</option>
//                   <option value="PA">Pennsylvania</option>
//                   <option value="RI">Rhode Island</option>
//                   <option value="SC">South Carolina</option>
//                   <option value="SD">South Dakota</option>
//                   <option value="TN">Tennessee</option>
//                   <option value="TX">Texas</option>
//                   <option value="UT">Utah</option>
//                   <option value="VT">Vermont</option>
//                   <option value="VA">Virginia</option>
//                   <option value="WA">Washington</option>
//                   <option value="WV">West Virginia</option>
//                   <option value="WI">Wisconsin</option>
//                   <option value="WY">Wyoming</option>
//                 </select>
//               </div>
//               <div class="col-md-2">
//                 <label for="inputZip" class="form-label">
//                   Zip
//                 </label>
//                 <input type="text" class="form-control" id="inputZip"></input>
//                 <div class="valid-feedback">Looks good!</div>
//                 <div class="invalid-feedback">Must be like, "55555"</div>
//               </div>
//               <div class="col-12">
//                 <button
//                   type="submit"
//                   class="btn-customerInfo btn-search"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     validate();
//                   }}
//                 >
//                   {" "}
//                   customerInfo
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   };
//   return (
//     <div>
//       <div class={`checkout ${checkoutActive && cartContent.length > 0 ? "" : "collapse"}`}>
//         <CheckoutForm />
//       </div>
//       <div class={`checkout ${checkoutActive && cartContent.length  == 0 ? "" : "collapse"}`}>
//       <div class="customerInfoSum">
//         <Link class="btn-return" to="/products">
//           Continue Shopping
//         </Link>
//         <legend></legend>
//         <h1>Your Cart is currently Empty</h1>
//         </div>
//       </div>
//       <div class={`customerInfoSummary ${customerInfoSumActive ? "" : "collapse"}`}>
//         <customerInfoSummary />
//       </div>
//     </div>
//   );
// }

// export default CheckoutForm;

// import React, { useState, useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "./App.js";

// export function CheckoutForm() {
//   const [customerInfo, setCustomerInfo] = useState({
//     name: "",
//     email: "",
//     card: "",
//     zip: "",
//   });

//   const [order, setOrder] = useState({
//     items: [],
//     total: 0,
//     customerInfo: customerInfo,
//   });

//   const { cartContent, setCartContent } = useContext(CartContext);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [cart, setCart] = useState(cartContent);
//   const [checkoutActive, setCheckoutActive] = useState(true);
//   const [customerInfoSumActive, setCustomerInfoSumActive] = useState(false);
//   let val;

//   useEffect(() => {
//     total();
//   }, [cart]);

//   function howManyofThis(id) {
//     let hmot = cart.filter((cartItem) => cartItem.id === id);
//     return hmot.length;
//   }

//   const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal);
//   };

//   function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }

//   let validate = function () {
//     val = true;
//     let email = document.getElementById("inputEmail4");
//     let name = document.getElementById("inputName");
//     let card = document.getElementById("inputCard");
//     let zip = document.getElementById("inputZip");

//     if (
//       !email.value.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       )
//     ) {
//       email.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       email.setAttribute("class", "form-control is-valid");
//       setCustomerInfo((prevInfo) => ({
//         ...prevInfo,
//         email: email.value,
//       }));
//     }

//     if (!zip.value.match(/^[0-9]{5}$/)) {
//       zip.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       zip.setAttribute("class", "form-control is-valid");
//       setCustomerInfo((prevInfo) => ({
//         ...prevInfo,
//         zip: zip.value,
//       }));
//     }

//     if (name.value.length === 0) {
//       name.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       name.setAttribute("class", "form-control is-valid");
//       setCustomerInfo((prevInfo) => ({
//         ...prevInfo,
//         name: name.value,
//       }));
//     }

//     if (!card.value.match(/^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/)) {
//       card.setAttribute("class", "form-control is-invalid");
//       val = false;
//     } else {
//       card.setAttribute("class", "form-control is-valid");
//       setCustomerInfo((prevInfo) => ({
//         ...prevInfo,
//         card: card.value.substring(0, 4) + "-XXXX-XXXX-XXXX",
//       }));
//     }

//     if (val) {
//       setCheckoutActive((current) => !current);
//       setCustomerInfoSumActive((current) => !current);
//       setCartContent([]);
//     }
//     return val;
//   };

//   const customerInfoSummary = () => {
//     const customerInfoList = Object.entries(customerInfo).map(([key, value]) => (
//       <div key={key}>
//         {key} : {value.toString()}
//       </div>
//     ));
  
//     const itemsList = order.items.map((el) => (
//       <div key={el.id}>
//         <div className="row bcustomerInfo-top bcustomerInfo-bottom" key={el.id}>
//           <div className="row main align-items-center">
//             <div className="col-2">
//               <img className="img-fluid" src={el.image} alt={el.title} />
//             </div>
//             <div className="col-4">
//               <div className="row text-muted">{el.title}</div>
//             </div>
//             <div className="col-2">
//               ${el.price} <span className="close">&#10005;</span>
//               {howManyofThis(el.id)}
//             </div>
//             <div className="col price">${el.price * howManyofThis(el.id)}</div>
//           </div>
//         </div>
//       </div>
//     ));
  
//     return (
//       <div className="customerInfo-card">
//         <div className="card-body">
//           <h5 className="card-title">CustomerInfo summary</h5>
//           <p className="card-text">Here is a summary of your customerInfo.</p>
//           <div className="customerInfo-data">{customerInfoList}</div>
//           <div className="items-list">{itemsList}</div>
//           <div className="customerInfo-price">
//             <span className="small text-muted">Order total: </span>
//             <span className="lead fw-normal"> ${order.total}</span>
//           </div>
//         </div>
  
//         <Link className="btn" to="/products">
//           Return
//         </Link>
//       </div>
//     );
//   };

//   const uniqueItems = cart.filter((val, id, array) => {
//     return array.indexOf(val) === id;
//   });

//   const listItems = uniqueItems.map((el) => (
//     // PRODUCT
//     <article key={el.id}>
//       <img src={el.image} alt={el.title} />
//       <div className="card-content">
//         <p className="info">
//           ${el.price} <span className="close">&#10005;</span>
//           {howManyofThis(el.id)}
//         </p>
//         <p className="info">{el.title}</p>
//         <div className="price">${el.price * howManyofThis(el.id)}</div>
//       </div>
//     </article>
//   ));

//   const cartItems = uniqueItems.map((el) => (
//     <div key={el.id}>
//       <div className="row bcustomerInfo-top bcustomerInfo-bottom" key={el.id}>
//         <div className="row main align-items-center">
//           <div className="col-2">
//             <img className="img-fluid" src={el.image} alt={el.title} />
//           </div>
//           <div className="col-4">
//             <div className="row text-muted">{el.title}</div>
//           </div>
//           <div className="col-2">
//             ${el.price} <span className="close">&#10005;</span>
//             {howManyofThis(el.id)}
//           </div>
//           <div className="col price">${el.price * howManyofThis(el.id)}</div>
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       <div className={`checkout ${checkoutActive && cartContent.length > 0 ? "" : "collapse"}`}>
//         <div className="col-md-8 cart">
//           <div className="cart-list">
//             <div>
//               <span className="notlast small text-muted">Item</span>
//               <span className="notlast small text-muted">Quantity</span>
//               <span className="last small text-muted">Price</span>
//             </div>
//             {listItems}
//             <div className="customerInfo-price">
//               <span className="small text-muted">CustomerInfo total: </span>
//               <span className="lead fw-normal"> ${cartTotal}</span>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-2"></div>
//           <div className="col-8">
//             <div id="liveAlertPlaceholder"></div>
//             <form className="row g-3" id="checkout-form">
//             <div class="col-md-6">
//                  <label for="inputName" class="form-label">
//                    Full Name
//                  </label>
//                  <input type="text" class="form-control" id="inputName"></input>
//                  <div class="valid-feedback">Looks good!</div>
//                  <div class="invalid-feedback">Must be like, "John Doe"</div>
//                </div>

//                <div class="col-md-6">
//                  <label for="inputEmail4" class="form-label">
//                    Email
//                  </label>
//                  <input
//                   type="email"
//                   class="form-control"
//                   id="inputEmail4"
//                 ></input>
//                 <div class="valid-feedback">Looks good!</div>
//                 <div class="invalid-feedback">Must be like, "abc@xyz.efg"</div>
//               </div>

//               <div class="col-12">
//                 <label for="inputCard" class="form-label">
//                   Card
//                 </label>
//                 <div class="input-group mb-3">
//                   <input
//                     type="text"
//                     id="inputCard"
//                     class="form-control"
//                     placeholder="XXXX-XXXX-XXXX-XXXX"
//                     aria-label="Username"
//                     aria-describedby="basic-addon1"
//                   ></input>
//                   <div class="valid-feedback">Looks good!</div>
//                   <div class="invalid-feedback">
//                     Must be like, "7777-7777-7777-7777"
//                   </div>
//                 </div>
//               </div>

//               <div class="col-12">
//                 <label for="inputAddress" class="form-label">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="inputAddress"
//                   placeholder="1234 Main St"
//                 ></input>
//               </div>
//               <div class="col-12">
//                 <label for="inputAddress2" class="form-label">
//                   Address 2
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="inputAddress2"
//                   placeholder="Apartment, studio, or floor"
//                 ></input>
//               </div>
//               <div class="col-md-6">
//                 <label for="inputCity" class="form-label">
//                   City
//                 </label>
//                 <input type="text" class="form-control" id="inputCity"></input>
//               </div>
//               <div class="col-md-4">
//                 <label for="inputState" class="form-label">
//                   State
//                 </label>
//                 <select id="inputState" class="form-select">
//                   <option selected>Choose...</option>
//                   <option value="AL">Alabama</option>
//                   <option value="AK">Alaska</option>
//                   <option value="AZ">Arizona</option>
//                   <option value="AR">Arkansas</option>
//                   <option value="CA">California</option>
//                   <option value="CO">Colorado</option>
//                   <option value="CT">Connecticut</option>
//                   <option value="DE">Delaware</option>
//                   <option value="DC">District Of Columbia</option>
//                   <option value="FL">Florida</option>
//                   <option value="GA">Georgia</option>
//                   <option value="HI">Hawaii</option>
//                   <option value="ID">Idaho</option>
//                   <option value="IL">Illinois</option>
//                   <option value="IN">Indiana</option>
//                   <option value="IA">Iowa</option>
//                   <option value="KS">Kansas</option>
//                   <option value="KY">Kentucky</option>
//                   <option value="LA">Louisiana</option>
//                   <option value="ME">Maine</option>
//                   <option value="MD">Maryland</option>
//                   <option value="MA">Massachusetts</option>
//                   <option value="MI">Michigan</option>
//                   <option value="MN">Minnesota</option>
//                   <option value="MS">Mississippi</option>
//                   <option value="MO">Missouri</option>
//                   <option value="MT">Montana</option>
//                   <option value="NE">Nebraska</option>
//                   <option value="NV">Nevada</option>
//                   <option value="NH">New Hampshire</option>
//                   <option value="NJ">New Jersey</option>
//                   <option value="NM">New Mexico</option>
//                   <option value="NY">New York</option>
//                   <option value="NC">North Carolina</option>
//                   <option value="ND">North Dakota</option>
//                   <option value="OH">Ohio</option>
//                   <option value="OK">Oklahoma</option>
//                   <option value="OR">Oregon</option>
//                   <option value="PA">Pennsylvania</option>
//                   <option value="RI">Rhode Island</option>
//                   <option value="SC">South Carolina</option>
//                   <option value="SD">South Dakota</option>
//                   <option value="TN">Tennessee</option>
//                   <option value="TX">Texas</option>
//                   <option value="UT">Utah</option>
//                   <option value="VT">Vermont</option>
//                   <option value="VA">Virginia</option>
//                   <option value="WA">Washington</option>
//                   <option value="WV">West Virginia</option>
//                   <option value="WI">Wisconsin</option>
//                   <option value="WY">Wyoming</option>
//                 </select>
//               </div>
//               <div class="col-md-2">
//                 <label for="inputZip" class="form-label">
//                   Zip
//                 </label>
//                 <input type="text" class="form-control" id="inputZip"></input>
//                 <div class="valid-feedback">Looks good!</div>
//                 <div class="invalid-feedback">Must be like, "55555"</div>
//               </div>
//               <div class="col-12">
//                 <button
//                   type="submit"
//                   class="btn-customerInfo btn-search"
//                   onClick={(event) => {
//                     event.preventDefault();
//                     validate();
//                   }}
//                 >
//                   {" "}
//                   customerInfo
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className={`checkout ${checkoutActive && cartContent.length === 0 ? "" : "collapse"}`}>
//         <div className="customerInfoSum">
//           <Link className="btn-return" to="/products">
//             Continue Shopping
//           </Link>
//           <legend></legend>
//           <h1>Your Cart is currently Empty</h1>
//         </div>
//       </div>
//       <div className={`customerInfoSummary ${customerInfoSumActive ? "" : "collapse"}`}>
//         <customerInfoSummary />
//       </div>
//     </div>
//   );
// }

// export default CheckoutForm;

import { React, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./App.js";
import NavBar from "./nav.jsx";

export function CheckoutForm() {
  const { cartContent, setCartContent } = useContext(CartContext);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState(cartContent)
  const [checkoutActive, setcheckoutActive] = useState(true);
  const [orderSumActive, setorderSumActive] = useState(false);
  let val;

  const [order, setOrder] = useState({
    name: "",
    email: "",
    card: "",
    zip: "",
  });

  const [submitOrder, setSubmitOrder] = useState({
        items: cartContent,
        total: 0,
        customerInfo: order,
  });


  useEffect(() => {
    total();
  }, cart);

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += parseInt(cart[i].price);
    }
    setCartTotal(totalVal);
  };


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
      order.card =  "XXXX-XXXX-XXXX-" + card.value.substring(15, 20);
    }

    if (val) {
      setcheckoutActive((current) => !current);
      setorderSumActive((current) => !current);
      setCartContent([]);
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
      <div class="order-card">
        <div class="card-body">
          <h5 class="card-title">Order summary</h5>
          <p class="card-text">Here is a summary of your order.</p>
          {cartItems}
          <div class="order-price">
            <span class="small text-muted">Order total: </span>
            <span class="lead fw-normal"> ${cartTotal}</span>
          </div>
          <div class="order-data">
          {orderList}
          </div>
        </div>

        <Link class="btn" to="/products">
          Return
        </Link>
      </div>
    );
  };

  const uniqueItems = cart.filter((val, id, array) => {
    return array.indexOf(val) == id;
  });

  const listItems = uniqueItems.map((el) => (
    // PRODUCT
    <article key={el.id}>
      <img src={el.image} />
      <div class="card-content">
        <p class="info">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </p>
        <p class="info">{el.title}</p>
        <div class="price">${el.price * howManyofThis(el.id)}</div>
      </div>
    </article>
  ));

  const cartItems = uniqueItems.map((el) => (
    <div key={el.id}>
      <div class="row border-top border-bottom" key={el.id}>
        <div class="row main align-items-center">
          <div class="col-2">
            <img class="img-fluid" src={el.image} />
          </div>
          <div class="col-4">
            <div class="row text-muted">{el.title}</div>
          </div>
          <div class="col-2">
            ${el.price} <span class="close">&#10005;</span>
            {howManyofThis(el.id)}
          </div>
          <div class="col price">${el.price * howManyofThis(el.id)}</div>
        </div>
      </div>
    </div>
  ));

  const orderSubmit = async () => {

    submitOrder.items = cartContent;
    submitOrder.total = cartTotal;
    submitOrder.customerInfo = order;

    try {
      const response = await fetch("http://localhost:8081/submitOrder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitOrder),
      });

      if (response.ok) {
        console.log('Order submitted successfully!');
      } else {
        console.error('Failed to submit order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };


  const CheckoutForm = () => {
    return (
      <div class="orderSum">
        <Link class="btn-return" to="/products">
          Continue Shopping
        </Link>
        <legend></legend>
        <div class="col-md-8 cart">
          <div class="cart-list">
            <div>
              <span class="notlast small text-muted">Item</span>
              <span class="notlast small text-muted">Quantity</span>
              <span class="last small text-muted">Price</span>
            </div>
            {listItems}
            <div class="order-price">
              <span class="small text-muted">Order total: </span>
              <span class="lead fw-normal"> ${cartTotal}</span>
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
                    validate()
                    orderSubmit();
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
      </div>
    );
  };
  return (
    <div>
      <NavBar></NavBar>
      <div class={`checkout ${checkoutActive && cartContent.length > 0 ? "" : "collapse"}`}>
        <CheckoutForm />
      </div>
      <div class={`checkout ${checkoutActive && cartContent.length  == 0 ? "" : "collapse"}`}>
      <div class="orderSum">
        <Link class="btn-return" to="/products">
          Continue Shopping
        </Link>
        <legend></legend>
        <h1>Your Cart is currently Empty</h1>
        </div>
      </div>
      <div class={`orderSummary ${orderSumActive ? "" : "collapse"}`}>
        <OrderSummary />
      </div>
    </div>
  );
}

export default CheckoutForm;