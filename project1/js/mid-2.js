function mid2Carousel() {
  const ul = document.getElementById("list");
  const dotLi = document.querySelectorAll(
    "div.middle-2 > div.change-img > ul > li"
  );

  const allLi = ul.innerHTML;
  ul.innerHTML += allLi;
  let i = 0;

  /* 过渡结束监听 */
  function handle() {
    ul.style.transform = "translateX(0)";
    ul.style.transition = "transform 0ms ease-in-out 0s";
  }

  /* 分页函数 */
  function pagination(direction) {
    if (direction == "right") {
      if (i === 5) {
        dotLi[i].classList.remove("dot");
        dotLi[0].classList.add("dot");
      } else {
        dotLi[i].classList.remove("dot");
        dotLi[i + 1].classList.add("dot");
      }
    } else {
      if (i === 6) {
        dotLi[0].classList.remove("dot");
        dotLi[i - 1].classList.add("dot");
      } else {
        dotLi[i].classList.remove("dot");
        dotLi[i - 1].classList.add("dot");
      }
    }
  }

  function budle() {
    ul.removeEventListener("transitionend", handle, false);

    ul.style.transition = "transform 500ms ease-in-out 0s";
    ul.style.transform = `translateX(${-296 * (i + 1)}px)`;

    pagination("right");
    i++;
    if (i == 6) {
      i = 0;
      ul.addEventListener("transitionend", handle, false);
    }
  }

  /* 轮播 */
  let timer = setInterval(budle, 3000);

  /* 点击左右切图 */
  let right = document.querySelector(".z-right");

  /* 鼠标移入函数（清除定时器） */
  function mouseOver() {
    clearInterval(timer);
  }

  /* 鼠标移出函数（启动定时器） */
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

  function rightClick() {
    ul.style.transition = "transform 500ms ease-in-out 0s";
    ul.style.transform = `translateX(${-296 * (i + 1)}px)`;

    pagination("right");
    i++;
    if (i === 6) {
      ul.addEventListener("transitionend", handle, false);
      i = 0;
    }
  }

  function rightMouseup() {
    ul.removeEventListener("transitionend", handle, false);
  }

  right.addEventListener("mouseover", mouseOver, false);
  right.addEventListener("mouseout", mouseOut, false);
  right.addEventListener("click", throttle(rightClick, 500), false);
  right.addEventListener("mouseup", throttle(rightMouseup, 500), false);

  /* 点击左箭头图片向右移动一张 */
  let left = document.querySelector(".z-left");

  function leftClick() {
    ul.style.transition = "transform 500ms ease-in-out 100ms";
    ul.style.transform = `translateX(${-296 * (i - 1)}px)`;
    pagination("left");
    i--;
  }

  function leftMouseover() {
    let m = getComputedStyle(ul, null)["transform"];
    let x = m.split(",")[4];

    if (parseInt(x) === 0) {
      ul.style.transition = "transform 0ms ease-in-out 0s";
      ul.style.transform = "translateX(-1776px)";
      i = 6;
    }
  }

  left.addEventListener("mouseover", mouseOver, false);
  left.addEventListener("mouseout", mouseOut, false);
  left.addEventListener("click", throttle(leftClick, 500), false);
  left.addEventListener("mousedown", throttle(leftMouseover, 500), false);

  /* 定义分页动画 */

  dotLi.forEach((item, key) => {
    item.addEventListener(
      "click",
      function () {
        clearInterval(timer);
        for (let j = 0; j < dotLi.length; j++) {
          if (dotLi[j].classList.contains("dot")) {
            dotLi[j].classList.remove("dot");
          }
        }
        item.classList.add("dot");
        ul.style.transition = "transform 500ms ease-in-out 0s";
        console.log(key);
        ul.style.transform = `translateX(${-298 * key}px)`;
        i = key;
        timer = setInterval(budle, 3000);
      },
      false
    );
  });
}
