# Background Video
## Description
  This plugin automatically resizes HTML video elements to find the best fit for the background of a given element, and displays the videos as a background element.
## Installation
  Download the `text_slider.js` file from github [here](https://github.com/Webmarkets/Background-Video), and move it into your `Scripts/plugins` folder on FTP. See the [general installation instructions](https://github.com/Webmarkets/Plugins-Module/blob/main/README.md) for more information on that process. This plugin will need to load in the standard `startUp()` function.
## Implementation
___
  1. Add the class `back-vid-parent` to the HTML element you want to have the background video.
  2. Add a `<video>` tag as a child element of the element you gave the class of `back-vid-parent`. It doesn't matter where you put the `<video>` tag as long as it's a child of your background video element.
  3. Give the `<video>` tag the class of `back-vid`, and add the attributes `playsinline`, `muted`, `autoplay`, and `loop`. The `src` attribute will need to be filled out with your video url, as usual.
  ### Example:
  ```html
  <div class="background back-vid-parent">
    <!-- NOTE: Check for HTML attributes if you need it to do anything else -->
    <video class="back-vid" playsinline muted autoplay loop src="/portals/0/videos/movie.mp4"></video>
    <div class="example-container">
      ...
    </div>
  </div>
  ```
___

## Customization
Given how basic this script is, there should be little customization you won't be able to do because of this script. 
## CSS
```css
.back-vid {
  z-index: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 100%;
  transform: translate(-50%, -50%);
}

.back-vid-parent {
  overflow: hidden;
  z-index: 1;
  position: relative;
}
```