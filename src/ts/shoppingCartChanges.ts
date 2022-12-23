import { putUserCartInLS } from "./localStorage";
import { ProductTemplate } from "./models/ProductTemplate";

//original addProductToCart function
export function addProductToCart(
  list: ProductTemplate[],
  product: ProductTemplate,
  value: string
) {
  product.quantity = Number(value);
  list.push(product);
  console.log(list);
  console.log(value);
}

//trial and error addProductToCart function
// export function addProductToCart(
//   listToLoop: ProductTemplate[],
//   listPosition: number,
//   product: ProductTemplate,
//   value: string,
//   listToPush: ProductTemplate[]
// ) {
//   for (let i = 0; i < listToLoop.length; i++) {
//     if (i === listPosition) {
//       product.quantity = Number(value);
//       listToPush.push(product);
//       console.log(product.name, product.quantity);
//     }
//   }
// }

//change quantity in object
export function changeQuantity(
  listPosition: number,
  product: ProductTemplate,
  value: string,
  list: ProductTemplate[]
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
export function deleteFromCart(listPosition: number, list: ProductTemplate[]) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      list.splice(i, 1);
      console.log(list);
    }
  }
  // putUserCartInLS(list);
}

//delete all objects/products from cart
export function emptyShoppingCart(list: ProductTemplate[]) {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    console.log(list.length);
    list.splice(i, list.length);
  }
  console.log(list);
  putUserCartInLS(list);
}
