import { userCart } from "./checkout";

// Sums up the price of all the items in the usercart
export function sumTotalPrice() {
  let sum: number = 0;
  let sumCheckout = document.getElementById(
    "sumOfShoppingCart"
  ) as HTMLParagraphElement;

  let sumModal = document.getElementById(
    "modalContent__sum"
  ) as HTMLParagraphElement;

  for (let i = 0; i < userCart.length; i++) {
    if (userCart.length >= 1) {
      sum = sum + userCart[i].product.price * userCart[i].quantity;
    } else {
      sum = 0;
    }
  }

  // Presents the total in checkout and in the payment modal
  let totalPrice: string = sum.toString();
  sumCheckout.innerText = totalPrice + " G";
  sumModal.innerText = "Your total: " + totalPrice + " G";

}
