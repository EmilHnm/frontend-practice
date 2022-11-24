"use strict";
const bannerSlider = document.querySelector("#banner-slider");
const bannerControl = [].slice.call(document.querySelectorAll(".dot"));
function changeBanner(index) {
    if (bannerSlider)
        bannerSlider.style.transform = `translateX(-${index * 33.33}%)`;
    if (bannerControl) {
        bannerControl.forEach((element) => {
            element.className = element.className.replace("active", "");
        });
        bannerControl[index].className += " active";
    }
}
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const menu = document.querySelector("#menu");
openMenu.addEventListener("click", () => {
    menu.classList.add("open");
});
closeMenu.addEventListener("click", () => {
    menu.classList.remove("open");
});
window.addEventListener("resize", () => {
    menu.classList.remove("open");
});
//# sourceMappingURL=app.js.map