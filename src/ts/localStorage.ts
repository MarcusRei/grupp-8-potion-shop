import { CartProductTemplate } from "./models/CartProductTemplate";
import { ProductTemplate } from "./models/ProductTemplate";

//Put in LS
export function putUserCartInLS(userProducts: CartProductTemplate[]) {
  localStorage.setItem("userCart", JSON.stringify(userProducts));
}

// Get from LS
export function getUserCartFromLS() {
  let userCartLS = JSON.parse(localStorage.getItem("userCart")!);
  //  let userCartLS = JSON.parse(localStorage.getItem("userCart") || "[]");
  console.log(userCartLS);
  return userCartLS;
}
