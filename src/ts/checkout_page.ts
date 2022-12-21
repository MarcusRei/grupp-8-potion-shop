//modal function
export function startModalFunctionality() {
  var checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  var closeCross = document.getElementsByClassName(
    "modalContent__close"
  )[0] as HTMLSpanElement;

  checkoutBtn.addEventListener("click", () => {
    changeModalVisability();
    //lägg till function för att tömma varukorg
    //lägg till funktion för att skapa om html
  });
  closeCross.addEventListener("click", () => {
    changeModalVisability();
  });
}

function changeModalVisability() {
  var modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}
