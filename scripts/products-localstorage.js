////////////////////////////////////////////

function getProductsInLocalstorage() {
  let products = { ...localStorage };
  let arrayOfProducts = [];

  for (let key in products) {
    if (!isNaN(key)) {
      arrayOfProducts.push(JSON.parse(products[key]));
    }
  }
  return arrayOfProducts;
}

////////////////////////////////
function loadTheCart() {
  let cartProducts = getProductsInLocalstorage();
  let htmlProductsInCart = cartProducts
    .map(function (p) {
      return `
        <li class="drop-item">
          <img
            class="search-image"
            src="${p.image}"
          />
          <div class="product-details">
            <span>${p.name}</span>
            <span>$${p.price}</span>
          </div>
          <div class="qty-control">
            <i onclick="increaseQTY(${p.id})" class="fas fa-chevron-up"></i>
            <span>${p.QTYInCart}</span>
            <i onclick="decreaseQTY(${p.id})" class="fas fa-chevron-down"></i>
          </div>
        </li>
      `;
    })
    .join("");

  cartList.innerHTML = htmlProductsInCart;
  cartBadge.innerText = cartProducts.length;
}
