dropDownBtn.addEventListener("click", showCategoriesList);
divDropList.addEventListener("mouseover", showListOnly);
divDropList.addEventListener("mouseout", hideCategoriesList);

//////////////////////////////  CATEGORIES FUNCTIONS  //////////////////////////////

function showListOnly() {
  divDropList.style.display = "block";
}
function showCategoriesList() {
  xhr.get("server/categories.json", getAllCategories);
  divDropList.style.display = "block";
}

function hideCategoriesList() {
  divDropList.style.display = "none";
}

function getAllCategories() {
  const { categories } = JSON.parse(oReq.responseText);

  let htmlCategories = categories
    .map(function (category) {
      return `
            <li onclick="filterProducts(${category.id})" class="drop-item">
              <span>${category.name}</span>
            </li>
        `;
    })
    .join("");

  dropList.innerHTML = htmlCategories;
}

/////////////////////////////////////////
