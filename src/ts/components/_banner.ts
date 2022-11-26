const bannerSlider = document.querySelector("#banner-slider") as HTMLDivElement;
const bannerControl = [].slice.call(
  document.querySelectorAll(".dot") as NodeListOf<HTMLDivElement>
) as HTMLDivElement[];

function changeBanner(index: number) {
  if (bannerSlider)
    bannerSlider.style.transform = `translateX(-${index * 33.33}%)`;
  if (bannerControl) {
    bannerControl.forEach((element) => {
      element.className = element.className.replace("active", "");
    });
    bannerControl[index].className += " active";
  }
}
