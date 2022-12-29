import { CartProductTemplate } from "./models/CartProductTemplate";

//Put in LS
export function putUserCartInLS(userProducts: CartProductTemplate[]) {
  localStorage.setItem("userCart", JSON.stringify(userProducts));
}

// Get from LS
export function getUserCartFromLS() {
  let userCartLS = JSON.parse(localStorage.getItem("userCart")!);
  return userCartLS;
}
