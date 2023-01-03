import { products } from "../models/ProductList";
import { ProductTemplate } from "../models/ProductTemplate";
import { renderProductlist } from "../products";

let small :boolean = false;
let medium :boolean = false;
let large :boolean = false;
let healing :boolean = false;
let mana :boolean = false;
let stamina :boolean = false;


export function showFilter () {
  const filterBackground: HTMLDivElement = document.getElementById("filter-background") as HTMLDivElement;
  const filterContainer: HTMLDivElement = document.getElementById("filter-container") as HTMLDivElement;
    filterContainer.classList.add("showFilter");
    filterBackground.style.display = "flex";
    filterContainer.style.display ="flex";
}

export function closeFilter () {
    const filterBackground: HTMLDivElement = document.getElementById("filter-background") as HTMLDivElement;
    const filterContainer: HTMLDivElement = document.getElementById("filter-container") as HTMLDivElement;
    filterContainer.classList.remove("showFilter");
    filterBackground.style.display = "none";
    filterContainer.style.display = "none";
}

export function clearFilter () {
  for(let i = 0; i < products.length; i++) {
    let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
    productContainer.style.display = "flex";
  }
}


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

function filterProducts () {
  // shows all products if nothing is checked & shows only checked filter if one is checked
  if(small || medium || large || healing || mana || stamina) {
    for(let i = 0; i < products.length; i++) {
      let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
      productContainer.style.display = "none";
    }
  } else {
    for(let i = 0; i < products.length; i++) {
      let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
      productContainer.style.display = "flex";
    }
  }

  // checking of both a size and a type is checked
  if((small || medium || large) && (healing || mana || stamina) ) {
    console.log("we have types and sizes on the list")
    for(let i = 0; i < products.length; i++) {
      

      if(small) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "small") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
        }

      }

      if(medium) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "medium") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
        }

      }

      if(large) { 
        for(let i = 0; i < products.length; i++) {
          
          if(healing) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "healing")) {
                productContainer.style.display = "flex";
                console.log("show me small hp")
              }
            }

          }
          if(mana) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "mana")) {
                productContainer.style.display = "flex";
                console.log("show me small mana")
              }
            }
            
          }
          if(stamina) {
            for(let i = 0; i < products.length; i++) {
              let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
              if((products[i].size === "large") && (products[i].type === "stamina")) {
                productContainer.style.display = "flex";
                console.log("show me small stamina")
              }
            }
          }
        }

      }
    }

  // if not a size and a type is checked 
  } else {
    if (small) {
      console.log("show me small");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].size === "small") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (medium) {
      console.log("show me medium");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].size === "medium") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (large) {
      console.log("show me large");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].size === "large") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (healing) {
      console.log("show me healing");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].type === "healing") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (mana) {
      console.log("show me mana");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].type === "mana") {
          productContainer.style.display = "flex";
        }
      }
    }
    if (stamina) {
      console.log("show me stamina");
      for (let i = 0; i < products.length; i++){
        let productContainer :HTMLDivElement = document.getElementById(products[i].name) as HTMLDivElement;
        if(products[i].type === "stamina") {
          productContainer.style.display = "flex";
        }
      }
    }
  }
}






















// First filter functionen 
let filterMenu: HTMLDivElement = document.getElementById(
  "filter-menu"
) as HTMLDivElement;

// let clearFilterBtn: HTMLButtonElement = document.getElementById(
//   "clear-filter"
// ) as HTMLButtonElement;

// clearFilterBtn.addEventListener("click", () => {
//   renderProductlist(products);
// });

export function toggleFilterMenu() {
  if (filterMenu.classList.contains("filter-menu__invisible")) {
    filterMenu.classList.replace(
      "filter-menu__invisible",
      "filter-menu__visible"
    );

    renderFilterMenu();
    console.log("filter menu is open");
  } else {
    filterMenu.className = "filter-menu__invisible";

    removeFilterMenu();

    console.log("filter menu is closed");
  }
}

