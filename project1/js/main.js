window.onload = function () {
  /* 轮播 */
  mid2Carousel();
  dropDown();

  /* 切换下划线 */
  const h2_left = document.querySelectorAll(".left-title");
  const ul_left = document.querySelectorAll(".left-ul");

  for (let i = 0; i < h2_left.length; i++) {
    h2_left[i].onmouseover = function () {
      let isHover = this.classList.contains("hover");
      let hover = new RegExp("hover");
      if (!this.classList.contains("cur")) {
        this.style.color = "#1764ce";
        this.classList.add("cur");
        let reg = new RegExp("cur");
        for (let j = 0; j < h2_left.length; j++) {
          if (j === i) {
            continue;
          }
          if (
            reg.test(h2_left[j].className) &&
            hover.test(h2_left[j].className) === isHover
          ) {
            h2_left[j].style.color = "#000";
            h2_left[j].className = h2_left[j].className.replace(reg, "");
          }
        }
      }

      if (ul_left[i].classList.contains("hide")) {
        ul_left[i].classList.remove("hide");
        let reg = new RegExp("hide");
        for (let k = 0; k < h2_left.length; k++) {
          if (k === i) {
            continue;
          }
          if (
            !reg.test(ul_left[k].className) &&
            hover.test(h2_left[k].className) === isHover
          ) {
            ul_left[k].className = ul_left[k].className + " hide ";
          }
        }
      }
    };
  }
};
