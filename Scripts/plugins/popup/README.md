# Popup Script Instructions
## Description
This plugin creates pop-ups in your website. The pop-ups are activated by clicking an HTML element, such as a button. Upon activation an element will appear centered in the screen, with a dark overlay covering the rest of the visible site. Clicking outside the pop-up element and on the overlay that covers everything will close the pop-up. Optionally, an element such as a button in the pop-up may also be used to close the pop-up.
## Installation
Download `popup.js` from github [here](https://github.com/Webmarkets/Popup-Script), and move it into your `Scripts/plugins` folder on FTP. See the [general installation instructions](https://github.com/Webmarkets/Plugins-Module/blob/main/README.md) for more information on that process. This plugin will need to load in the standard `startUp()` function.
## Implementation
Once you've successfully installed this plugin you may now implement it. To create a pop-up, you'll need three things: something to open up the pop-up, an overlay for the pop-up, and a main content container for the pop-up. You'll also need to assign a unique `id` to the overlay. 
___
1. Pop-up trigger: To create a pop-up trigger you'll need to select an HTML element you want to activate this pop-up. Which HTML element you use isn't very important to this plugin, as long as it doesn't interact with any existing code on the site. Add to this element the class `popup-trigger` and the attribute `data-target` with the unique `id` of the overlay assigned as its value.
2. Overlay: This should be a parent HTML element containing your main pop-up content. Assign a unique `id` to this element so it can be targeted.
3. Main content container: This HTML element should be located inside the **Overlay** element you've created. Assign to this element the class `popup-card`.
___
## Customization
You should be able to do any necessary customization by editing these CSS classes, as well as by adding your own HTML code and CSS. While the CSS classes displayed above are needed, the majority of the styling present here can be adjusted without problem.
## Sample HTML:
```html
<div class="example-column">
  <div data-target="popup1" class="popup-trigger btn-primary">Open Pop-up</div>
  <div class="overlay" id="popup1">
    <div class="popup-card">
      <!--Optional button to close the pop-up--contains a FontAwesome icon-->
      <div data-target="popup1" class="btn-exit popup-close">
        <i class="fas fa-times"></i>
      </div>
      <h2 class="example-content">Title</h2>
    </div>
  </div>
</div>
```
___
## Sample CSS:
```css
.overlay {
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
  transition: 300ms all;
}
.overlay.active {
  visibility: visible;
  opacity: 1;
}
.popup-card {
  background-color: white;
  width: 35em;
  position: relative;
  padding: 5em;
  box-shadow: 0 27px 43px rgb(255 255 255 / 30%);
}
.popup-card .popup-close {
  position: absolute;
  top: 20px;
  right: 20px;
}
```