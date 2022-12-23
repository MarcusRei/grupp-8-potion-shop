import { getUserCartFromLS, putUserCartInLS } from "./localStorage";
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

export let userCart: ProductTemplate[] = getUserCartFromLS();

console.log("Checkout " + userCart);
console.log(userCart);

//skapa html för varukorg
export function showShoppingCart() {
  console.log("showShoppingCart started");
  (document.querySelector("#shoppingCart") as HTMLElement).innerHTML = "";
  let sumCheckout = document.getElementById(
    "sumOfShoppingCart"
  ) as HTMLParagraphElement;
  sumCheckout.innerText = "0 G";
  for (let i = 0; i < userCart.length; i++) {
    console.log("loop started");
    //create article for product
    let itemRow = document.createElement("article");
    itemRow.classList.add("itemRow");
    document.querySelector("#shoppingCart")?.appendChild(itemRow);

    //create img for product img
    let productImg = document.createElement("img");
    productImg.classList.add("itemRow__Img");
    productImg.alt = userCart[i].name;
    productImg.src = userCart[i].image;
    itemRow.appendChild(productImg);

    //create ptag for productname
    let productName = document.createElement("p");
    productName.classList.add("itemRow__productName");
    productName.innerText = userCart[i].name;
    itemRow.appendChild(productName);

    //create ptag for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("itemRow__productPrice");
    productPrice.innerText = userCart[i].price.toString();
    productPrice.innerText += " G";
    itemRow.appendChild(productPrice);

    //create label for quantity input
    let productLabel = document.createElement("label");
    productLabel.setAttribute("for", "productQuantity");
    productLabel.id = "quantityContainer";
    itemRow.appendChild(productLabel);

    //create input for quantity
    let productQuantityInput = document.createElement("input");
    productQuantityInput.type = "number";
    productQuantityInput.id = "productQuantity";
    productQuantityInput.value = userCart[i].quantity.toString();
    productLabel.appendChild(productQuantityInput);

    //create checkBtn for submiting changes to quantity
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.classList.add("itemRow__deleteQuantityBtn");
    productLabel.appendChild(deleteBtn);

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
