let rotates = document.getElementsByClassName("rotate-parent");
let parents = document.getElementsByClassName("rotate-site");
let buttons = document.getElementsByClassName("hh-button");
let activeIndexes = {};
export default function loadStart() {
  for (let i = 0; i < rotates.length; i++) {
    if (window.innerWidth < 600) {
      setTimeout(function () { parents[i].style.opacity = "1" }, 1000);
      setTimeout(function () { buttons[i].style.opacity = "1" }, 2000);
    }
    else {
      parents[i].style.opacity = "1"
    }
    activeIndexes[i] = 0;
    rotates[i].style.width = 50 + "vw";
    rotates[i].style.height = 10 + "vh";
    let parent = rotates[i];
    parent.children[0].className = "active-rot"
    parent.children[1].className = "next-rot"
    rotates[i].style.width = parents[i].clientWidth + "px";
    if (rotates[i].children[0].scrollWidth > parents[i].clientWidth) {
      rotates[i].children[0].style.whiteSpace = "normal";
      setTimeout(function () {
        rotates[i].style.width = parents[i].clientWidth + "px";
        rotates[i].style.height = rotates[i].children[0].scrollHeight + "px";
      }, 500);
    }
    else {
      rotates[i].children[0].style.whiteSpace = "nowrap";
      setTimeout(function () {
        rotates[i].style.height = rotates[i].children[0].scrollHeight + "px";
        rotates[i].style.width = rotates[i].children[0].scrollWidth + "px";
      }, 500);
    }
    for (let b = 2; b < parent.children.length; b++) {
      parent.children[b].className = "last-rot"
    }
    setTimeout(function () {
      let timer = setInterval(function () { rotateText(i) }, 2000)
    }, 1800);
  }
}
function rotateText(i) {
  let prevIndex = activeIndexes[i];
  if (activeIndexes[i] >= rotates[i].children.length - 1) {
    activeIndexes[i] = 0;
  }
  else {
    activeIndexes[i]++;
  }
  let nextIndex = activeIndexes[i] + 1;
  if (nextIndex > rotates[i].children.length - 1) {
    nextIndex = 0;
  }
  rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
  if (rotates[i].children[activeIndexes[i]].scrollWidth > parents[i].clientWidth) {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "normal";
    rotates[i].style.width = parents[i].clientWidth + "px";
    rotates[i].style.height = rotates[i].children[activeIndexes[i]].scrollHeight + "px"
  }
  else {
    rotates[i].children[activeIndexes[i]].style.whiteSpace = "nowrap";
    rotates[i].style.height = rotates[i].children[activeIndexes[i]].scrollHeight + "px";
    rotates[i].style.width = rotates[i].children[activeIndexes[i]].scrollWidth + "px";
  }
  rotates[i].children[activeIndexes[i]].className = "active-rot";
  rotates[i].children[prevIndex].className = "last-rot";
  rotates[i].children[nextIndex].className = "next-rot";
}

