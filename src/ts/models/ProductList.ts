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

import ShelfSHealth from "../../assets/images/ShelfSHealth.png";
import ShelfMHealth from "../../assets/images/ShelfMHealth.png";
import ShelfLHealth from "../../assets/images/ShelfLHealth.png";
import ShelfSMana from "../../assets/images/ShelfSMana.png";
import ShelfMMana from "../../assets/images/ShelfMMana.png";
import ShelfLMana from "../../assets/images/ShelfLMana.png";
import ShelfSStamina from "../../assets/images/ShelfSStamina.png";
import ShelfMStamina from "../../assets/images/ShelfMStamina.png";
import ShelfLStamina from "../../assets/images/ShelfLStamina.png";

import Poison from "../../assets/images/PotionOfPoison.png";
import Joy from "../../assets/images/PotionOfJoy.png";
import Time from "../../assets/images/PotionOfTime.png";
import Invisability from "../../assets/images/PotionOfInvisability.png";

import ShelfPoison from "../../assets/images/ShelfPotionOfPoison.png";
import ShelfJoy from "../../assets/images/ShelfPotionOfJoy.png";
import ShelfTime from "../../assets/images/ShelfPotionOfTime.png";
import ShelfInvisability from "../../assets/images/ShelfPotionOfInvisability.png";

//./../assets/images/placeholder_square.jpg

export const products: ProductTemplate[] = [
  {
    name: "Small healing potion",
    price: 100,
    image: HealthSmall,
    size: "small",
    type: "healing",
    shelfImage: ShelfSHealth,
    id: "health_s",
  },
  {
    name: "Medium healing potion",
    price: 200,
    image: HealthMedium,
    size: "medium",
    type: "healing",
    shelfImage: ShelfMHealth,
    id: "health_m",
  },
  {
    name: "Large healing potion",
    price: 300,
    image: HealthLarge,
    size: "large",
    type: "healing",
    shelfImage: ShelfLHealth,
    id: "health_l",
  },
  {
    name: "Small mana potion",
    price: 100,
    image: ManaSmall,
    size: "small",
    type: "mana",
    shelfImage: ShelfSMana,
    id: "mana_s",
  },
  {
    name: "Medium mana potion",
    price: 200,
    image: ManaMedium,
    size: "medium",
    type: "mana",
    shelfImage: ShelfMMana,
    id: "mana_m",
  },
  {
    name: "Large mana potion",
    price: 300,
    image: ManaLarge,
    size: "large",
    type: "mana",
    shelfImage: ShelfLMana,
    id: "mana_l",
  },
  {
    name: "Small stamina potion",
    price: 100,
    image: StaminaSmall,
    size: "small",
    type: "stamina",
    shelfImage: ShelfSStamina,
    id: "stamina_s",
  },
  {
    name: "Medium stamina potion",
    price: 200,
    image: StaminaMedium,
    size: "medium",
    type: "stamina",
    shelfImage: ShelfMStamina,
    id: "stamina_m",
  },
  {
    name: "Large stamina potion",
    price: 300,
    image: StaminaLarge,
    size: "large",
    type: "stamina",
    shelfImage: ShelfLStamina,
    id: "stamina_l",
  },
  {
    name: "Potion of Poison",
    price: 200,
    image: Poison,
    size: "medium",
    type: "other",
    shelfImage: ShelfPoison,
    id: "poison_m",
  },
  {
    name: "Potion of Joy",
    price: 200,
    image: Joy,
    size: "medium",
    type: "other",
    shelfImage: ShelfJoy,
    id: "joy_m",
  },
  {
    name: "Potion of Time",
    price: 200,
    image: Time,
    size: "medium",
    type: "other",
    shelfImage: ShelfTime,
    id: "time_m",
  },
  {
    name: "Potion of Invisability",
    price: 200,
    image: Invisability,
    size: "medium",
    type: "other",
    shelfImage: ShelfInvisability,
    id: "invis_m",
  },
];

// export let testList = [
//   {
//     name: "Small healing potion",
//     price: 100,
//     image: placeholder_square,
//     size: "small",
//     type: "healing",
//   },
//   {
//     name: "Medium healing potion",
//     price: 200,
//     image: placeholder_square,
//     size: "medium",
//     type: "healing",
//   },
//   {
//     name: "Large healing potion",
//     price: 300,
//     image: placeholder_square,
//     size: "large",
//     type: "healing",
//   },
// ];
