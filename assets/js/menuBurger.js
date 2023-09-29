const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu__item");
const menuButton = document.querySelector(".menu__button");

function toggleMenu() {
  if (menu.classList.contains("menu_show")) {
    menu.classList.remove("menu_show");
  } else {
    menu.classList.add("menu_show");
  }
}

menuButton.onclick = toggleMenu;

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
