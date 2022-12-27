import { renderUserCartinWidget, toggleUserCartWidget } from "./services/userCartWidget";

// usercart button
let userCartBtn: HTMLButtonElement = document.querySelector(
  ".shoppingcart-container"
) as HTMLButtonElement;

userCartBtn.addEventListener("click", () => {
  toggleUserCartWidget();
  renderUserCartinWidget();
  console.log("user cart was clicked");
});


// hamburgermenu button
document.getElementById("hamburgerButton")?.addEventListener("click", () => {
  toggleHamburgerMenu();
});

// hamburgermenu toggle
function toggleHamburgerMenu() {
  const mobileMenu = document.getElementById("mobilenav") as HTMLUListElement;
  const closeIcon = document.getElementById("closeIcon") as HTMLSpanElement;
  const menuIcon = document.getElementById("menuIcon") as HTMLSpanElement;
  let usercartContainer = document.getElementById("user-cart__container") as HTMLDivElement;

  // if (mobileMenu.classList.contains("showMenu")) {
  //   mobileMenu.classList.remove("showMenu");
  //   closeIcon.style.display = "none";
  //   menuIcon.style.display = "flex";
  // } else {
  //   mobileMenu.classList.add("showMenu");
  //   closeIcon.style.display = "flex";
  //   menuIcon.style.display = "none";
  // }

// toggle usercartwidget and hamburgermenu if hamburgermenu is clicked
  if (usercartContainer.classList.contains("user-cart__visible")) {
    
    usercartContainer.classList.remove("user-cart__visible");
    usercartContainer.classList.add("user-cart__invisible");

    mobileMenu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";

  } else {

        if (mobileMenu.classList.contains("showMenu")) {

      mobileMenu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "flex";

    } else {

      mobileMenu.classList.add("showMenu");
      closeIcon.style.display = "flex";
      menuIcon.style.display = "none";

    } 
  }
}

// renderUserCartinWidget();