export function renderFilterMenu() {
  //creates size button
  let sizeBtn = document.createElement("button");
  sizeBtn.innerText = "Sort by Size";
  sizeBtn.classList.add("menu-btn", "potion-size", "size-options-invisible");
  filterMenu.appendChild(sizeBtn);

  //creates size menu container
  let sizeMenuContainer = document.createElement("div");
  sizeMenuContainer.classList.add("size-menu-container", "invisible");
  filterMenu.appendChild(sizeMenuContainer);

  //creates type button
  let typeBtn = document.createElement("button");
  typeBtn.innerText = "Sort by Type";
  typeBtn.classList.add("menu-btn", "potion-type", "type-options-invisible");
  typeBtn.classList.add("potion-type");
  filterMenu.appendChild(typeBtn);

  //creates type menu container
  let typeMenuContainer = document.createElement("div");
  typeMenuContainer.classList.add("type-menu-container", "invisible");
  filterMenu.appendChild(typeMenuContainer);

  let priceBtn = document.createElement("button");
  priceBtn.innerText = "Sort by Price";
  priceBtn.classList.add("menu-btn");
  priceBtn.classList.add("potion-price");
  filterMenu.appendChild(priceBtn);

  if ((filterMenu.className = "filter-menu__visible")) {
    //Sort by size eventlistener
    let sortBySizeBtn: HTMLButtonElement = document.querySelector(
      ".potion-size"
    ) as HTMLButtonElement;

    sortBySizeBtn.addEventListener("click", () => {
      if (sortBySizeBtn.classList.contains("size-options-visible")) {
        sortBySizeBtn.classList.replace(
          "size-options-visible",
          "size-options-invisible"
        );
        removeSizeMenu(sizeMenuContainer);
      } else {
        sortBySizeBtn.classList.replace(
          "size-options-invisible",
          "size-options-visible"
        );
        sizeMenuContainer.classList.remove("invisible");
        renderSizeMenu(sizeMenuContainer);
      }
    });

    //Sort by type eventlistener

    let sortByTypeBtn: HTMLButtonElement = document.querySelector(
      ".potion-type"
    ) as HTMLButtonElement;
    sortByTypeBtn.addEventListener("click", () => {
      if (sortByTypeBtn.classList.contains("type-options-visible")) {
        sortByTypeBtn.classList.replace(
          "type-options-visible",
          "type-options-invisible"
        );
        removeTypeMenu(typeMenuContainer);
      } else {
        sortByTypeBtn.classList.replace(
          "type-options-invisible",
          "type-options-visible"
        );
        typeMenuContainer.classList.remove("invisible");
        renderTypeMenu(typeMenuContainer);
      }
    });

    //Sort by price eventlistener

    /* let sortByPriceBtn: HTMLButtonElement = document.querySelector(
      ".potion-price"
    ) as HTMLButtonElement;
    sortByPriceBtn.addEventListener("click", () => {
      togglePriceMenu();
    }); */
  }
}

export function removeFilterMenu() {
  filterMenu.innerHTML = "";
}

//Size functions

function renderSizeMenu(sizeMenuContainer: HTMLDivElement) {
  console.log("Du vill sortera efter storlek");

  //creates small menu option
  let smallBtn = document.createElement("button");
  smallBtn.innerText = "sort by small";
  smallBtn.classList.add("menu-btn", "small-size");

  //creates medium menu option
  let mediumBtn = document.createElement("button");
  mediumBtn.innerText = "sort by medium";
  mediumBtn.classList.add("menu-btn", "medium-size");
  mediumBtn;

  //creates large menu option
  let largeBtn = document.createElement("button");
  largeBtn.innerText = "sort by large";
  largeBtn.classList.add("menu-btn", "large-size");
  largeBtn;

  sizeMenuContainer.appendChild(smallBtn);
  sizeMenuContainer.appendChild(mediumBtn);
  sizeMenuContainer.appendChild(largeBtn);

  let sizeBtn: HTMLButtonElement = document.querySelector(
    ".potion-size"
  ) as HTMLButtonElement;

  if (sizeBtn.classList.contains("size-options-visible")) {
  }
  smallBtn.addEventListener("click", () => {
    sortList(products, "small", ".size");
  });

  mediumBtn.addEventListener("click", () => {
    sortList(products, "medium", ".size");
  });

  largeBtn.addEventListener("click", () => {
    sortList(products, "large", ".size");
  });
}

function removeSizeMenu(sizeMenuContainer: HTMLDivElement) {
  sizeMenuContainer.innerHTML = "";
}

export function renderTypeMenu(typeMenuContainer: HTMLDivElement) {
  console.log("Du vill sortera efter typ");

  //creates healing option
  let healingBtn = document.createElement("button");
  healingBtn.innerText = "sort by healing";
  healingBtn.classList.add("menu-btn", "healing-type");

  //creates stamina option
  let staminaBtn = document.createElement("button");
  staminaBtn.innerText = "sort by stamina";
  staminaBtn.classList.add("menu-btn", "stamina-type");
  staminaBtn;

  //creates mana option
  let manaBtn = document.createElement("button");
  manaBtn.innerText = "sort by mana";
  manaBtn.classList.add("menu-btn", "mana-type");
  manaBtn;

  typeMenuContainer.appendChild(healingBtn);
  typeMenuContainer.appendChild(staminaBtn);
  typeMenuContainer.appendChild(manaBtn);
}

function removeTypeMenu(sizeMenuContainer: HTMLDivElement) {
  sizeMenuContainer.innerHTML = "";
}

export function togglePriceMenu() {
  console.log("Du vill sortera efter pris");
}

function sortList(
  listToSort: ProductTemplate[],
  comparison: string,
  filter: string
) {
  let filteredList = [];
  for (let i = 0; i < listToSort.length; i++) {
    if (listToSort[i].size === comparison) {
      filteredList.push(listToSort[i]);
    }
    console.log(filteredList);
  }
  renderProductlist(filteredList);
}
