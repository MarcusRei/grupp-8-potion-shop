/* const testProducts = [
  { name: "Small potion", price: "100" },
  { name: "Medium potion", price: "200" },
]; */

const testProducts = [{ name: "Small potion", price: "100" }];

renderProductlist();

/* let addToCartBtn: HTMLButtonElement = document.querySelector(
  ".product__info-buy-btn"
) as HTMLButtonElement;

addToCartBtn.addEventListener("click", addProductToCart); */

function addProductToCart() {
  console.log("Tillagd");
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
    productImg.src = "../assets/images/placeholder_square.jpg";
    productImg.alt = "Picture of product";
    document.querySelector(".product__container")?.appendChild(productImg);

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
    productPrice.innerHTML = testProducts[i].price;
    productinfoTextContainer.appendChild(productPrice);

    /* productInfo.querySelector(".product__container")?.appendChild(productInfo);
    let productName: HTMLParagraphElement = document.querySelector(
      ".product__info-name"
    ) as HTMLParagraphElement; */

    let productInputs = document.createElement("div");
    productInputs.classList.add("product__inputs");
    productinfoTextContainer.appendChild(productInputs);

    let productAmount = document.createElement("input");
    productAmount.type = "number";
    productAmount.value = "1";
    productAmount.classList.add("product__info-amount");
    productInputs.appendChild(productAmount);

    let productAddToCartBtn = document.createElement("button");
    productAddToCartBtn.classList.add("product__info-buy-btn");
    productAddToCartBtn.innerText = "Add to cart";
    productInputs.appendChild(productAddToCartBtn);
  }
}
