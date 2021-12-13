const cartMenu = document.getElementById("cartMenu");

function closeCartMenu() {
  cartMenu.style.transform = `translateX(400px)`;
}
function openCartMenu() {
  loadTheCart();
  cartMenu.style.transform = `translateX(0)`;
}

///////////////////////////////////

function increaseQTY(id) {
  const product = getProductsInLocalstorage().find(function (p) {
    return p.id === id;
  });
  product.QTYInCart += 1;
  localStorage.setItem(product.id, JSON.stringify(product));
  loadTheCart();
}
function decreaseQTY(id) {
  const product = getProductsInLocalstorage().find(function (p) {
    return p.id === id;
  });
  product.QTYInCart < 2 ? (product.QTYInCart = 1) : (product.QTYInCart -= 1);
  localStorage.setItem(product.id, JSON.stringify(product));
  loadTheCart();
}
//////////////////////   TOTAL   ///////////////////////

setInterval(() => {
  (function () {
    let total = 0;
    const allProducts = getProductsInLocalstorage();
    for (let p of allProducts) {
      total += p.QTYInCart * p.price;
    }
    totalPrice.innerText = "$" + total;
  })();
  loadTheCart();
}, 1000);
