# Carousel
## Description
  This script generates a carousel with a given number of active slides, and allows user input or automatic rotating.
## Installation
  Add the following script tag to the head tag of the page you want your carousel in:

  ```html
  <script defer src="https://cdn.jsdelivr.net/gh/Webmarkets/carousel/carousel.min.js"></script>
  ```
## Implementation
___
  1. Add the class `carousel-parent` to the HTML element that will contain the rotating HTML elements.
  2. For each item you want to rotate, add a `<div>` tag to wrap around the HTML code for your rotating item. Adding the style `display: none` is suggested, but not necessary. This helps avoid slides appearing as an awkward clump before the script manages their position and appearance.
  ### Example:
  ```html
  <div class="carousel-parent">
    <div style="display: none">
      <!--This is where your HTML will go-->
    </div>
    <div style="display: none"></div>
    <div style="display: none"></div>
    ...
  </div>
  ```
___

## Customization
  While the animation is done through CSS, this is actually done by having the script dynamically inject styling into the elements rather than from static CSS classes. This means any reliable customization available will have to be done through HTML attributes, informing features coded into this module.
___
  * Controls: To add controls to your carousel, simply add the attribute `controls` to the `carousel-parent` element. This module will inject two HTML `<div>` "buttons" with a class of `carousel-btn` and either `carousel-btn-right` or `carousel-btn-left`.
  * Automatic scrolling: Adding the attribute `interval` with a value of the time between scrolling slides will allow the script to automatically rotate the carousel in the interval you specified. Make sure to input the time in milliseconds.
  * Cards: You can specify the number of cards you want the carousel to display at a time. To do this, input the number of cards you would like into the `data-cards` HTML attribute of the parent element. This module also has window breakpoints at 1440px and 992px, so you may specify the number of cards you'd like the carousel to display at those resolutions by using the `data-md-cards` and `data-sm-cards` attributes respectively.
  * Transition time: To change how long it takes for the carousel to slide between cards, simply add the attribute `transition-time` and input the time in milliseconds you want the carousel to take to rotate on card.
___

  ### Example
  ```html
  <div class="carousel-parent" controls interval="5000" data-cards="5" data-sm-cards="2" data-md-cards="3" transition-time="1000">
    <div style="display: none">
      <!--This is where your HTML will go-->
    </div>
    <div style="display: none"></div>
    <div style="display: none"></div>
    ...
  </div>
  ```
## CSS
```css
.carousel-parent {
  position: relative;
  overflow: hidden;
}
```