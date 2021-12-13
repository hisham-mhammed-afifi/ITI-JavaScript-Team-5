const scrollRow = document.getElementById("scrollRow");
const scrollingRight = document.getElementById("scrollingRight");
const scrollingLeft = document.getElementById("scrollingLeft");

scrollRow.addEventListener("mousewheel", function (e) {
  e.preventDefault();
  scrollRow.scrollLeft += e.deltaY;
});
scrollingRight.addEventListener("click", function () {
  scrollRow.scrollLeft += 300;
});
scrollingLeft.addEventListener("click", function () {
  scrollRow.scrollLeft -= 300;
});

////////////////////////////////////////////////////
//////////////////////////////  SCROLL PRODUCTS FUNCTIONS  //////////////////////////////

xhr.get("server/products.json", getAllProducts);

function getAllProducts() {
  const { products } = JSON.parse(oReq.responseText);
  let htmlProducts = products
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

  scrollContainer.innerHTML = htmlProducts;
}
