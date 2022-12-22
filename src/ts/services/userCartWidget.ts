let userCartBtn: HTMLButtonElement = document.querySelector(
  ".shoppingcart-container"
) as HTMLButtonElement;

userCartBtn.addEventListener("click", () => {
  openUserCart();
});

let userCartWidget: HTMLDivElement = document.getElementById(
  "user-cart__container"
) as HTMLDivElement;

export function openUserCart() {
  console.log("Opens user cart");

  if (userCartWidget.classList.contains("user-cart__invisible")) {
    userCartWidget.classList.replace(
      "user-cart__invisible",
      "user-cart__visible"
    );
  } else {
    userCartWidget.className = "user-cart__invisible";
  }
}
