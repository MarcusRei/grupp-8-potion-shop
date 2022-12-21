import { ProductTemplate } from "./models/ProductTemplate";

const testProducts: ProductTemplate[] = [
  {
    name: "Small potion",
    price: "100",
    image: "./assets/images/placeholder_square.jpg",
    size: "small",
  },
  {
    name: "Medium potion",
    price: "200",
    image: "/assets/images/placeholder_square.jpg",
    size: "medium",
  },
  {
    name: "Large potion",
    price: "300",
    image: "/assets/images/placeholder_square.jpg",
    size: "large",
  },
];

const testUserCart: ProductTemplate[] = [];

renderProductlist();

function addProductToCart(product: ProductTemplate) {
  console.log(product.name);
  testUserCart.push(product);
  console.log(testUserCart);
}

function renderProductlist() {
  for (let i = 0; i < testProducts.length; i++) {
    console.log(testProducts);

    //Creates container for a product
    let productContainer = document.createElement("div");
    productContainer.classList.add("product__container");
    document.querySelector(".product__list")?.appendChild(productContainer);

    //Creates image element for product
    let productImg = document.createElement("img");
    productImg.classList.add("product__container-image");
    productImg.src = testProducts[i].image;
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
    productName.innerHTML = testProducts[i].name;
    productinfoTextContainer.appendChild(productName);

    //Creates element for product price
    let productPrice = document.createElement("p");
    productName.classList.add("product__info-price");
    productPrice.innerHTML = testProducts[i].price + ":-";
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
    productAddToCartBtn.setAttribute(
      "id",
      `add-${testProducts[i].name}-button`
    );
    productAddToCartBtn.classList.add("product__info-buy-btn");
    productAddToCartBtn.innerText = "Add to cart";
    productInputs.appendChild(productAddToCartBtn);

    let productButton: HTMLButtonElement = document.getElementById(
      `add-${testProducts[i].name}-button`
    ) as HTMLButtonElement;

    //Adds eventlistener
    productButton.addEventListener("click", () => {
      addProductToCart(testProducts[i]);
    });
  }
}
