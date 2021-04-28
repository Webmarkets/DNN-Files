# Text Slider

## Description
  This plugin allows you to create vertically sliding text that will rotate through a list of text blocks. 

## Installation
  Download the `text_slider.js` file from github [here](https://github.com/Webmarkets/Text-Slider), and move it into your `Scripts/plugins` folder on FTP. See the [general installation instructions](https://github.com/Webmarkets/Plugins-Module/blob/main/README.md) for more information on that process. This plugin will need to load in the standard `startUp()` function.

## Implementation

  The text slider operates in existing text elements, like an `<h2>` tag. This means all code for the text slider will be located inside of your text tag.
  ___
  1. Add the class `rotate-site` to the text tag you intend the text slider to operate in.
  2. Add an HTML element like `<span>` where you want the text to slide. Give this element the class of `rotate-parent`. 
  3. Add each sliding text option inside of a `<span>` tag, ordered as you please.
  ### Example:
  ```html
  <div class="example-column">
    <h2 class="rotate-site">Text Slides to my right: <span class="rotate-parent">
        <span>Text1</span>
        <span>Text2</span>
        <span>Text3</span>
      </span></h2>
  </div>
  ```
  ___
## Customization
  The transition time and standard styling will be the easiest to customize using CSS. If you want to alter the functionality more significantly, it may be more difficult to do using just HTML and CSS.

## CSS
```css
.rotate-parent {
  overflow: hidden;
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.active-rot {
  position: absolute;
  top: 0px;
  transition: 1s all;
  width: max-content;
}
.next-rot {
  position: absolute;
  top: 100%;
  color: transparent;
  transition: 1s all;
  width: max-content;
}
.last-rot {
  position: absolute;
  top: -100%;
  transition: 1s all;
  color: transparent;
}
```