/**
 * @param {IntersectionObserverEntry[]} intersections 
 */
function intersectionListener (intersections) {
  intersections.forEach(intersection => {
    if (intersection.isIntersecting) {
      const elem = intersection.target;
      if (elem.hasAttribute("data-activation-class")) {
        elem.classList.toggle(elem.getAttribute("data-activation-class"), true);
      }
    }
  });
}
let options = {
  root: null,
  threshold: 0.3
};

const observer = new IntersectionObserver(intersectionListener, options);
const elements = await document.getElementsByClassName("animation-elem");
for (let i = 0; i < elements.length; i++) {
  const elem = elements.item(i);
  if (elem.hasAttribute("data-activation-class")) {
    elem.classList.toggle(elem.getAttribute("data-activation-class"), false);
  }
  observer.observe(elements.item(i));
}
