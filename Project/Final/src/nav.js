import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export function NavBar() {
  return(
    <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img alt="logo" src=".\images\characters\chefBearNoBG.png" width="50px" class="d-inline-block"></img> Amero Bakery</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item home active">
              <a class="nav-link" to="/">Home</a>
            </li>
            <li class="nav-item about">
              <a class="nav-link" to="/about">About</a>
            </li>
            <li class="nav-item productPage1">
              <a class="nav-link" to="/productPage1">Cookies By the Dozen</a>
            </li>
            <li class="nav-item productPage2">
              <a class="nav-link" to="/productPage2">Small Batch Cookies</a>
            </li>
            <li class="nav-item studentInfo">
              <a class="nav-link" to="/studentInfo">Student Info</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar;