import { getUserCartFromLS, putUserCartInLS } from "./localStorage";
import { CartProductTemplate } from "./models/CartProductTemplate";
import { ProductTemplate } from "./models/ProductTemplate";
import {
  changeModalVisability,
  startModalFunctionality,
} from "./services/modalFunction";
import { changeQuantity, deleteFromCart } from "./shoppingCartChanges";
import { sumTotalPrice } from "./totalAmount";

(document.querySelector("#checkout-body") as HTMLBodyElement).onload =
  function () {
    console.log("checkout-body onload Fn started");
    showShoppingCart();

    // checkoutbutton
    let checkoutBtn = document.getElementById(
      "checkoutBtn"
    ) as HTMLButtonElement;

    checkoutBtn.addEventListener("click", () => {
      startModalFunctionality();
    });

    // krysset i modal
    let closeCross = document.getElementsByClassName(
      "modalContent__close"
    )[0] as HTMLSpanElement;

    closeCross.addEventListener("click", () => {
      changeModalVisability();
    });
  };

export let userCart: CartProductTemplate[] = getUserCartFromLS();

console.log("Checkout " + userCart);
console.log(userCart);

//skapa html för varukorg
export function showShoppingCart() {
  console.log("showShoppingCart started");
  (document.querySelector("#shoppingCart") as HTMLElement).innerText =
    "You have not selected any potions";

  let sumCheckout = document.getElementById(
    "sumOfShoppingCart"
  ) as HTMLParagraphElement;
  sumCheckout.innerText = "0 G";
  let cartLength = userCart.length;
  if (cartLength !== 0) {
    (document.querySelector("#shoppingCart") as HTMLElement).innerText = "";
    for (let i = 0; i < userCart.length; i++) {
      console.log("loop started");
      //create article for product
      let itemRow = document.createElement("article");
      itemRow.classList.add("itemRow");
      document.querySelector("#shoppingCart")?.appendChild(itemRow);

      //Create container for image
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("checkout-img-container");
      itemRow.appendChild(imgContainer);

      //create img for product img
      let productImg = document.createElement("img");
      productImg.classList.add("itemRow__Img");
      productImg.alt = userCart[i].product.name;
      productImg.src = userCart[i].product.image;
      imgContainer.appendChild(productImg);

      //Create container for name
      let nameContainer = document.createElement("div");
      nameContainer.classList.add("checkout-name-container");
      itemRow.appendChild(nameContainer);

      //create ptag for productname
      let productName = document.createElement("p");
      productName.classList.add("itemRow__productName");
      productName.innerText = userCart[i].product.name;
      nameContainer.appendChild(productName);

      //Create container for quantity, price and remove btn
      let productChangeContainer = document.createElement("div");
      productChangeContainer.classList.add("checkout-product-change-container");
      itemRow.appendChild(productChangeContainer);

      //create ptag for product price
      let productPrice = document.createElement("p");
      productPrice.classList.add("itemRow__productPrice");
      productPrice.innerText = userCart[i].product.price.toString();
      productPrice.innerText += " G";
      productChangeContainer.appendChild(productPrice);

      //create label for quantity input
      let productLabel = document.createElement("label");
      productLabel.setAttribute("for", "productQuantity");
      productLabel.id = "quantityContainer";
      productChangeContainer.appendChild(productLabel);

      //create input for quantity
      let productQuantityInput = document.createElement("input");
      productQuantityInput.type = "number";
      productQuantityInput.id = "productQuantity";
      productQuantityInput.value = userCart[i].quantity.toString();
      productChangeContainer.appendChild(productQuantityInput);

      // //create checkBtn for submiting changes to quantity
      // let deleteBtn = document.createElement("button");
      // deleteBtn.innerHTML = "&times;";
      // deleteBtn.classList.add("itemRow__deleteQuantityBtn");
      // productChangeContainer.appendChild(deleteBtn);
      //Creates Remove button
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("user-cart-item__remove-btn");
      deleteBtn.innerHTML = `<span class="material-symbols-rounded">
delete
</span>`;
      productChangeContainer.appendChild(deleteBtn);

      //eventListener for adding more of a product(inputValue)
      productQuantityInput.addEventListener("change", () => {
        changeQuantity(i, userCart[i], productQuantityInput.value, userCart);
        showShoppingCart();
        putUserCartInLS(userCart);
      });
      deleteBtn.addEventListener("click", () => {
        deleteFromCart(i, userCart);
        showShoppingCart();
        putUserCartInLS(userCart);
      });
      sumTotalPrice();
    }
  }

  // har tagit bort anropet till startModalFunctionality den anropas istället när man trycker på knappen checkout
}

// export function changeQuantity(
//   listPosition: number,
//   product: ProductTemplate,
//   value: string
// ) {
//   for (let i = 0; i < userCart.length; i++) {
//     if (i === listPosition) {
//       product.quantity = Number(value);
//       console.log(userCart);
//     }
//   }
//   showShoppingCart();
//   putUserCartInLS(userCart); // la till den här funktionen så att LS uppdateras när man ändrar på quantity i checkout
// }

// export function emptyShoppingCart() {
//   console.log(userCart);
//   for (let i = 0; i < userCart.length; i++) {
//     console.log(userCart.length);
//     let listLength = userCart.length;
//     if (i < listLength) {
//       userCart.splice(i, listLength);
//     }
//   }
//   console.log(userCart);
// }
