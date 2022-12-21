import { ProductTemplate } from "./models/ProductTemplate";
import placeholder_square from "../assets/images/placeholder_square.jpg";

export let userCart: ProductTemplate[] = [
  {
    name: "Large healing potion",
    price: 300,
    image: placeholder_square,
    size: "large",
    type: "healing",
    quantity: 1,
  },
  {
    name: "Small mana potion",
    price: 100,
    image: placeholder_square,
    size: "small",
    type: "mana",
    quantity: 1,
  },
  {
    name: "Medium mana potion",
    price: 200,
    image: placeholder_square,
    size: "medium",
    type: "mana",
    quantity: 1,
  },
];
//modal function
export function startModalFunctionality() {
  var checkoutBtn = document.getElementById("checkoutBtn") as HTMLButtonElement;
  var closeCross = document.getElementsByClassName(
    "modalContent__close"
  )[0] as HTMLSpanElement;

  checkoutBtn.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got clicked");
    setTimeout(() => {
      emptyShoppingCart();
      showShoppingCart();
    }, 50);
  });
  closeCross.addEventListener("click", () => {
    changeModalVisability();
    console.log("I got closed");
  });
}

startModalFunctionality();

function changeModalVisability() {
  var modal = document.getElementById("checkoutModal") as HTMLDivElement;

  modal.classList.toggle("modalVisible");
  modal.classList.toggle("modalInvisible");
}

console.log(userCart);
//skapa html för varukorg
function showShoppingCart() {
  let shoppingCartSection = document.getElementById(
    "shoppingCart"
  ) as HTMLElement;
  console.log("function started");
  shoppingCartSection.innerHTML = "";

  for (let i = 0; i < userCart.length; i++) {
    console.log("loop started");
    //create article for product
    let itemRow = document.createElement("article");
    itemRow.classList.add("itemRow");
    shoppingCartSection.appendChild(itemRow);

    //create img for product img
    let productImg = document.createElement("img");
    productImg.classList.add("itemRow__Img");
    productImg.alt = userCart[i].name;
    productImg.src = userCart[i].image;
    itemRow.appendChild(productImg);

    //create ptag for productname
    let productName = document.createElement("p");
    productName.classList.add("itemRow__productName");
    productName.innerText = userCart[i].name;
    itemRow.appendChild(productName);

    //create ptag for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("itemRow__productPrice");
    productPrice.innerText = userCart[i].price.toString();
    productPrice.innerText += " :-";
    itemRow.appendChild(productPrice);

    // // create ptag for quantity
    // let productQuantity = document.createElement("p");
    // productQuantity.classList.add("itemRow__productQuantity");
    // productQuantity.innerText = "x";
    // productQuantity.innerText += userCart[i].quantity.toString();
    // itemRow.appendChild(productQuantity);

    //create label for quantity input
    let productLabel = document.createElement("label");
    productLabel.setAttribute("for", "productQuantity");
    productLabel.id = "quantityContainer";
    itemRow.appendChild(productLabel);

    //create input for quantity
    let productQuantityInput = document.createElement("input");
    productQuantityInput.type = "number";
    productQuantityInput.id = "productQuantity";
    productQuantityInput.placeholder = userCart[i].quantity.toString();
    productLabel.appendChild(productQuantityInput);

    //create checkBtn for submiting changes to quantity
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&times;";
    deleteBtn.classList.add("itemRow__deleteQuantityBtn");
    productLabel.appendChild(deleteBtn);

    //eventListener for adding more of a product(inputValue)
    productQuantityInput.addEventListener("change", () => {
      addMoreOfAProduct(i, userCart[i], productQuantityInput.value);
    });
    deleteBtn.addEventListener("click", () => {
      deleteFromCart(i);
    });
  }
}
showShoppingCart();

function emptyShoppingCart() {
  console.log(userCart);
  for (let i = 0; i < userCart.length; i++) {
    console.log(userCart.length);
    let listLength = userCart.length;
    if (i < listLength) {
      userCart.splice(i, listLength);
    }
  }
}

function addMoreOfAProduct(
  listPosition: number,
  product: ProductTemplate,
  value: string
) {
  for (let i = 0; i < userCart.length; i++) {
    if (i === listPosition) {
      product.quantity = Number(value);
      console.log(userCart);
    }
  }

  showShoppingCart();
}
function deleteFromCart(listPosition: number) {
  for (let i = 0; i < userCart.length; i++) {
    if (i === listPosition) {
      userCart.splice(i, 1);
      console.log(userCart);
    }
  }
  showShoppingCart();
}
