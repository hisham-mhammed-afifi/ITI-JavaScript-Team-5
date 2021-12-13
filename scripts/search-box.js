searchBox.addEventListener("input", showSearchResults);
searchBox.addEventListener("mouseout", hideSearchResults);
//////////////////////////////  SEARCH FUNCTIONS  //////////////////////////////
let searchInput = "";
let timeoutId;
divSearchList.style.display = "none";

function showSearchResults(e) {
  searchInput = e.target.value;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  timeoutId = setTimeout(() => {
    divSearchList.style.display = "block";
    xhr.get("/server/products.json", getSearchResults);
  }, 1000);
}

function hideSearchResults(e) {
  if (e.target.value === "") {
    divSearchList.style.display = "none";
  }
}

////////////////////////////////

function getSearchResults() {
  const { products } = JSON.parse(oReq.responseText);
  let htmlSearchResults = products
    .filter(function (product) {
      if (searchInput.toLowerCase() !== "") {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      } else {
        return false;
      }
    })
    .map(function (product) {
      return `
            <li class="drop-item">
              <img
                class="search-image"
                src="${product.image}"
              />
              <span>${product.name}</span>
              <span>$${product.price}</span>
            </li>
          `;
    })
    .join("");

  searchList.innerHTML = htmlSearchResults;
}
