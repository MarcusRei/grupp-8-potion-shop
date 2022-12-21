import { products } from "./models/ProductList";
import { ProductTemplate } from "./models/ProductTemplate";

renderProductlist();

let productsPageUserCart: ProductTemplate[] = [];

function addProductToCart(product: ProductTemplate) {
  productsPageUserCart.push(product);
  console.log(productsPageUserCart);
  putUserCartInLS(productsPageUserCart);
}

function renderProductlist() {
  for (let i = 0; i < products.length; i++) {
    //console.log(products);

    //Creates container for a product
    let productContainer = document.createElement("div");
    productContainer.classList.add("product__container");
    document.querySelector(".product__list")?.appendChild(productContainer);

    //Creates image element for product
    let productImg = document.createElement("img");
    productImg.classList.add("product__container-image");
    productImg.src = products[i].image;
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
    productName.innerHTML = products[i].name;
    productinfoTextContainer.appendChild(productName);

    //Creates element for product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("product__info-price");
    productPrice.innerHTML = products[i].price.toString() + ":-"; //la till toString, men vet inte om det funkar just nu
    productinfoTextContainer.appendChild(productPrice);

    //Creates inputs container
    let productInputs = document.createElement("div");
    productInputs.classList.add("product__inputs");
    productinfoTextContainer.appendChild(productInputs);

    //Creates input field
    let productAmount = document.createElement("input");
    productAmount.type = "number";
    productAmount.value = "1";
    productAmount.classList.add("product__info-amount");
    productInputs.appendChild(productAmount);

    //Creates  "add to cart" button
    let productAddToCartBtn = document.createElement("button");
    productAddToCartBtn.setAttribute("id", `add-${products[i].name}-button`);
    productAddToCartBtn.classList.add("product__info-buy-btn");
    productAddToCartBtn.innerText = "Add to cart";
    productInputs.appendChild(productAddToCartBtn);

    let productButton: HTMLButtonElement = document.getElementById(
      `add-${products[i].name}-button`
    ) as HTMLButtonElement;

    //Adds eventlistener
    productButton.addEventListener("click", () => {
      addProductToCart(products[i]);
    });
  }
}

function putUserCartInLS(userProducts: ProductTemplate[]) {
  localStorage.setItem("userCart", JSON.stringify(userProducts));
}

export function getUserCartFromLS() {
  let userCartFromLS = JSON.parse(localStorage.getItem("userCart") || "{}");
  return;
}

getUserCartFromLS();
