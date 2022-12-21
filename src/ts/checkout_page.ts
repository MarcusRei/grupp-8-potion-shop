import { ProductTemplate } from "./models/ProductTemplate";
import placeholder_square from "../assets/images/placeholder_square.jpg";

//modal function
export function startModalFunctionality() {
  var checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  var closeCross = document.getElementsByClassName(
    "modalContent__close"
  )[0] as HTMLSpanElement;

  checkoutBtn.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got clicked");
    //lägg till function för att tömma varukorg
    //lägg till funktion för att skapa om html
  });
  closeCross.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got closed");
  });
}

function changeModalVisability() {
  var modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}

//varukorg
export const shoppingCartProducts: ProductTemplate[] = [
  {
    name: "Small healing potion",
    price: 100,
    image: placeholder_square,
    size: "small",
    type: "healing",
  },
  {
    name: "Medium healing potion",
    price: 200,
    image: placeholder_square,
    size: "medium",
    type: "healing",
  },
  {
    name: "Large healing potion",
    price: 300,
    image: placeholder_square,
    size: "large",
    type: "healing",
  },
];
console.log(shoppingCartProducts);
//skapa html för varukorg
function showShoppingCart() {
  let shoppingCartSection = document.getElementById(
    "shoppingCart"
  ) as HTMLElement;
  console.log("function started");
  shoppingCartSection.innerHTML = "";

  for (let i = 0; i < shoppingCartProducts.length; i++) {
    console.log("loop started");
    //create article for product
    let itemRow = document.createElement("article");
    itemRow.classList.add("itemRow");
    shoppingCartSection.appendChild(itemRow);

    //create img for product img
    let productImg = document.createElement("img");
    productImg.classList.add("itemRow__Img");
    productImg.alt = shoppingCartProducts[i].name;
    productImg.src = shoppingCartProducts[i].image;
    itemRow.appendChild(productImg);

    //create ptag for productname
    let productName = document.createElement("p");
    productName.classList.add("itemRow__productName");
    productName.innerText = shoppingCartProducts[i].name;
    itemRow.appendChild(productName);

    //create ptag for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("itemRow__productPrice");
    productPrice.innerText = shoppingCartProducts[i].price.toString();
    productPrice.innerText += " :-";
    itemRow.appendChild(productPrice);

    //create label for quantity input
    let productLabel = document.createElement("label");
    //productLabel.htmlFor = "productQuantity"; //vet inte om denna blir rätt
    productLabel.id = "quantityContainer";
    itemRow.appendChild(productLabel);

    //create input for quantity
    let productQuantityInput = document.createElement("input");
    productQuantityInput.type = "number";
    productQuantityInput.id = "productQuantity";
    productLabel.appendChild(productQuantityInput);

    //create btn container for btns
    let btnContainer = document.createElement("div");
    btnContainer.classList.add("itemRow__btnContainer");
    productLabel.appendChild(btnContainer);

    //create btn for adding quantity
    let btnAddQuantity = document.createElement("button");
    btnAddQuantity.classList.add("ItemRow__changeQuantityBtn"),
      btnAddQuantity.classList.add("addQuantity"),
      (btnAddQuantity.innerText = "+");
    btnContainer.appendChild(btnAddQuantity);

    //create btn for reducing quantity
    let btnReduceQuantity = document.createElement("button");
    btnReduceQuantity.classList.add("itemRow__changeQuantityBtn"),
      btnReduceQuantity.classList.add("reduceQuantity"),
      (btnReduceQuantity.innerText = "-");
    btnContainer.appendChild(btnReduceQuantity);
  }
}
showShoppingCart();
