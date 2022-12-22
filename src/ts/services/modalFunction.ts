import { emptyShoppingCart, showShoppingCart } from "../checkout";

//modal function
export function startModalFunctionality() {
  let checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  let closeCross = document.getElementsByClassName(
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

export function changeModalVisability() {
  var modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}
