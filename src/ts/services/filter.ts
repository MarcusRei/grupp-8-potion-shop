import { products } from "../models/ProductList";

// is filter active or not
let small :boolean = false;
let medium :boolean = false;
let large :boolean = false;
let healing :boolean = false;
let mana :boolean = false;
let stamina :boolean = false;
let poison :boolean = false;
let joy :boolean = false;
let time :boolean = false;
let invisibility :boolean = false;

// open filter window
export function showFilter () {
  const filterBackground: HTMLDivElement = document.getElementById("filter-background") as HTMLDivElement;
  const filterContainer: HTMLDivElement = document.getElementById("filter-container") as HTMLDivElement;
    filterContainer.classList.add("showFilter");
    filterBackground.style.display = "flex";
    filterContainer.style.display ="flex";
}

// close filter window
export function closeFilter () {
    const filterBackground: HTMLDivElement = document.getElementById("filter-background") as HTMLDivElement;
    const filterContainer: HTMLDivElement = document.getElementById("filter-container") as HTMLDivElement;
    filterContainer.classList.remove("showFilter");
    filterBackground.style.display = "none";
    filterContainer.style.display = "none";
}

// resets filter 
export function clearFilter () {
  for(let i = 0; i < products.length; i++) {
    let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
    productContainer.style.display = "flex";
  }
  small = false;
  medium = false;
  large = false;
  healing = false;
  mana = false;
  stamina = false;
  poison = false;
  joy = false;
  time = false;
  invisibility = false;
}

// small variable changes to active or not active 
export function toggleSmall (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    small = true;
    console.log(small);
  } 
  if(!checkbox.checked){
    small = false;
    console.log(small);
  }
  filterProducts();
}

// medium variable changes to active or not active 
export function toggleMedium (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    medium = true;
    console.log(medium);
  } 
  if(!checkbox.checked){
    medium = false;
    console.log(medium);
  }
  filterProducts();
}

// large variable changes to active or not active 
export function toggleLarge (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    large = true;
    console.log(large);
  } 
  if(!checkbox.checked){
    large = false;
    console.log(large);
  }
  filterProducts();
}

// healing variable changes to active or not active 
export function toggleHealing (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    healing = true;
    console.log(healing);
  } 
  if(!checkbox.checked){
    healing = false;
    console.log(healing);
  }
  filterProducts();
}

// mana variable changes to active or not active 
export function toggleMana (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    mana = true;
    console.log(mana);
  } 
  if(!checkbox.checked){
    mana = false;
    console.log(mana);
  }
  filterProducts();
}

// stamina variable changes to active or not active 
export function toggleStamina (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    stamina = true;
    console.log(stamina);
  } 
  if(!checkbox.checked){
    stamina = false;
    console.log(stamina);
  }
  filterProducts();
}

// poison variable changes to active or not active 
export function togglePoison (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    poison = true;
    console.log(poison);
  } 
  if(!checkbox.checked){
    poison = false;
    console.log(poison);
  }
  filterProducts();
}

// joy variable changes to active or not active 
export function toggleJoy (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    joy = true;
    console.log(joy);
  } 
  if(!checkbox.checked){
    joy = false;
    console.log(joy);
  }
  filterProducts();
}

// time variable changes to active or not active 
export function toggleTime (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    time = true;
    console.log(time);
  } 
  if(!checkbox.checked){
    time = false;
    console.log(time);
  }
  filterProducts();
}

// inivisibility variable changes to active or not active 
export function toggleInvisibility (checkbox :HTMLInputElement) {
  if(checkbox.checked){
    invisibility = true;
    console.log(invisibility);
  } 
  if(!checkbox.checked){
    invisibility = false;
    console.log(invisibility);
  }
  filterProducts();
}

// shows selected filters
export function filterProducts () {

  // shows all products if nothing is checked & shows only checked filter if one is checked
  if(small || medium || large || healing || mana || stamina || poison || joy || time || invisibility) {
    for(let i = 0; i < products.length; i++) {
      let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
      productContainer.style.display = "none";
    }
  } else {
    for(let i = 0; i < products.length; i++) {
      let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
      productContainer.style.display = "flex";
    }
  }

  // checking of both a size and a type is checked
  if((small || medium || large) && (healing || mana || stamina || poison || joy || time || invisibility) ) {
    console.log("we have types and sizes on the list")
    for(let i = 0; i < products.length; i++) {
      
      // only shows small potions that is matching the selected type filter 
      // For ex. 
      // SMALL & HEALING 
      // SMALL & TIME

      if(small) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
          if(poison) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "poison")) {
                productContainer.style.display = "flex";
                console.log("show me small poison")
              }
            }
          }
          if(joy) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "joy")) {
                productContainer.style.display = "flex";
                console.log("show me small joy")
              }
            }
          }
          if(time) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "time")) {
                productContainer.style.display = "flex";
                console.log("show me small time")
              }
            }
          }
          if(invisibility) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "invisibility")) {
                productContainer.style.display = "flex";
                console.log("show me small invisibility")
              }
            }
          }
        }
      }
        // only shows medium potions that is matching the selected type filter
      if(medium) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
          if(poison) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "poison")) {
                productContainer.style.display = "flex";
                console.log("show me medium poison")
              }
            }
          }
          if(joy) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "joy")) {
                productContainer.style.display = "flex";
                console.log("show me medium joy")
              }
            }
          }
          if(time) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "time")) {
                productContainer.style.display = "flex";
                console.log("show me medium time")
              }
            }
          }
          if(invisibility) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "invisibility")) {
                productContainer.style.display = "flex";
                console.log("show me medium invisibility")
              }
            }
          }
        }

      }

      // only shows large potions that is matching the selected type filter
      if(large) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
          if(poison) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "poison")) {
                productContainer.style.display = "flex";
                console.log("show me large poison")
              }
            }
          }
          if(joy) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "joy")) {
                productContainer.style.display = "flex";
                console.log("show me large joy")
              }
            }
          }
          if(time) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "time")) {
                productContainer.style.display = "flex";
                console.log("show me large time")
              }
            }
          }
          if(invisibility) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "invisibility")) {
                productContainer.style.display = "flex";
                console.log("show me large invisibility")
              }
            }
          }
        }

      }
    }

  // shows all selected filters 
  } else {
    if (small) {
      console.log("show me small");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].size === "small") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (medium) {
      console.log("show me medium");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].size === "medium") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (large) {
      console.log("show me large");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].size === "large") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (healing) {
      console.log("show me healing");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "healing") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (mana) {
      console.log("show me mana");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "mana") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (stamina) {
      console.log("show me stamina");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "stamina") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (poison) {
      console.log("show me poisen");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "poison") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (joy) {
      console.log("show me joy");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "joy") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (time) {
      console.log("show me time");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "time") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (invisibility) {
      console.log("show me poisen");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].id) as HTMLDivElement;
        if(products[i].type === "invisibility") {
          productContainer.style.display = "flex";
        }
      }
    }
  }
}






















