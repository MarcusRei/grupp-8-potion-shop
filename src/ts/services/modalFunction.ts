import {
  changeModalVisability,
  emptyShoppingCart,
  showShoppingCart,
} from "../checkout";

//modal function
export function startModalFunctionality() {
  var checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  var closeCross = document.getElementsByClassName(
    "modalContent__close"
  )[0] as HTMLSpanElement;

  checkoutBtn.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got clicked");
    setTimeout(() => {
      emptyShoppingCart();
      showShoppingCart();
    }, 50);
  });
  closeCross.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got closed");
  });
}
