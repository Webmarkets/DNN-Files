# Popup On Load

## Description

This script will inject a popup into a website 5 seconds after the site has loaded.

## Installation
1. Enter the site's files using FTP or another explorer. Go to the root directory, typically located at '/httpdocs.'
2. Create a new directory called 'Scripts,' if it's not alread created. Upload the `load-popup.js` file in this github to the 'Scripts' directory.
3. Open the *Default.aspx* file with your editor of choice. Find the closing `<body>` tag, and just above it place the script tag for this module.
    ### Tag:
    ```html
      <script src="/scripts/load-popup.js"></script>
    ```
    ### Example:
    ```html
    <body>
      ...
      <!-- This is the same for DNN -->
      <script src="/scripts/load-popup.js"></script>
    </body>
    ```
## Implementation
Once the plugin is installed, implementation is custom coded.
___
1. An example popup is built into the js file. You'll need to paste your custom code in this field, replacing the template.
2. Make sure to add the default CSS, it should save you some time.
___
## Customization
  All customization can be handled by editing the supplied HTML and CSS, or coding it yourself.
## Sample HTML
### Basic popup:
```html
  <div class="overlay" id="load-popup-overlay">
    <div class="load-popup" id="load-popup">
      <button class="load-popup-exit" id="load-popup-exit"><i class="fas fa-times"></i></button>
      <picture>
        <source srcset="/portals/0/images/EITG-2021-840x400-FINAL.webp" type="image/webp">
        <source srcset="/portals/0/images/EITG-2021-840x400-FINAL.jpg" type="image/jpg">
        <img src="/portals/0/images/EITG-2021-840x400-FINAL.jpg" alt="Habitat for Humanity Evening in the Garden" title="Habitat for Humanity Evening in the Garden">
      </picture>
      <a href="https://eveninginthegarden.afrogs.org/#/index" class="load-popup-cta btn-border border-accent" target="_blank" alt="Learn more about Habitat for Humanity Evening in the Garden" title="Learn more about Habitat for Humanity Evening in the Garden">Learn More</a>
    </div>
  </div>
```