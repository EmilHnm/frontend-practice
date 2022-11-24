const openMenu = document.querySelector("#open-menu") as HTMLDivElement;
const closeMenu = document.querySelector("#close-menu") as HTMLDivElement;
const menu = document.querySelector("#menu") as HTMLDivElement;

openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

window.addEventListener("resize", () => {
  menu.classList.remove("open");
});
