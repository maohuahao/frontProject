function dropDown() {
  let allLi = document.querySelectorAll("ul.drop-title > li");
  let allDrop = document.querySelectorAll("ul.drop-down");

  for (let i = 0; i < allLi.length; i++) {
    allLi[i].onclick = function () {
      allDrop[i].style.opacity = 1;
      allDrop[i].style.transition = "all 0.5s linear 0";
      for (let j = 0; j < allLi.length; j++) {
        if (i === j) {
          continue;
        } else {
          allDrop[j].style.opacity = 0;
          allDrop[j].style.height = 0 + "px";
        }
      }

      if (allDrop[i].style.height === "180px") {
        allDrop[i].style.height = 0 + "px";
      } else {
        allDrop[i].style.height = 180 + "px";
      }
    };
  }
}
