import { ProductTemplate } from "./ProductTemplate";

export class CartProductTemplate {
  constructor(public product: ProductTemplate, public quantity: number) {}
}
