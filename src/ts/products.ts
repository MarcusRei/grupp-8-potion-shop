import { putUserCartInLS } from "./localStorage";
import { products } from "./models/ProductList";
import { ProductTemplate } from "./models/ProductTemplate";
import { toggleFilterMenu } from "./services/filter";
import { addProductToCart, changeQuantity } from "./shoppingCartChanges";

(document.querySelector("#products") as HTMLBodyElement).onload = function () {
  console.log("products body onload Fn started");
  renderProductlist(products);
};
let productsPageUserCart: ProductTemplate[] = [];
console.log(productsPageUserCart);

export function renderProductlist(listToRender: ProductTemplate[]) {
  (document.querySelector(".product__list") as HTMLElement).innerHTML = "";
  for (let i = 0; i < listToRender.length; i++) {
    //Creates container for a product
    let productContainer = document.createElement("div");
    productContainer.classList.add("product__container");
    document.querySelector(".product__list")?.appendChild(productContainer);

    //Creates element for product image
    let productImg = document.createElement("img");
    productImg.classList.add("product__container-image");
    productImg.src = listToRender[i].image;
    productImg.alt = "Picture of product";
    productContainer.appendChild(productImg);

    //Creates element for product__info
    let productInfo = document.createElement("div");
    productInfo.classList.add("product__info");
    productContainer.appendChild(productInfo);

    //Creates element for inner text container
    let productinfoTextContainer = document.createElement("div");
    productinfoTextContainer.classList.add("product__info-text-container");
    productInfo.appendChild(productinfoTextContainer);

    //Creates element for product name
    let productName = document.createElement("p");
    productName.classList.add("product__info-name");
    productName.innerHTML = listToRender[i].name;
    productinfoTextContainer.appendChild(productName);

    //Creates element for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("product__info-price");
    productPrice.innerHTML = listToRender[i].price.toString() + "G"; //la till toString, men vet inte om det funkar just nu
    productinfoTextContainer.appendChild(productPrice);

    //Creates inputs container
    let productInputs = document.createElement("div");
    productInputs.classList.add("product__inputs");
    productinfoTextContainer.appendChild(productInputs);

    //Creates input field
    let productAmount = document.createElement("input");
    productAmount.setAttribute("id", `add-${listToRender[i].name}-input`);
    productAmount.type = "number";
    productAmount.value = "1";
    productAmount.classList.add("product__info-amount");
    productInputs.appendChild(productAmount);

    //Creates "add to cart" button
    let productAddToCartBtn = document.createElement("button");
    productAddToCartBtn.setAttribute("id", `add-${products[i].name}-button`);
    productAddToCartBtn.classList.add("product__info-buy-btn");
    productAddToCartBtn.innerText = "Add to cart";
    productInputs.appendChild(productAddToCartBtn);

    let productButton: HTMLButtonElement = document.getElementById(
      `add-${listToRender[i].name}-button`
    ) as HTMLButtonElement;

    //Adds eventlistener
    productButton.addEventListener("click", () => {
      // let newQuantity = productAmount.value;
      // original addProductToCart function
      addProductToCart(
        productsPageUserCart,
        listToRender[i],
        productAmount.value
      );

      // //trial and error addProductToCart function
      // addProductToCart(
      //   products,
      //   i,
      //   products[i],
      //   newQuantity,
      //   productsPageUserCart
      // );
      //changeQuantity(i, products[i], productAmount.value, productsPageUserCart);
      putUserCartInLS(productsPageUserCart);
    });
  }
}

// //Put in LS
// export function putUserCartInLS(userProducts: ProductTemplate[]) {
//   localStorage.setItem("userCart", JSON.stringify(userProducts));
// }

// // Get from LS
// export function getUserCartFromLS() {
//   let userCartLS = JSON.parse(localStorage.getItem("userCart")!);
//   console.log(userCartLS);
//   return userCartLS;
// }

// export function changeQuantityInProducts(
//   listPosition: number,
//   product: ProductTemplate,
//   value: string,
//   list: ProductTemplate[]
// ) {
//   for (let i = 0; i < list.length; i++) {
//     if (i === listPosition) {
//       product.quantity = Number(value);
//       console.log(list);
//     }
//   }
// }

let filterBtn: HTMLButtonElement = document.getElementById(
  "filter-btn"
) as HTMLButtonElement;
filterBtn.addEventListener("click", () => {
  toggleFilterMenu();
});
