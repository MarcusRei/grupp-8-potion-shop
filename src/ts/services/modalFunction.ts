import { emptyShoppingCart, showShoppingCart, userCart } from "../checkout";



//modal function

export function startModalFunctionality() {
  changeModalVisability();

// addEventListener för checkoutBtn som låg här har flyttats till roten i checkout.ts

    console.log("I got clicked");
    let modalContentText = document.getElementById(
      "modalContent__text"
    ) as HTMLParagraphElement;
    let sumModal = document.getElementById(
      "modalContent__sum"
    ) as HTMLParagraphElement;
    if (userCart.length === 0) {
      modalContentText.innerText = "Din varukorg är tom";

// total beloppet för checkout sidan ändras nu istället i funktionen sumTotalPrice
      
      sumModal.innerText = "0 G";
    } else {
      modalContentText.innerText = "Ditt köp har gått igenom";

      setTimeout(() => {
        emptyShoppingCart();
        showShoppingCart();
      }, 50);
    }
  
// addEventListener för krysset som låg här har flyttats till roten i checkout.ts
}

export function changeModalVisability() {
  let modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}
