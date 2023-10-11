fetch("./data.json")
.then(response=>response.json())
.then(product => loadProducts(product));

if(document.URL.includes("productPage1")){
function loadProducts(product){
    var productContainer = document.getElementById("products");

    for(var i =0; i< product.Dozen.length; i++){
        let image = product.Dozen[i].image; //key = movies
        let lable = product.Dozen[i].lable;
        let price = product.Dozen[i].price;

        let element = document.createElement("div");
        element.innerHTML = `<div class="col"><div class="card shadow-sm" style="padding: 10px;"><img class="cookieImg" src="${image}"><div class="card-body"> <p class="card-text">${lable}<br> <span>${price}</span></p></div></div></div>`
        productContainer.appendChild(element);

    }
}
}