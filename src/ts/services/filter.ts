import { ProductTemplate } from "../models/ProductTemplate";

let filterMenu: HTMLDivElement = document.getElementById(
  "filter-menu"
) as HTMLDivElement;

export function toggleFilterMenu() {
  if (filterMenu.classList.contains("filter-menu__invisible")) {
    filterMenu.classList.replace(
      "filter-menu__invisible",
      "filter-menu__visible"
    );

    renderFilterMenu();
    console.log("filter menu is open");
  } else {
    filterMenu.className = "filter-menu__invisible";

    removeFilterMenu();

    console.log("filter menu is closed");
  }
}

export function renderFilterMenu() {
  //creates size button
  let sizeBtn = document.createElement("button");
  sizeBtn.innerText = "Sort by Size";
  sizeBtn.classList.add("menu-btn", "potion-size", "size-options-invisible");
  filterMenu.appendChild(sizeBtn);

  //creates size menu container
  let sizeMenuContainer = document.createElement("div");
  sizeMenuContainer.classList.add("size-menu-container", "invisible");
  filterMenu.appendChild(sizeMenuContainer);

  //cretaes type button
  let typeBtn = document.createElement("button");
  typeBtn.innerText = "Sort by Type";
  typeBtn.classList.add("menu-btn", "potion-type", "type-options-invisible");
  typeBtn.classList.add("potion-type");
  filterMenu.appendChild(typeBtn);

  //creates type menu container
  let typeMenuContainer = document.createElement("div");
  typeMenuContainer.classList.add("type-menu-container", "invisible");
  filterMenu.appendChild(typeMenuContainer);

  let priceBtn = document.createElement("button");
  priceBtn.innerText = "Sort by Price";
  priceBtn.classList.add("menu-btn");
  priceBtn.classList.add("potion-price");
  filterMenu.appendChild(priceBtn);

  if ((filterMenu.className = "filter-menu__visible")) {
    //Sort by size eventlistener
    let sortBySizeBtn: HTMLButtonElement = document.querySelector(
      ".potion-size"
    ) as HTMLButtonElement;

    sortBySizeBtn.addEventListener("click", () => {
      if (sortBySizeBtn.classList.contains("size-options-visible")) {
        sortBySizeBtn.classList.replace(
          "size-options-visible",
          "size-options-invisible"
        );
        removeSizeMenu(sizeMenuContainer);
      } else {
        sortBySizeBtn.classList.replace(
          "size-options-invisible",
          "size-options-visible"
        );
        sizeMenuContainer.classList.remove("invisible");
        renderSizeMenu(sizeMenuContainer);
      }
    });

    //Sort by type eventlistener

    let sortByTypeBtn: HTMLButtonElement = document.querySelector(
      ".potion-type"
    ) as HTMLButtonElement;
    sortByTypeBtn.addEventListener("click", () => {
      if (sortByTypeBtn.classList.contains("type-options-visible")) {
        sortByTypeBtn.classList.replace(
          "type-options-visible",
          "type-options-invisible"
        );
        removeTypeMenu(typeMenuContainer);
      } else {
        sortByTypeBtn.classList.replace(
          "type-options-invisible",
          "type-options-visible"
        );
        typeMenuContainer.classList.remove("invisible");
        renderTypeMenu(typeMenuContainer);
      }
    });

    //Sort by price eventlistener

    /* let sortByPriceBtn: HTMLButtonElement = document.querySelector(
      ".potion-price"
    ) as HTMLButtonElement;
    sortByPriceBtn.addEventListener("click", () => {
      togglePriceMenu();
    }); */
  }
}

export function removeFilterMenu() {
  filterMenu.innerHTML = "";
}

//Size functions

