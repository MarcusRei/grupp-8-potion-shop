import { getUserCartFromLS, putUserCartInLS } from "../localStorage";
import { ProductTemplate } from "../models/ProductTemplate";

let userCartBtn: HTMLButtonElement = document.querySelector(
  ".shoppingcart-container"
) as HTMLButtonElement;

userCartBtn.addEventListener("click", () => {
  toggleUserCartWidget();
});

let userCartInWidget: ProductTemplate[] = getUserCartFromLS();

let userCartWidget: HTMLDivElement = document.getElementById(
  "user-cart__container"
) as HTMLDivElement;

export function toggleUserCartWidget() {
  if (userCartWidget.classList.contains("user-cart__invisible")) {
    userCartWidget.classList.replace(
      "user-cart__invisible",
      "user-cart__visible"
    );

    userCartInWidget = getUserCartFromLS();
    renderUserCartinWidget();

    console.log("userCart is open");
  } else {
    userCartWidget.className = "user-cart__invisible";

    removeUserCartHtml();

    console.log("userCart is closed");
  }
}

export function renderUserCartinWidget() {
  if (userCartInWidget.length === 0) {
    let emptyCart = document.createElement("div");
    emptyCart.classList.add("empty-cart");
    userCartWidget.appendChild(emptyCart);

    let emptyCartText = document.createElement("h4");
    emptyCartText.classList.add("empty-cart-text");
    emptyCartText.innerHTML = "Your cart is currently empty";
    emptyCart.appendChild(emptyCartText);
  } else {
    for (let i = 0; i < userCartInWidget.length; i++) {
      //creates container for individual item
      let userItemContainer = document.createElement("div");
      userItemContainer.classList.add("user-cart-item__container");
      userCartWidget.appendChild(userItemContainer);

      //Creates element for item image
      let userItemImg = document.createElement("img");
      userItemImg.classList.add("user-cart-item__image");
      userItemImg.src = userCartInWidget[i].image;
      userItemImg.alt = "Picture of product";
      userItemContainer.appendChild(userItemImg);

      //Creates element for item name
      let userItemName = document.createElement("p");
      userItemName.classList.add("user-cart-item-name");
      userItemName.innerHTML = userCartInWidget[i].name;
      userItemContainer.appendChild(userItemName);

      //Creates element for item quantity
      let userItemQuantity = document.createElement("p");
      userItemQuantity.classList.add("user-cart-item-quantity");
      userItemQuantity.innerHTML =
        "x" + userCartInWidget[i].quantity.toString();
      userItemContainer.appendChild(userItemQuantity);

      //Creates element for item price
      let userItemPrice = document.createElement("p");
      userItemPrice.classList.add("user-cart-item-price");
      userItemPrice.innerHTML = userCartInWidget[i].price.toString() + "G";
      userItemContainer.appendChild(userItemPrice);

      //Creates Remove button
      let userItemRemoveBtn = document.createElement("button");
      userItemRemoveBtn.classList.add("user-cart-item__remove-btn");
      userItemRemoveBtn.innerHTML = `<span class="material-symbols-rounded">
    delete
    </span>`;
      userItemContainer.appendChild(userItemRemoveBtn);

      userItemRemoveBtn.addEventListener("click", () => {
        removeItemfromUserCart(userCartInWidget[i], i);
      });
    }
  }
}

export function removeUserCartHtml() {
  userCartWidget.innerHTML = "";
}

export function removeItemfromUserCart(
  userCartItem: ProductTemplate,
  userCartPosition: number
) {
  console.log("Du vill ta bort " + userCartItem.name);
  userCartInWidget.splice(userCartPosition, 1);
  console.log(userCartInWidget);
  removeUserCartHtml();
  renderUserCartinWidget();
  putUserCartInLS(userCartInWidget);
}
