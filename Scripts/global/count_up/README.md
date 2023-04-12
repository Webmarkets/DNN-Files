# Count Up Script Instructions

## Description

This script animates numbers through intersection observers and CSS.

## Installation

### Add JS

1. Enter the site's files using FTP or another explorer. Go to the root directory, typically located at '/httpdocs.'
2. Open the _Default.aspx_ file with your editor of choice. Find the closing `<body>` tag, and just above it place the script tag for this module.
   ### Tag:
   ```html
   <script type="module" src="https://cdn.jsdelivr.net/gh/Webmarkets/DNN-Files/Scripts/global/count_up/count_up.min.js"></script>
   ```
   ### Example:
   ```html
   <body>
     ...
     <!-- This is the same for DNN -->
     <script src="https://cdn.jsdelivr.net/gh/Webmarkets/DNN-Files/Scripts/global/count_up/count_up.min.js"></script>
   </body>
   ```

### Set up CSS

3. Make sure to add the CSS included in `counter.css`.
4. Customize the class `.count_to_[number]` to include the value you'd like your HTML to animate up to in both the class name and variable `--num`'s value.

   - Example: To make an element count up to 100, make the following changes:
   - ```css
     .count_to_100.counting {
       --num: 100;
     }
     ```
   - This should be done for each number you'd like to animate.

5. Following the previous example, your CSS should look something like after setting up each number:

   ```css
   @property --num {
     syntax: '<integer>';
     initial-value: 0;
     inherits: false;
   }

   .counter {
     transition: --num 2s ease-out;
     counter-set: num var(--num);
   }

   .counter::before {
     content: counter(num);
   }

   .count_to_100.counting {
     --num: 100;
   }

   .count_to_200.counting {
     --num: 200;
   }
   ...
   ```

## Implementation

Once the plugin is installed, implementation is handled case-by-case for each number. Please reference step #4 in Installation for CSS changes.

1. It's best to treat the counting element as inline text. In the HTML example below, it's simply a `<span>` tag with a couple classes applied to it.

   - Add the classes `counter` and `count_to_[number]`, substituting [number] with the integer value you wish to use.

2. If you wish to add a suffix, you can include it within the element like so:

- ```html
  <span class="count_to_10">+</span>
  ```
  - This will give a final output of 10+

---

## Customization

Because this plugin only supplements basic HTML and CSS functions, any customization you would normally be able to do should still be viable.

## Sample HTML

```html
<p>
  We've had
  <span class="counter count_to_10"></span>
  days without an incident!
</p>
```
