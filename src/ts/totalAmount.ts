import { userCart } from "./checkout";

// summerar priset på varor i varukorgen
export function sumTotalPrice() {
  let sum: number = 0;
  let sumCheckout = document.getElementById(
    "sumOfShoppingCart"
  ) as HTMLParagraphElement;
  let sumModal = document.getElementById(
    "modalContent__sum"
  ) as HTMLParagraphElement;
  for (let i = 0; i < userCart.length; i++) {
    // let amount: number = 1;
    if (userCart.length > 1) {
      sum = sum + userCart[i].price * userCart[i].quantity;
    } else {
      sum = 0;
    }
  }

  // skriver ut total priset i DOM
  let totalPrice: string = sum.toString();
  // if (sum === 0) {
  //   sumCheckout.innerText = "0 G"; //denna funkar
  //   sumModal.innerText = "0 G"; //denna funkar inte
  // }

  sumCheckout.innerText = totalPrice + " G";
  sumModal.innerText = "Att debiteras: " + totalPrice + " G";
}
