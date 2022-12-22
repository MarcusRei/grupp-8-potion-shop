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
    let amount: number = 1;
    if (amount > 1) {
      sum = sum + userCart[i].price * userCart[i].quantity;
    } else {
      sum = sum + userCart[i].price;
    }
  }

  // skriver ut total priset i DOM
  let totalPrice: string = sum.toString();
  sumCheckout.innerText = totalPrice + " G";
  sumModal.innerText = "Att debiteras: " + totalPrice + " G";
}
