import { getUserCartFromLS, putUserCartInLS } from "../localStorage";
import { CartProductTemplate } from "../models/CartProductTemplate";
import { changeQuantity } from "../shoppingCartChanges";
import { sumTotalPrice } from "../totalAmount";

let userCartWidget: HTMLDivElement = document.getElementById(
  "user-cart__container"
) as HTMLDivElement;

// Toggles usercart widget and also makes hamburgermenu invisible
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
}

// creates html for products in shoppingcart in usercartwidget
export function renderUserCartinWidget() {
  let userCartInWidget: CartProductTemplate[] = getUserCartFromLS();
  userCartWidget.innerHTML = "";
  console.log("usercart was updated");
  if (userCartInWidget.length === 0) {
    let emptyCart = document.createElement("div");
    emptyCart.classList.add("user-cart-item__container");
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

      //Create container for image
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container");
      userItemContainer.appendChild(imgContainer);

      //Creates element for item image
      let userItemImg = document.createElement("img");
      userItemImg.classList.add("user-cart-item__image");
      userItemImg.src = userCartInWidget[i].product.image;
      userItemImg.alt = "Picture of product";
      imgContainer.appendChild(userItemImg);

      //Create container for name
      let nameContainer = document.createElement("div");
      nameContainer.classList.add("name-container");
      userItemContainer.appendChild(nameContainer);

      //Creates element for item name
      let userItemName = document.createElement("p");
      userItemName.classList.add("user-cart-item-name");
      userItemName.innerHTML = userCartInWidget[i].product.name;
      nameContainer.appendChild(userItemName);

      //Creates container for quantity, price and remove btn
      let productChangeContainer = document.createElement("div");
      productChangeContainer.classList.add("product-change-container");
      userItemContainer.appendChild(productChangeContainer);

      //Creates input for quantity
      let productQuantityInput = document.createElement("input");
      productQuantityInput.type = "number";
      productQuantityInput.id = "productQuantityCartWidget";
      productQuantityInput.value = userCartInWidget[i].quantity.toString();
      productChangeContainer.appendChild(productQuantityInput);

      //Creates element for item price
      let userItemPrice = document.createElement("p");
      userItemPrice.classList.add("user-cart-item-price");
      userItemPrice.innerHTML =
        userCartInWidget[i].product.price.toString() + "G";
      productChangeContainer.appendChild(userItemPrice);

      //Creates Remove button
      let userItemRemoveBtn = document.createElement("button");
      userItemRemoveBtn.classList.add("user-cart-item__remove-btn");
      userItemRemoveBtn.innerHTML = `<span class="material-symbols-rounded">
    delete
    </span>`;
      productChangeContainer.appendChild(userItemRemoveBtn);

      // Creates AddEventListener for changing qauntity
      productQuantityInput.addEventListener("change", () => {
        changeQuantity(
          i,
          userCartInWidget[i],
          productQuantityInput.value,
          userCartInWidget
        );
        putUserCartInLS(userCartInWidget);
      });

      userItemRemoveBtn.addEventListener("click", () => {
        removeItemfromUserCart(userCartInWidget[i], i, userCartInWidget);
      });
    }

    // Creates container for checkoutbutton in usercart
    const checkoutButtonContainer = document.createElement("div");
    checkoutButtonContainer.classList.add(
      "user-cart-item__container",
      "checkout-btn-container"
    );
    userCartWidget.appendChild(checkoutButtonContainer);

    //Creates link to checkout
    const checkoutLink = document.createElement("a");
    checkoutLink.classList.add("checkout-link");
    if (window.location.href.indexOf("index") > -1) {
      checkoutLink.setAttribute("href", "./html/checkout.html");
    } else {
      checkoutLink.setAttribute("href", "./checkout.html");
    }
    checkoutLink.innerHTML = `CHECKOUT`;
    checkoutButtonContainer.appendChild(checkoutLink);

    //Creates usercart total
    let usercartTotal = document.createElement("div");
    usercartTotal.classList.add("checkout-total");
    let usercartTotalSum = 0;

    for (let i = 0; i < userCartInWidget.length; i++) {
      usercartTotalSum += userCartInWidget[i].product.price;
    }
    usercartTotal.innerHTML = usercartTotalSum.toString() + "G";
    checkoutButtonContainer.appendChild(usercartTotal);
  }
}

export function removeUserCartHtml() {
  userCartWidget.innerHTML = "";
}

// removes deleted products from shoppingbag and updates localstorage
export function removeItemfromUserCart(
  userCartItem: CartProductTemplate,
  userCartPosition: number,
  userCartInWidget: CartProductTemplate[]
) {
  userCartInWidget.splice(userCartPosition, 1);
  putUserCartInLS(userCartInWidget);
  renderUserCartinWidget();
}
