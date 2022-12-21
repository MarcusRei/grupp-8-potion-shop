import { ProductTemplate } from "./ProductTemplate";
import placeholder_square from "../../assets/images/placeholder_square.jpg";

//./../assets/images/placeholder_square.jpg

export const products: ProductTemplate[] = [
  {
    name: "Small potion",
    price: "100",
    image: placeholder_square,
    size: "small",
    type: "healing",
  },
  {
    name: "Medium potion",
    price: "200",
    image: placeholder_square,
    size: "medium",
    type: "mana",
  },
  {
    name: "Large potion",
    price: "300",
    image: placeholder_square,
    size: "large",
    type: "stamina",
  },
];
