import { emptyShoppingCart, showShoppingCart, userCart } from "../checkout";

//modal function
export function startModalFunctionality() {
  let checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  let closeCross = document.getElementsByClassName(
    "modalContent__close"
  )[0] as HTMLSpanElement;

  checkoutBtn.addEventListener("click", () => {
    changeModalVisability();

    console.log("I got clicked");
    let modalContentText = document.getElementById(
      "modalContent__text"
    ) as HTMLParagraphElement;
    if (userCart.length < 0) {
      modalContentText.innerText = "Din varukorg är tom";
      setTimeout(() => {
        emptyShoppingCart();
        showShoppingCart();
      }, 50);
      closeCross.addEventListener("click", () => {
        changeModalVisability();
        console.log("I got closed");
      });
    }
    modalContentText.innerText = "Ditt köp har gått igenom";
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
