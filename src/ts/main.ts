// import { startModalFunctionality } from "./checkout_page";


// hamburgermenu button

document.getElementById("hamburgerButton")?.addEventListener("click", ()=> {
    toggleHamburgerMenu ();
});

// hamburgermenu toggle
function toggleHamburgerMenu () {

    const mobileMenu = document.getElementById("mobilenav") as HTMLUListElement;
    const closeIcon = document.getElementById("closeIcon") as HTMLSpanElement;
    const menuIcon = document.getElementById("menuIcon") as HTMLSpanElement;

    if(mobileMenu.classList.contains("showMenu")) {
        mobileMenu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
      } else {
        mobileMenu.classList.add("showMenu");
        closeIcon.style.display = "flex";
        menuIcon.style.display = "none";
      }
    }
