import { putUserCartInLS } from "./localStorage";
import { ProductTemplate } from "./models/ProductTemplate";

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
  putUserCartInLS(list);
}

export function deleteFromCart(listPosition: number, list: ProductTemplate[]) {
  for (let i = 0; i < list.length; i++) {
    if (i === listPosition) {
      list.splice(i, 1);
      console.log(list);
    }
  }
  putUserCartInLS(list);
}

export function emptyShoppingCart(list: ProductTemplate[]) {
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    console.log(list.length);
    list.splice(i, list.length);
  }
  console.log(list);
  putUserCartInLS(list);
}
