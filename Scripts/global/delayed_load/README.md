# Delayed Loading Script Instructions

## Description

This script defers the loading of images until after all the important elements of the website have loaded. If the browser supports webP, it will use webP files instead of jpg or png files. It will also select different images based on defined breakpoints of browser viewport width.

## Installation
1. Enter the site's files using FTP or another explorer. Go to the root directory, typically located at '/httpdocs.'
2. Open the *Default.aspx* file with your editor of choice. Find the closing `<body>` tag, and just above it place the script tag for this module.
    ### Example:
    ```html
    <body>
      ...
      <!-- This is the same for DNN -->
      <script src="https://cdn.jsdelivr.net/gh/Webmarkets/delayed-load/delayed_load.min.js"></script>
    </body>
    ```
## Implementation
Once the plugin is installed, implementation is handled case-by-case for each image.
___
1. Source images: You'll want to create a standard and webP image for every breakpoint you intend to use. For example if you wanted a normally sized logo to break at 992px you'll need to create four files: `logo.png`, `logo.webp`, `logo-s.png`, and `logo-s.webp`. The base image url will be the url you use in the HTML(`logo.png`).
2. Creating delayed images:
    + ### Standard Images:
        You'll need to create an HTML img tag with an undefined `src` attribute, with the `delay` attribute having the image url.
        #### Example:
        ```html
        <img delay="/portals/0/images/logo.png">
        ```
    + ### Background Images:
        The element that you want to have the background image will need to have a class of `img-back`, and the image url will need to be placed in the attribute `bg-img`.
        #### Example:
        ```html
        <div class="img-back" bg-img="/portals/0/images/logo.png"></div>
        ```
3. Settings for delayed images:
    + ### Image size breakpoints:
        There are two breakpoints in this plugin: `sm` at 992px and `md` at 1440px. The breakpoint `sm` is interchangeable with the `s`, and the breakpoint `md` with `m` when placing in the `alt-size` attribute. Include each breakpoint you want this image to display differently in the `alt-size` attribute, with a space separating the `sm` and `md` indicators. Alternate images at the `md` breakpoint will need to have '-m' appended to the end of their url for both the standard and webp versions of the image. For images with a breakpoint at `sm` you'll need to append '-s' to the end of the source image's url.
        #### Example:
        ```html
        <img alt-size="sm md" delay="/portals/0/images/logo.png">
        <!-- Alternative tag -->
        <img alt-size="s, m" delay="/portals/0/images/logo.png">
        ```
        This will display logo.png on screens larger than 1440px. Screens between 992px and 1440px will display logo-m.png, and any screen smaller than 992px will display logo-s.png. It will display the webp alternatives instead if the device supports webp.
    + ### Disable webP:
        You may need an image to only display as its standard file format for whatever reason. If this is the case, you'll want to add the attribute `no-webp` with a value of `true` to your image or background element.
        #### Example: 
        ```html
        <img delay="/portals/0/images/logo.png" no-webp="true">
        ```
    + ### Priority load:
        In cases where you want an image to load normally with the rest of the site, but still load as a webp file or have breakpoints, you'll want to add the `priority` attribute to your element, with a value of `true`.
        #### Example:
        ```html
        <div bg-img="/portals/0/images/home-hero.jpg" alt-size="sm md" priority="true" class="img-back background">
          <div class="example-container home-header">
            ...
          </div>
        </div>
        ```
        If these features aren't important, you may want to simply use the `src` attribute for images instead.
___
## Customization
  Because this plugin only supplements basic HTML and CSS functions, any customization you would normally be able to do should still be viable.
## Sample HTML
### Image:
```html
<img alt-size="sm md" priority="true" src="" delay="/portals/0/images/priority-image.jpg">
```
### Background Image: 
```html
<div bg-img="/portals/0/images/background_image.jpg" class="background img-back">
  <div class="example-container">
    ...
  </div>
</div>
```