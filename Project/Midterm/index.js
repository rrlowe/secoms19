fetch("./data.json")
  .then((response) => response.json())
  .then((product) => loadProducts(product));

if (document.URL.includes("productPage1")) {
  function loadProducts(product) {
    var productContainer = document.getElementById("products");

    for (var i = 0; i < product.Dozen.length; i++) {
      let image = product.Dozen[i].image; //key = movies
      let lable = product.Dozen[i].lable;
      let price = product.Dozen[i].price;

      let element = document.createElement("div");
      element.innerHTML = `<div class="col"><div class="card shadow-sm" style="padding: 10px;"><img class="cookieImg" src="${image}"><div class="card-body"> <p class="card-text">${lable}<br> <span>${price}</span></p></div></div></div>`;
      productContainer.appendChild(element);
    }
  }
}

if (document.URL.includes("productPage2")) {
  function loadProducts(product) {
    var productContainer = document.getElementById("products");

    for (var i = 0; i < product.Dozen.length; i++) {
      let image = product.sixPack[i].image; //key = movies
      let lable = product.sixPack[i].lable;
      let price = product.sixPack[i].price;

      let element = document.createElement("div");
      element.innerHTML = `<div class="col"><div class="card shadow-sm" style="padding: 10px;"><img class="cookieImg" src="${image}"><div class="card-body"> <p class="card-text">${lable}<br> <span>${price}</span></p></div></div></div>`;
      productContainer.appendChild(element);
    }
  }
}

if (document.URL.includes("studentInfo")) {
  var id = null;
  let elem = document.getElementById("bear");   
  console.log(elem);
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  var back = false
  function frame() {
    if (back == true) {
      if(pos > 0){
        pos -=.1; 
        console.log(pos);
        elem.style.left = pos + '%'; 
      }else{
        back = false;
      }
    } else {
      pos+=.1; 
      console.log(pos);
      elem.style.left = pos + 'vw'; 
      if(pos > 80){
        back=true;
      }
    }
}
}
