import { getUserCartFromLS, putUserCartInLS } from "../localStorage";
import { ProductTemplate } from "../models/ProductTemplate";

// addEventListenern för userCartBtn ligger nu i main.ts
// eftersom den behöver skapas på alla sidor när sidorna laddas och main.ts är länkade till alla sidor

// let userCartInWidget: ProductTemplate[] = getUserCartFromLS();

let userCartWidget: HTMLDivElement = document.getElementById(
  "user-cart__container"
) as HTMLDivElement;


// shows and hides usercartwidget and also makes hamburgermenu invisible
export function toggleUserCartWidget() {
  const mobileMenu = document.getElementById("mobilenav") as HTMLUListElement;
  const closeIcon = document.getElementById("closeIcon") as HTMLSpanElement;
  const menuIcon = document.getElementById("menuIcon") as HTMLSpanElement;

  if (mobileMenu.classList.contains("showMenu")) {
    mobileMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "flex";

    userCartWidget.classList.remove("user-cart__invisible");
    userCartWidget.classList.add("user-cart__visible");
  } else {
    
    if (userCartWidget.classList.contains("user-cart__visible")) {

      userCartWidget.classList.remove("user-cart__visible");
      userCartWidget.classList.add("user-cart__invisible");

    } else {
      userCartWidget.classList.remove("user-cart__invisible");
      userCartWidget.classList.add("user-cart__visible");
    }
  }


  // if (userCartWidget.classList.contains("user-cart__invisible")) {
  //   userCartWidget.classList.replace(
  //     "user-cart__invisible",
  //     "user-cart__visible"
  //   );

  //   // userCartInWidget = getUserCartFromLS();
  //   // renderUserCartWidget();

  //   console.log("userCart is open");
  // } else {
  //   userCartWidget.className = "user-cart__invisible";

  //   // removeUserCartHtml();

  //   console.log("userCart is closed");
  // }
}

// creates html for products in shoppingcart in usercartwidget
export function renderUserCartinWidget() {
  let userCartInWidget: ProductTemplate[] = getUserCartFromLS();
  userCartWidget.innerHTML = "";
  console.log("usercart was updated");
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
        removeItemfromUserCart(userCartInWidget[i], i, userCartInWidget);
      });
    }
  }
}

export function removeUserCartHtml() {
  userCartWidget.innerHTML = "";
}

// removes deleted products from shoppingbag and updates localstorage
export function removeItemfromUserCart(
  userCartItem: ProductTemplate,
  userCartPosition: number,
  userCartInWidget: ProductTemplate[]
) {
  console.log("Du vill ta bort " + userCartItem.name);
  userCartInWidget.splice(userCartPosition, 1);
  console.log(userCartInWidget);
  putUserCartInLS(userCartInWidget);
  renderUserCartinWidget();
}
