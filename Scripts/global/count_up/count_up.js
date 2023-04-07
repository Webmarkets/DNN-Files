/**
 * @param {IntersectionObserverEntry[]} intersections 
 */
function intersectionListener (intersections) {
  intersections.forEach(intersection => {
    if (intersection.isIntersecting) {
      const counter = intersection.target;
      counter.classList.toggle("counting", true);
    }
  });
}
let options = {
  root: null,
  threshold: 1.0,
};

const observer = new IntersectionObserver(intersectionListener, options);
const counters = await document.getElementsByClassName("counter");
for (let i = 0; i < counters.length; i++) {
  observer.observe(counters.item(i));
}
