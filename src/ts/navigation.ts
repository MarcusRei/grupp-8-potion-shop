


document.getElementById("hamburgerButton")?.addEventListener("click", ()=> {
    toggleHamburgerMenu ();
});

function toggleHamburgerMenu () {

    const menu = document.querySelector(".menu") as HTMLUListElement;
    const closeIcon = document.getElementById("closeIcon") as HTMLSpanElement;
    const menuIcon = document.getElementById("menuIcon") as HTMLSpanElement;

    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "flex";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "flex";
        menuIcon.style.display = "none";
      }
    }