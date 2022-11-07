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

  let timer = setInterval(budle, 3000);

  /* */

  let left = document.querySelector(".z-left");
  let right = document.querySelector(".z-right");

  console.log(left);

  function mouseOver() {
    clearInterval(timer);
  }

  function mouseOut() {
    timer = setInterval(budle, 3000);
  }

  /* 节流 */
  function throttle(handler, wait) {
    var lastTime = 0;

    return function () {
      var nowTime = new Date().getTime();

      if (nowTime - lastTime > wait) {
        handler.apply(this, arguments);
        lastTime = nowTime;
      }
    };
  }

  function onClick() {
    ul.style.transition = "transform 500ms ease-in-out 0s";
    let transform = getComputedStyle(ul, null)["transform"];
    let split = transform.split(",");
    let translateX = parseInt(split[4]);
    console.log(translateX);

    ul.style.transform = `translateX(${translateX - 296}px)`;
    if (translateX === -1776) {
      ul.style.transition = "transform 0ms ease-in-out 0s";
      ul.style.transform = "translateX(0)";
    }
  }

  left.addEventListener("mouseover", mouseOver, false);
  left.addEventListener("mouseout", mouseOut, false);
  left.addEventListener("click", throttle(onClick, 500), false);
}
