import { ProductTemplate } from "./ProductTemplate";
import HealthSmall from "../../assets/images/HealthSmall.png";
import HealthMedium from "../../assets/images/HealthMedium.png";
import HealthLarge from "../../assets/images/HealthLarge.png";
import ManaSmall from "../../assets/images/ManaSmall.png";
import ManaMedium from "../../assets/images/ManaMedium.png";
import ManaLarge from "../../assets/images/ManaLarge.png";
import StaminaSmall from "../../assets/images/StaminaSmall.png";
import StaminaMedium from "../../assets/images/StaminaMedium.png";
import StaminaLarge from "../../assets/images/StaminaLarge.png";

//./../assets/images/placeholder_square.jpg

export const products: ProductTemplate[] = [
  {
    name: "Small healing potion",
    price: 100,
    image: HealthSmall,
    size: "small",
    type: "healing",
    quantity: 1,
  },
  {
    name: "Medium healing potion",
    price: 200,
    image: HealthMedium,
    size: "medium",
    type: "healing",
    quantity: 1,
  },
  {
    name: "Large healing potion",
    price: 300,
    image: HealthLarge,
    size: "large",
    type: "healing",
    quantity: 1,
  },
  {
    name: "Small mana potion",
    price: 100,
    image: ManaSmall,
    size: "small",
    type: "mana",
    quantity: 1,
  },
  {
    name: "Medium mana potion",
    price: 200,
    image: ManaMedium,
    size: "medium",
    type: "mana",
    quantity: 1,
  },
  {
    name: "Large mana potion",
    price: 300,
    image: ManaLarge,
    size: "large",
    type: "mana",
    quantity: 1,
  },
  {
    name: "Small stamina potion",
    price: 100,
    image: StaminaSmall,
    size: "small",
    type: "stamina",
    quantity: 1,
  },
  {
    name: "Medium stamina potion",
    price: 200,
    image: StaminaMedium,
    size: "medium",
    type: "stamina",
    quantity: 1,
  },
  {
    name: "Large stamina potion",
    price: 300,
    image: StaminaLarge,
    size: "large",
    type: "stamina",
    quantity: 1,
  },
];

// export let testList = [
//   {
//     name: "Small healing potion",
//     price: 100,
//     image: placeholder_square,
//     size: "small",
//     type: "healing",
//     quantity: 5,
//   },
//   {
//     name: "Medium healing potion",
//     price: 200,
//     image: placeholder_square,
//     size: "medium",
//     type: "healing",
//     quantity: 4,
//   },
//   {
//     name: "Large healing potion",
//     price: 300,
//     image: placeholder_square,
//     size: "large",
//     type: "healing",
//     quantity: 2,
//   },
// ];
