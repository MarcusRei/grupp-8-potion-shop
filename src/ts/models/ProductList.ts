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

import PoisonS from "../../assets/images/PoisonSmall.png";
import PoisonM from "../../assets/images/PoisonMedium.png";
import PoisonL from "../../assets/images/PoisonLarge.png";
import JoyS from "../../assets/images/JoySmall.png";
import JoyM from "../../assets/images/JoyMedium.png";
import JoyL from "../../assets/images/JoyLarge.png";
import TimeS from "../../assets/images/TimeSmall.png";
import TimeM from "../../assets/images/TimeMedium.png";
import TimeL from "../../assets/images/TimeLarge.png";
import InvisibilityS from "../../assets/images/InvisibilitySmall.png";
import InvisibilityM from "../../assets/images/InvisibilityMedium.png";
import InvisibilityL from "../../assets/images/InvisibilityLarge.png";

import ShelfSPoison from "../../assets/images/ShelfSPoison.png";
import ShelfMPoison from "../../assets/images/ShelfMPoison.png";
import ShelfLPoison from "../../assets/images/ShelfLPoison.png";
import ShelfSJoy from "../../assets/images/ShelfSJoy.png";
import ShelfMJoy from "../../assets/images/ShelfMJoy.png";
import ShelfLJoy from "../../assets/images/ShelfLJoy.png";
import ShelfSTime from "../../assets/images/ShelfSTime.png";
import ShelfMTime from "../../assets/images/ShelfMTime.png";
import ShelfLTime from "../../assets/images/ShelfLTime.png";
import ShelfSInvisibility from "../../assets/images/ShelfSInvisibility.png";
import ShelfMInvisibility from "../../assets/images/ShelfMInvisibility.png";
import ShelfLInvisibility from "../../assets/images/ShelfLInvisibility.png";

//./../assets/images/placeholder_square.jpg

export const products: ProductTemplate[] = [
  {
    name: "Small Healing Potion",
    price: 100,
    image: HealthSmall,
    size: "small",
    type: "healing",
    shelfImage: ShelfSHealth,
    id: "health_s",
  },
  {
    name: "Medium Healing Potion",
    price: 200,
    image: HealthMedium,
    size: "medium",
    type: "healing",
    shelfImage: ShelfMHealth,
    id: "health_m",
  },
  {
    name: "Large Healing Potion",
    price: 300,
    image: HealthLarge,
    size: "large",
    type: "healing",
    shelfImage: ShelfLHealth,
    id: "health_l",
  },
  {
    name: "Small Mana Potion",
    price: 100,
    image: ManaSmall,
    size: "small",
    type: "mana",
    shelfImage: ShelfSMana,
    id: "mana_s",
  },
  {
    name: "Medium Mana Potion",
    price: 200,
    image: ManaMedium,
    size: "medium",
    type: "mana",
    shelfImage: ShelfMMana,
    id: "mana_m",
  },
  {
    name: "Large Mana Potion",
    price: 300,
    image: ManaLarge,
    size: "large",
    type: "mana",
    shelfImage: ShelfLMana,
    id: "mana_l",
  },
  {
    name: "Small Stamina Potion",
    price: 100,
    image: StaminaSmall,
    size: "small",
    type: "stamina",
    shelfImage: ShelfSStamina,
    id: "stamina_s",
  },
  {
    name: "Medium Stamina Potion",
    price: 200,
    image: StaminaMedium,
    size: "medium",
    type: "stamina",
    shelfImage: ShelfMStamina,
    id: "stamina_m",
  },
  {
    name: "Large Stamina Potion",
    price: 300,
    image: StaminaLarge,
    size: "large",
    type: "stamina",
    shelfImage: ShelfLStamina,
    id: "stamina_l",
  },
  {
    name: "Small Potion of Poison",
    price: 200,
    image: PoisonS,
    size: "small",
    type: "poison",
    shelfImage: ShelfSPoison,
    id: "poison_s",
  },
  {
    name: "Medium Potion of Poison",
    price: 200,
    image: PoisonM,
    size: "medium",
    type: "poison",
    shelfImage: ShelfMPoison,
    id: "poison_m",
  },
  {
    name: "Large Potion of Poison",
    price: 200,
    image: PoisonL,
    size: "large",
    type: "poison",
    shelfImage: ShelfLPoison,
    id: "poison_l",
  },
  {
    name: "Small Potion of Joy",
    price: 200,
    image: JoyS,
    size: "small",
    type: "joy",
    shelfImage: ShelfSJoy,
    id: "joy_s",
  },
  {
    name: "Medium Potion of Joy",
    price: 200,
    image: JoyM,
    size: "medium",
    type: "joy",
    shelfImage: ShelfMJoy,
    id: "joy_m",
  },
  {
    name: "Large Potion of Joy",
    price: 200,
    image: JoyL,
    size: "large",
    type: "joy",
    shelfImage: ShelfLJoy,
    id: "joy_l",
  },
  {
    name: "Small Potion of Time",
    price: 200,
    image: TimeS,
    size: "small",
    type: "time",
    shelfImage: ShelfSTime,
    id: "time_s",
  },
  {
    name: "Medium Potion of Time",
    price: 200,
    image: TimeM,
    size: "medium",
    type: "time",
    shelfImage: ShelfMTime,
    id: "time_m",
  },
  {
    name: "Large Potion of Time",
    price: 200,
    image: TimeL,
    size: "large",
    type: "time",
    shelfImage: ShelfLTime,
    id: "time_l",
  },
  {
    name: "Small Potion of Invisibility",
    price: 200,
    image: InvisibilityS,
    size: "small",
    type: "invisibility",
    shelfImage: ShelfSInvisibility,
    id: "invis_s",
  },
  {
    name: "Medium Potion of Invisibility",
    price: 200,
    image: InvisibilityM,
    size: "medium",
    type: "invisibility",
    shelfImage: ShelfMInvisibility,
    id: "invis_m",
  },
  {
    name: "Large Potion of Invisibility",
    price: 200,
    image: InvisibilityL,
    size: "large",
    type: "invisibility",
    shelfImage: ShelfLInvisibility,
    id: "invis_l",
  },
];
