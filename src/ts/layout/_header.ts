const openMenu = document.querySelector("#open-menu") as HTMLDivElement;
const closeMenu = document.querySelector("#close-menu") as HTMLDivElement;
const menu = document.querySelector("#menu") as HTMLDivElement;
const main = document.querySelector("main") as HTMLDivElement;

openMenu.addEventListener("click", () => {
  menu.classList.add("open");
  main.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  main.style.display = "block";
});

window.addEventListener("resize", () => {
  menu.classList.remove("open");
  main.style.display = "block";
});
