function mid2Carousel() {
  const ul = document.getElementById("list");
  const dotLi = document.querySelectorAll(
    "div.middle-2 > div.change-img > ul > li"
  );

  const allLi = ul.innerHTML;

  ul.innerHTML += allLi;

  let i = 1;

  function handle() {
    ul.style.transform = "translateX(0)";
    ul.style.transition = "transform 0ms ease-in-out 0s";
  }

  function budle() {
    ul.removeEventListener("transitionend", handle, false);

    ul.style.transition = "transform 500ms ease-in-out 0s";
    ul.style.transform = `translateX(${-296 * i}px)`;

    console.log(i);
    if (i == 6) {
      i = 0;
      ul.addEventListener("transitionend", handle, false);
    }

    if (i === 6) {
      dotLi[i - 1].classList.remove("dot");
      dotLi[0].classList.add("dot");
    } else if (i === 0) {
      dotLi[i].classList.add("dot");
      dotLi[5].classList.remove("dot");
    } else {
      dotLi[i - 1].classList.remove("dot");
      dotLi[i].classList.add("dot");
    }

    i++;
  }

  setInterval(budle, 3000);
}
