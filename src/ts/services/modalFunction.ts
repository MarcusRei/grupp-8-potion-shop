import { showShoppingCart, userCart } from "../checkout";
import { emptyShoppingCart } from "../shoppingCartChanges";

//modal function

export function startModalFunctionality() {
  changeModalVisability();

  let modalContentText = document.getElementById(
    "modalContent__text"
  ) as HTMLParagraphElement;
  let sumModal = document.getElementById(
    "modalContent__sum"
  ) as HTMLParagraphElement;
  if (userCart.length === 0) {
    modalContentText.innerText = "You don't have anything in your cart";

    sumModal.innerText = "0 G";
  } else {
    modalContentText.innerHTML = `Our ghast has taken what you owe! <br/> <br/>Your products will be sent as soon as a witch is free.`;

    setTimeout(() => {
      emptyShoppingCart(userCart);
      showShoppingCart();
    }, 50);
  }
}

export function changeModalVisability() {
  let modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modal-content--visible");
  modal.classList.toggle("modal-content--invisible");
}
