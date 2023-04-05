let attrSize = "";
let activeSize = "";
let altActiveSize = "";
let webP = true;
let pageLoaded = false;
let webPLoaded = false;
const onIntersection = (lazyElems) => {
  for (const lazyElem of lazyElems) {
    if (!lazyElem.target.getAttribute("src")) {
      lazyElem.target.setAttribute("src", lazyElem.target.getAttribute("lazy-src"));
    }
  }
};
function loadStart () {
  window.addEventListener("load", () => {
    pageLoaded = true;
    setBackgrounds();
    setImgs();
  });
  canUseWebP();
  setLinks();
  const observer = new IntersectionObserver(onIntersection);
  const lazyElems = document.getElementsByClassName("lazy-load");
  for (const lazyElem of lazyElems) {
    observer.observe(lazyElem);
  }
}
function canUseWebP () {
  if (window.innerWidth < 1440) {
    attrSize = "-m";
    activeSize = "md";
    altActiveSize = "m";
  }
  if (window.innerWidth < 992) {
    attrSize = "-s";
    activeSize = "sm";
    altActiveSize = "s";
  }
  let elem = document.createElement("img");
  elem.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  elem.onload = function () {

    webPLoaded = true;
    setPriorityImgs();
    setPriorityBackgrounds();
    _loadStart();
  };
  elem.onerror = function () {
    webPLoaded = true;
    webP = false;
    setPriorityImgs();
    setPriorityBackgrounds();
    _loadStart();
  };
}

async function _loadStart () {
  if (pageLoaded && webPLoaded) {
    setImgs();
    setBackgrounds();
  }
}
function constructImgUrl (elem, isBackground) {
  let initImgUrl = isBackground ? elem.getAttribute("bg-img") : elem.getAttribute("delay");
  let query = "";
  let version = elem.getAttribute("version");
  if (version) {
    query = "?v=" + version;
  }

  if (initImgUrl) {
    let factoredUrl = initImgUrl.split(".");
    let tempSize = "";
    let web = elem.getAttribute("no-webp");
    if (webP && !web) {
      factoredUrl[1] = "webp";
    }
    let sizes = elem.getAttribute("alt-size");
    if ((activeSize || altActiveSize) && sizes) {
      sizes = sizes.replace(",", "");
      sizes = sizes.split(" ");
      if (sizes.includes(activeSize) || sizes.includes(altActiveSize)) {
        tempSize = attrSize;
      }
    }
    const finalUrl = `${factoredUrl[0]}${tempSize}.${factoredUrl[1]}${query}`;
    if (isBackground) {
      elem.setAttribute("style", `background-image: url('${finalUrl}${query}');`);

    } else {
      elem.src = finalUrl;
    }
  }


}

async function setImgs () {
  let delayedImgs = document.getElementsByTagName("img");
  for (let i = 0; i < delayedImgs.length; i++) {
    constructImgUrl(delayedImgs[i], false);
  }
}
async function setPriorityImgs () {
  let delayedImgs = document.getElementsByTagName("img");
  for (let i = 0; i < delayedImgs.length; i++) {

    if (delayedImgs[i].getAttribute("priority")) {
      constructImgUrl(delayedImgs[i], false);
    }
  }
}
function setLinks () {
  let links = [];
  let head = document.getElementsByTagName('head')[0];
  for (let i = 0; i < links.length; i++) {
    let cssLink = document.createElement('link');
    cssLink.rel = links[i].rel;
    cssLink.href = links[i].href;
    cssLink.integrity = links[i].integrity;
    cssLink.crossOrigin = links[i].crossOrigin;
    head.parentNode.insertBefore(cssLink, head);
  }
}
function setBackgrounds () {
  let imgBacks = document.getElementsByClassName("img-back");
  for (let i = 0; i < imgBacks.length; i++) {

    constructImgUrl(imgBacks[i], true);
  }
}
function setPriorityBackgrounds () {
  let imgBacks = document.getElementsByClassName("img-back");
  for (let i = 0; i < imgBacks.length; i++) {
    if (imgBacks[i].getAttribute("priority")) {
      constructImgUrl(imgBacks[i], true);
    }
  }
}
loadStart();