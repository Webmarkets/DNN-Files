let carousels = document.getElementsByClassName("carousel-parent");
let indexes = [];
let leftButtonIndexes = [];
let clickable = true;
let numActiveCards = 3;
let layers = 0;
let activeCardsStyles = {};

function loadStart() {
  for (let i = 0; i < carousels.length; i++) {
    new Carousel(carousels[i], i);
  }
}

class Carousel {
  currentIndex;
  cardStyles = {};
  numCards;
  length;
  odd;
  carousel;
  layers;
  clickable;
  transition;
  findIndexes() {
    let layeredIndexes = {};
    if (this.odd) {
      layeredIndexes["0"] = this.currentIndex;
      for (let i = 1; i <= this.layers; i++) {
        layeredIndexes[`-${i}`] = this.currentIndex - i;
        layeredIndexes[`${i}`] = this.currentIndex + i;
        if (layeredIndexes[`-${i}`] < 0) {
          layeredIndexes[`-${i}`] = this.length + (this.currentIndex - i);
        } else if (layeredIndexes[`${i}`] >= this.length) {
          layeredIndexes[`${i}`] = this.currentIndex + i - this.length;
        }
      }
    } else {
      for (let i = 1; i <= this.layers; i++) {
        layeredIndexes[`-${i}`] = this.currentIndex + 1 - i;
        layeredIndexes[`${i}`] = this.currentIndex + i;
        if (layeredIndexes[`-${i}`] < 0) {
          layeredIndexes[`-${i}`] = this.length + (this.currentIndex + 1 - i);
        } else if (layeredIndexes[`${i}`] >= this.length) {
          layeredIndexes[`${i}`] = this.currentIndex + i - this.length;
        }
      }
    }
    return layeredIndexes;
  }
  calcStyles() {
    if (window.innerWidth < 992) {
      let newNumCards = this.carousel.getAttribute("data-sm-cards");
      if (newNumCards) {
        this.numCards = newNumCards;
      }
    } else if (window.innerWidth < 1440) {
      let newNumCards = this.carousel.getAttribute("data-md-cards");
      if (newNumCards) {
        this.numCards = newNumCards;
      }
    } else {
      let newNumCards = this.carousel.getAttribute("data-cards");
      if (newNumCards) {
        this.numCards = newNumCards;
      } else {
        this.numCards = 5;
      }
    }
    let activeCoords;
    if (this.numCards % 2 == 1) {
      this.odd = true;
      activeCoords = 50 - (50 / this.numCards);
    } else {
      this.odd = false;
    }
    window.innerWidth;
    let layerIndexes = this.findIndexes();
    let index = 1;
    let width = 100 / this.numCards;
    if (this.odd) {
      let transition = this.transition;
      this.cardStyles["0"] = `
        display: inline-block;
        width: ${width}%;
        transition: ${transition}ms all;
        visibility: visible;
        position: relative;
        top: 0;
        left: ${activeCoords}%;`;
      while (index <= this.layers) {
        let visible = "visible";
        if (index == this.layers) {
          visible = "hidden";
        }
        this.cardStyles[`${index}`] = `
          display: inline-block;
          width: ${width}%;
          transition: ${transition}ms all;
          position: absolute;
          visibility: ${visible};
          top: 0;
          left: ${activeCoords + (width * index)}%;`;
        this.cardStyles[`-${index}`] = `
          display: inline-block;
          width: ${width}%;
          transition: ${transition}ms all;
          position: absolute;
          visibility: ${visible};
          top: 0;
          left: ${activeCoords - (width * index)}%;`;
        index++;
      }
    } else {
      while (index <= this.layers) {
        let visible = "visible";
        let position = "absolute";
        let transition = this.transition;
        if (index == this.layers) {
          visible = "hidden";
        }
        if (index == 1) {
          position = "relative";
        }
        this.cardStyles[`${index}`] = `
          display: inline-block;
          width: ${width}%;
          transition: ${transition}ms all;
          position: absolute;
          visibility: ${visible};
          top: 0;
          left: ${50 + (width * (index - 1))}%;`;
        this.cardStyles[`-${index}`] = `
          display: inline-block;
          width: ${width}%;
          transition: ${transition}ms all;
          visibility: ${visible};
          position: ${position};
          top: 0;
          left: ${50 - (width * index)}%;`;
        index++;
      }
    }
    if (this.odd) {
      this.carousel.children[this.currentIndex].style = this.cardStyles["0"];
    }
    for (let i = 1; i <= this.layers; i++) {
      this.carousel.children[layerIndexes[`${i}`]].style = this.cardStyles[`${i}`];
      this.carousel.children[layerIndexes[`-${i}`]].style = this.cardStyles[`-${i}`];
    }
  }
  /**
   * Constructs a new Carousel
   * @param {HTMLElement} carousel
   * @param {number} id
   */
  constructor(carousel, id) {
    this.clickable = true;
    this.carousel = carousel;
    this.carousel.setAttribute("id", `carousel-${id}`);
    this.length = this.carousel.children.length;
    this.numCards = this.carousel.getAttribute("data-cards");
    this.transition = this.carousel.getAttribute("transition-time");
    if (!this.transition) {
      this.transition = 1000;
    }
    this.layers = Math.floor(this.numCards / 2) + 1;
    this.currentIndex = 0;
    if (this.numCards % 2 == 1) {
      this.odd = true;
    } else {
      this.odd = false;
    }
    this.calcStyles();
    window.addEventListener("resize", () => {
      this.calcStyles();
    });


    let interval = this.carousel.getAttribute("interval");
    if (interval) {
      setInterval(() => {
        this.rotateForward(this)
      }, interval);
    }

    // All the controls stuff
    if (this.carousel.hasAttribute("controls")) {
      // Previous button setup
      let leftButton = document.createElement("div");
      leftButton.setAttribute("class", `carousel-btn carousel-btn-${id} carousel-btn-left carousel-btn-${id}-left`);
      leftButton.setAttribute("data-target", this.carousel.getAttribute("id"));
      leftButton.innerHTML = '<i class="fas fa-angle-left"></i>';
      leftButton.addEventListener("click", () => {
        this.rotateBack(this);
      });
      // Next button setup
      let rightButton = document.createElement("div");
      rightButton.setAttribute("class", `carousel-btn carousel-btn-${id} carousel-btn-right carousel-btn-${id}-right`);
      rightButton.setAttribute("data-target", this.carousel.getAttribute("id"));
      rightButton.innerHTML = '<i class="fas fa-angle-right"></i>';
      rightButton.addEventListener("click", () => {
        this.rotateForward(this);
      });
      this.carousel.insertAdjacentElement("beforebegin", leftButton);
      this.carousel.insertAdjacentElement("beforebegin", rightButton);
    }
  }
  nextSlide() {
    this.currentIndex++;
    if (this.currentIndex == this.length) {
      this.currentIndex = 0;
    }
  }
  lastSlide() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.length - 1;
    }
  }

  /**
   * Rotates the carousel backward
   * @param {Carousel} parent 
   */
  rotateBack(parent) {
    if (parent.clickable) {
      parent.lastSlide();
      let layerIndexes = parent.findIndexes();
      if (parent.odd) {
        parent.carousel.children[parent.currentIndex].style = parent.cardStyles["0"];
      }
      for (let i = 1; i <= parent.layers; i++) {
        parent.carousel.children[layerIndexes[`${i}`]].style = parent.cardStyles[`${i}`];
        parent.carousel.children[layerIndexes[`-${i}`]].style = parent.cardStyles[`-${i}`];
      }
      parent.clickable = false;
      setTimeout(() => {
        parent.clickable = true;
      }, parent.transition);
    }
  }
  /**
   * Rotates the carousel forward
   * @param {Carousel} parent 
   */
  rotateForward(parent) {
    if (parent.clickable) {
      parent.nextSlide();
      let layerIndexes = parent.findIndexes();
      if (parent.odd) {
        parent.carousel.children[parent.currentIndex].style = parent.cardStyles["0"];
      }
      for (let i = 1; i <= parent.layers; i++) {
        parent.carousel.children[layerIndexes[`${i}`]].style = parent.cardStyles[`${i}`];
        parent.carousel.children[layerIndexes[`-${i}`]].style = parent.cardStyles[`-${i}`];
      }
      parent.clickable = false;
      setTimeout(() => {
        parent.clickable = true;
      }, parent.transition);
    }
  }
}

window.addEventListener("load", loadStart);
