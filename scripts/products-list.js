//////////filter products////////////////
//https://hisham-mhammed-afifi.github.io/Javascript-ITI-API/

xhr.get("server/products.json", getProds);
function getProds() {
  const { products } = JSON.parse(oReq.responseText);
  return products;
}

let allProds;
setTimeout(() => {
  allProds = getProds();
  console.log(allProds);
}, 300);

function filterProducts(id) {
  let htmlFilteredProducts = allProds
    .filter(function (p) {
      return p.categoryId === id;
    })
    .map(function (product) {
      return `
          <div class="card">
            <img
              src="${product.image}"
              class="card-image"
            />
            <div class="card-body">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">$${product.price}</p>
              <input onclick="addProductToCart(${product.id})" type="button" value="add to cart" />
            </div>
          </div>
        `;
    })
    .join("");
  productsContainer.innerHTML = htmlFilteredProducts;
}

function addProductToCart(id) {
  const productToAdd = allProds.find(function (product) {
    return product.id === id;
  });

  productToAdd.QTYInCart = 1;

  setTimeout(() => {
    localStorage.setItem(id, JSON.stringify(productToAdd));
    loadTheCart();
    openCartMenu();
  }, 400);
}
