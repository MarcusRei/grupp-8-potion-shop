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

//varukorg

export const shoppingCartProducts: ProductTemplate[] = [];
console.log(shoppingCartProducts);
//skapa html för varukorg
function showShoppingCart() {
  let shoppingCartSection = document.getElementById(
    "shoppingCart"
  ) as HTMLElement;
  console.log("function started");
  //shoppingCartSection.innerHTML = "";

  for (let i = 0; i < shoppingCartProducts.length; i++) {
    console.log("loop started");
    let itemRow = document.createElement("article");
    itemRow.classList.add("itemRow");
    let productImg = document.createElement("img");
    productImg.classList.add("itemRow__Img");
    productImg.alt = shoppingCartProducts[i].name;
    productImg.src = shoppingCartProducts[i].image;
    let productName = document.createElement("p");
    productName.classList.add("itemRow__productName");
    productName.innerText = shoppingCartProducts[i].name;
    let productPrice = document.createElement("p");
    productPrice.classList.add("itemRow__productPrice");
    productPrice.innerText = shoppingCartProducts[i].price.toString();
    productPrice.innerText += " :-";
    let productLabel = document.createElement("label");
    productLabel.htmlFor = "productQuantity"; //vet inte om denna blir rätt
    productLabel.id = "quantityContainer";
    let productQuantityInput = document.createElement("input");
    productQuantityInput.type = "number";
    productQuantityInput.id = "productQuantity";
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("itemRow__btnContainer");
    let btnAddQuantity = document.createElement("button");
    btnAddQuantity.classList.add("ItemRow__changeQuantityBtn"),
      btnAddQuantity.classList.add("addQuantity"),
      (btnAddQuantity.innerText = "+");
    let btnReduceQuantity = document.createElement("button");
    btnReduceQuantity.classList.add("itemRow__changeQuantityBtn"),
      btnReduceQuantity.classList.add("reduceQuantity"),
      (btnReduceQuantity.innerText = "-");

    shoppingCartSection.appendChild(itemRow);
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
showShoppingCart();
