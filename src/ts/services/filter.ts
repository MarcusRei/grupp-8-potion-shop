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

    removeFilterHtml();

    console.log("filter menu is closed");
  }
}

export function renderFilterMenu() {
  //creates menu options
  let sizeBtn = document.createElement("button");
  sizeBtn.innerText = "Sort by Size";
  sizeBtn.classList.add("menu-btn", "potion-size");
  filterMenu.appendChild(sizeBtn);

  let typeBtn = document.createElement("button");
  typeBtn.innerText = "Sort by Type";
  typeBtn.classList.add("menu-btn");
  typeBtn.classList.add("potion-type");
  filterMenu.appendChild(typeBtn);

  let priceBtn = document.createElement("button");
  priceBtn.innerText = "Sort by price";
  priceBtn.classList.add("menu-btn");
  priceBtn.classList.add("potion-price");
  filterMenu.appendChild(priceBtn);

  if ((filterMenu.className = "filter-menu__visible")) {
    let sortBySizeBtn: HTMLButtonElement = document.querySelector(
      ".potion-size"
    ) as HTMLButtonElement;
    sortBySizeBtn.addEventListener("click", () => {
      console.log("Du vill sortera efter storlek");
      toggleSizeMenu();
    });

    let sortByTypeBtn: HTMLButtonElement = document.querySelector(
      ".potion-type"
    ) as HTMLButtonElement;
    sortByTypeBtn.addEventListener("click", () => {
      console.log("Du vill sortera efter typ");
      toggleSizeMenu();
    });

    let sortByPriceBtn: HTMLButtonElement = document.querySelector(
      ".potion-price"
    ) as HTMLButtonElement;
    sortByPriceBtn.addEventListener("click", () => {
      console.log("Du vill sortera efter pris");
      toggleSizeMenu();
    });
  }
}

export function toggleSizeMenu() {}

export function removeFilterHtml() {
  filterMenu.innerHTML = "";
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
