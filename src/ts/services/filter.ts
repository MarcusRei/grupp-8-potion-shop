let filterMenu: HTMLDivElement = document.getElementById(
  "filter-menu"
) as HTMLDivElement;

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

    removeFilterHtml();

    console.log("filter menu is closed");
  }
}

export function renderFilterMenu() {
  //creates menu options
  let sizeBtn = document.createElement("button");
  sizeBtn.innerText = "Sort by Size";
  sizeBtn.classList.add("menu-btn", "potion-size");
  filterMenu.appendChild(sizeBtn);

  let typeBtn = document.createElement("button");
  typeBtn.innerText = "Sort by Type";
  typeBtn.classList.add("menu-btn");
  typeBtn.classList.add("potion-type-btn");
  filterMenu.appendChild(typeBtn);

  let priceBtn = document.createElement("button");
  priceBtn.innerText = "Sort by price";
  priceBtn.classList.add("menu-btn");
  priceBtn.classList.add("potion-type-btn");
  filterMenu.appendChild(priceBtn);
}

export function removeFilterHtml() {
  filterMenu.innerHTML = "";
}
