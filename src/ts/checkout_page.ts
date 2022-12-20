//modal function

var modal = document.getElementById("checkoutModal") as HTMLDivElement;
var checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
var closeCross = document.getElementsByClassName(
  "modalContent__close"
)[0] as HTMLSpanElement;

function startEventlisteners() {
  checkoutBtn.addEventListener("click", () => {
    // changeModalVisability();
    console.log("I've been clicked");
    //lägg till function för att tömma varukorg
    //lägg till funktion för att skapa om html
  });
  closeCross.addEventListener("click", () => {
    changeModalVisability();
  });
}
startEventlisteners();

function changeModalVisability() {
  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}
