import { getUserCartFromLS, putUserCartInLS } from "./localStorage";
import { CartProductTemplate } from "./models/CartProductTemplate";
import { products } from "./models/ProductList";
import { ProductTemplate } from "./models/ProductTemplate";
import {
  clearFilter,
  closeFilter,
  showFilter,
  toggleHealing,
  toggleInvisibility,
  toggleJoy,
  toggleLarge,
  toggleMana,
  toggleMedium,
  togglePoison,
  toggleSmall,
  toggleStamina,
  toggleTime,
} from "./services/filter";
import { renderUserCartinWidget } from "./services/userCartWidget";
import { addProductToCart, changeQuantity } from "./shoppingCartChanges";

(document.querySelector("#products") as HTMLBodyElement).onload = function () {
  renderProductlist(products);
};

// clearLocalStorage();
export function renderProductlist(listToRender: ProductTemplate[]) {
  (document.querySelector(".product__list") as HTMLElement).innerHTML = "";
  for (let i = 0; i < listToRender.length; i++) {
    //Creates container for a product
    let productContainer = document.createElement("div");
    productContainer.classList.add("product__container");
    productContainer.setAttribute("id", listToRender[i].id);
    document.querySelector(".product__list")?.appendChild(productContainer);

    //Creates element for product image
    let productImg = document.createElement("img");
    productImg.classList.add("product__container-image");
    productImg.src = listToRender[i].shelfImage;
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
    productName.innerHTML = listToRender[i].name;
    productinfoTextContainer.appendChild(productName);

    //Creates element for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("product__info-price");
    productPrice.innerHTML = listToRender[i].price.toString() + " G";
    productinfoTextContainer.appendChild(productPrice);

    //Creates inputs container
    let productInputs = document.createElement("div");
    productInputs.classList.add("product__inputs");
    productinfoTextContainer.appendChild(productInputs);

    //Creates input field
    let productAmount = document.createElement("input");
    productAmount.setAttribute("id", `add-${listToRender[i].id}-input`);
    productAmount.type = "number";
    productAmount.value = "1";
    productAmount.max = "100";
    productAmount.min = "1";
    productAmount.classList.add("product__info-amount");
    productInputs.appendChild(productAmount);

    //Creates "add to cart" button
    let productAddToCartBtn = document.createElement("button");
    productAddToCartBtn.setAttribute("id", `add-${listToRender[i].id}-button`);
    productAddToCartBtn.classList.add("product__info-buy-btn");
    productAddToCartBtn.innerText = "Add to cart";
    productInputs.appendChild(productAddToCartBtn);

    let productButton: HTMLButtonElement = document.getElementById(
      `add-${listToRender[i].id}-button`
    ) as HTMLButtonElement;

    //Adds eventlistener
    productButton.addEventListener("click", () => {
      let productsPageUserCart: CartProductTemplate[] =
        getUserCartFromLS() || "[]";
        addProductToCart(
        productsPageUserCart,
        listToRender[i],
        productAmount.value
      );
        renderUserCartinWidget();
    });
  }
}


// Clear filter button
let filterBtn: HTMLButtonElement = document.getElementById(
  "clear-filter"
) as HTMLButtonElement;
filterBtn.addEventListener("click", () => {
  checkboxSmall.checked = false;
  checkboxMedium.checked = false;
  checkboxLarge.checked = false;
  checkboxHealing.checked = false;
  checkboxMana.checked = false;
  checkboxStamina.checked = false;
  checkboxPoison.checked = false;
  checkboxJoy.checked = false;
  checkboxTime.checked = false;
  checkboxInvisibility.checked = false;

  clearFilter();
});


// Filter button open
const filterButton: HTMLButtonElement = document.getElementById(
  "filter-btn"
) as HTMLButtonElement;

filterButton.addEventListener("click", () => {
  showFilter();
  console.log("filter was clicked");
});


// Filter button close
const filterBackground: HTMLDivElement = document.getElementById(
  "filter-background"
) as HTMLDivElement;

filterBackground.addEventListener("click", () => {
  closeFilter();
});


// checkbox small
let checkboxSmall: HTMLInputElement = document.getElementById(
  "checkbox-small"
) as HTMLInputElement;
checkboxSmall.addEventListener("change", (e) => {
  e.preventDefault();
  toggleSmall(checkboxSmall);
});

// checkbox medium
let checkboxMedium: HTMLInputElement = document.getElementById(
  "checkbox-medium"
) as HTMLInputElement;
checkboxMedium.addEventListener("change", (e) => {
  e.preventDefault();
  toggleMedium(checkboxMedium);
});

// checkbox large
let checkboxLarge: HTMLInputElement = document.getElementById(
  "checkbox-large"
) as HTMLInputElement;
checkboxLarge.addEventListener("change", (e) => {
  e.preventDefault();
  toggleLarge(checkboxLarge);
});

// checkbox healing
let checkboxHealing: HTMLInputElement = document.getElementById(
  "checkbox-healing"
) as HTMLInputElement;
checkboxHealing.addEventListener("change", (e) => {
  e.preventDefault();
  toggleHealing(checkboxHealing);
});

// checkbox mana
let checkboxMana: HTMLInputElement = document.getElementById(
  "checkbox-mana"
) as HTMLInputElement;
checkboxMana.addEventListener("change", (e) => {
  e.preventDefault();
  toggleMana(checkboxMana);
});

// checkbox stamina
let checkboxStamina: HTMLInputElement = document.getElementById(
  "checkbox-stamina"
) as HTMLInputElement;
checkboxStamina.addEventListener("change", (e) => {
  e.preventDefault();
  toggleStamina(checkboxStamina);
});

// checkbox poisen
let checkboxPoison: HTMLInputElement = document.getElementById(
  "checkbox-poison"
) as HTMLInputElement;
checkboxPoison.addEventListener("change", (e) => {
  e.preventDefault();
  togglePoison(checkboxPoison);
});

// checkbox joy
let checkboxJoy: HTMLInputElement = document.getElementById(
  "checkbox-joy"
) as HTMLInputElement;
checkboxJoy.addEventListener("change", (e) => {
  e.preventDefault();
  toggleJoy(checkboxJoy);
});

// checkbox time
let checkboxTime: HTMLInputElement = document.getElementById(
  "checkbox-time"
) as HTMLInputElement;
checkboxTime.addEventListener("change", (e) => {
  e.preventDefault();
  toggleTime(checkboxTime);
});

// checkbox invisibility
let checkboxInvisibility: HTMLInputElement = document.getElementById(
  "checkbox-invisibility"
) as HTMLInputElement;
checkboxInvisibility.addEventListener("change", (e) => {
  e.preventDefault();
  toggleInvisibility(checkboxInvisibility);
});


// resets filter when reloading browser
window.addEventListener("load", (e) => {
  checkboxSmall.checked = false;
  checkboxMedium.checked = false;
  checkboxLarge.checked = false;
  checkboxHealing.checked = false;
  checkboxMana.checked = false;
  checkboxStamina.checked = false;
  checkboxPoison.checked = false;
  checkboxJoy.checked = false;
  checkboxTime.checked = false;
  checkboxInvisibility.checked = false;
});
