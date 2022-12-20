renderProductlist();

/* let addToCartBtn: HTMLButtonElement = document.querySelector(
  ".product__info-buy-btn"
) as HTMLButtonElement;

addToCartBtn.addEventListener("click", addProductToCart); */

function addProductToCart() {
  console.log("Tillagd");
}

function renderProductlist() {
  let productContainer = document.createElement("div");
  productContainer.classList.add("product__container");
  document.querySelector(".product__list")?.appendChild(productContainer);

  let productImg = document.createElement("img");
  productImg.classList.add("product__container-image");
  productImg.src = "../assets/images/placeholder_square.jpg";
  productImg.alt = "Picture of product";
  document.querySelector(".product__container")?.appendChild(productImg);

  let productInfo = document.createElement("div");
  productInfo.classList.add("product__info");
  productInfo.innerHTML = `
  <div class="product__info-text-container">
  <p class="product__info-name">Small healing potion</p>
  <p class="product__info-price">100:-</p>
</div>`;
  document.querySelector(".product__container")?.appendChild(productInfo);

  let productInputs = document.createElement("div");
  productInfo.classList.add("product__inputs");
  productInputs.innerHTML = `<input type="number" class="product__info-amount" />
  <button id="hello" class="product__info-buy-btn">
    Add to cart
  </button>`;
  document.querySelector(".product__container")?.appendChild(productInputs);
}