function renderSizeMenu(sizeMenuContainer: HTMLDivElement) {
  console.log("Du vill sortera efter storlek");

  //creates small menu option
  let smallBtn = document.createElement("button");
  smallBtn.innerText = "sort by small";
  smallBtn.classList.add("menu-btn", "small-size");

  //creates medium menu option
  let mediumBtn = document.createElement("button");
  mediumBtn.innerText = "sort by medium";
  mediumBtn.classList.add("menu-btn", "medium-size");
  mediumBtn;

  //creates large menu option
  let largeBtn = document.createElement("button");
  largeBtn.innerText = "sort by large";
  largeBtn.classList.add("menu-btn", "large-size");
  largeBtn;

  sizeMenuContainer.appendChild(smallBtn);
  sizeMenuContainer.appendChild(mediumBtn);
  sizeMenuContainer.appendChild(largeBtn);
}

function removeSizeMenu(sizeMenuContainer: HTMLDivElement) {
  sizeMenuContainer.innerHTML = "";
}

export function renderTypeMenu(typeMenuContainer: HTMLDivElement) {
  console.log("Du vill sortera efter typ");

  //creates healing option
  let healingBtn = document.createElement("button");
  healingBtn.innerText = "sort by healing";
  healingBtn.classList.add("menu-btn", "healing-type");

  //creates stamina option
  let staminaBtn = document.createElement("button");
  staminaBtn.innerText = "sort by stamina";
  staminaBtn.classList.add("menu-btn", "stamina-type");
  staminaBtn;

  //creates mana option
  let manaBtn = document.createElement("button");
  manaBtn.innerText = "sort by mana";
  manaBtn.classList.add("menu-btn", "mana-type");
  manaBtn;

  typeMenuContainer.appendChild(healingBtn);
  typeMenuContainer.appendChild(staminaBtn);
  typeMenuContainer.appendChild(manaBtn);
}

function removeTypeMenu(sizeMenuContainer: HTMLDivElement) {
  sizeMenuContainer.innerHTML = "";
}

export function togglePriceMenu() {
  console.log("Du vill sortera efter pris");
}

function renderFilteredProductList(products: ProductTemplate[]) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].size === "Small") {
      //Creates container for a product
      let productContainer = document.createElement("div");
      productContainer.classList.add("product__container");
      document.querySelector(".product__list")?.appendChild(productContainer);

      //Creates element for product image
      let productImg = document.createElement("img");
      productImg.classList.add("product__container-image");
      productImg.src = products[i].image;
      productImg.alt = "Picture of product";
      productContainer.appendChild(productImg);

      //Creates element for product__info
      let productInfo = document.createElement("div");
      productInfo.classList.add("product__info");
      productContainer.appendChild(productInfo);

      //Creates element for inner text container
      let productinfoTextContainer = document.createElement("div");
      productinfoTextContainer.classList.add("product__info-text-container");
      productInfo.appendChild(productinfoTextContainer);

      //Creates element for product name
      let productName = document.createElement("p");
      productName.classList.add("product__info-name");
      productName.innerHTML = products[i].name;
      productinfoTextContainer.appendChild(productName);

      //Creates element for product price
      let productPrice = document.createElement("p");
      productPrice.classList.add("product__info-price");
      productPrice.innerHTML = products[i].price.toString() + "G"; //la till toString, men vet inte om det funkar just nu
      productinfoTextContainer.appendChild(productPrice);

      //Creates inputs container
      let productInputs = document.createElement("div");
      productInputs.classList.add("product__inputs");
      productinfoTextContainer.appendChild(productInputs);

      //Creates input field
      let productAmount = document.createElement("input");
      productAmount.setAttribute("id", `add-${products[i].name}-input`);
      productAmount.type = "number";
      productAmount.value = "1";
      productAmount.classList.add("product__info-amount");
      productInputs.appendChild(productAmount);
      let amountOfProducts = productAmount.value;

      //Creates "add to cart" button
      let productAddToCartBtn = document.createElement("button");
      productAddToCartBtn.setAttribute("id", `add-${products[i].name}-button`);
      productAddToCartBtn.classList.add("product__info-buy-btn");
      productAddToCartBtn.innerText = "Add to cart";
      productInputs.appendChild(productAddToCartBtn);
    }
  }
}
