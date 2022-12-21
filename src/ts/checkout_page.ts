import { ProductTemplate } from "./models/ProductTemplate";

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

//skapa html för varukorg
function showShoppingCart() {
  let shoppingCartList: ProductTemplate[] = [];

  let shoppingCart = document.getElementById("shoppingCart") as HTMLElement;
  shoppingCart.innerHTML = "";

  for (let i = 0; i < shoppingCartList.length; i++) {
    let itemRow = document.createElement("article");
    itemRow.classList.add("itemRow");
    let productImg = document.createElement("img");
    productImg.classList.add("ItemRow__Img");
    //productImg.alt = sh[i].name;
    //productImg.src = sh[i].img;
    let productName = document.createElement("p");
    productName.classList.add("ItemRow__productName");
    //productName.innerText = sh[i].name;
    let productPrice = document.createElement("p");
    productPrice.classList.add("ItemRow__productPrice");
    //productPrice.innerText = sh[i].price.toString();
    let productLabel = document.createElement("label");
    productLabel.htmlFor = "productQuantity"; //vet inte om denna blir rätt
    productLabel.id = "quantityContainer";
    let productQuantityInput = document.createElement("input");
    productQuantityInput.type = "number";
    productQuantityInput.id = "productQuantity";
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("ItemRow__btnContainer");
    let btnAddQuantity = document.createElement("button");
    btnAddQuantity.classList.add("ItemRow__changeQuantityBtn addQuantity"),
      (btnAddQuantity.innerText = "+");
    let btnReduceQuantity = document.createElement("button");
    btnReduceQuantity.classList.add(
      "ItemRow__changeQuantityBtn reduceQuantity"
    ),
      (btnReduceQuantity.innerText = "-");

    shoppingCart.appendChild(itemRow);
    itemRow.appendChild(productImg);
    itemRow.appendChild(productName);
    itemRow.appendChild(productPrice);
    itemRow.appendChild(productLabel);
    productLabel.appendChild(productQuantityInput);
    productLabel.appendChild(btnContainer);
    btnContainer.appendChild(btnAddQuantity);
    btnContainer.appendChild(btnReduceQuantity);
  }
}
