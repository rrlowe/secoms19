import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return(
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <p class="navbar-brand" href="#">
          <img alt="logo" src="../images/characters/chefBearNoBG.png" width="50px" class="d-inline-block"></img> Amero Bakery</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export function AdminNavBar() {
  return(
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <p class="navbar-brand" href="#">
          <img alt="logo" src="..\..\images\characters\chefBearNoBG.png" width="50px" class="d-inline-block"></img> Amero Bakery</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Student Info</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/deleteProducts">Delete/Edit Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/addItem">Add a Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}


export default NavBar;
