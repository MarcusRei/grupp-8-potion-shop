import { putUserCartInLS } from "./localStorage";
import { CartProductTemplate } from "./models/CartProductTemplate";
import { ProductTemplate } from "./models/ProductTemplate";

//original addProductToCart function
export function addProductToCart(
  list: CartProductTemplate[],
  product: ProductTemplate,
  value: string
) {
  if (localStorage.getItem("userCart") === null) {
    let emptyList: CartProductTemplate[] = [];
    putUserCartInLS(emptyList);
  }
  let nrValue = Number(value);
  if (isNaN(nrValue) || nrValue <= 0) {
    alert("You need to write a number higher than 0");
  } else {
    for (let i = 0; i < list.length; i++) {
      if (list[i].product === product) {
        list[i].quantity += nrValue;
        putUserCartInLS(list);
        console.log(list);
        return;
      }
    }
    let newArticle: CartProductTemplate = new CartProductTemplate(
      product,
      nrValue
    );
    console.log(list);
    list.push(newArticle);

    putUserCartInLS(list);
    console.log(list);
  }
}

//change quantity in object
export function changeQuantity(
  listPosition: number,
  product: CartProductTemplate,
  value: string,
  list: CartProductTemplate[]
) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      product.quantity = Number(value);
      console.log(list);
    }
  }
  // putUserCartInLS(list);
}

//delete specific object/product from cart
export function deleteFromCart(
  listPosition: number,
  list: CartProductTemplate[]
) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      list.splice(i, 1);
      console.log(list);
    }
  }
  // putUserCartInLS(list);
}

//delete all objects/products from cart
export function emptyShoppingCart(list: CartProductTemplate[]) {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    console.log(list.length);
    list.splice(i, list.length);
  }
  console.log(list);
  putUserCartInLS(list);
}
