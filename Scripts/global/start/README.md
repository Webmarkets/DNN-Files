# Plugins Module

## Description

This script will automatically run plugin scripts you've installed.

## Installation
___
  1. Download `start.js` from [github](https://github.com/Webmarkets/Plugins-Module).
  2. Enter the site's files using FTP or another explorer. Make a directory called 'Scripts' in the site's root directory. This is typically '/httpdocs.'
  3. Navigate into the 'Scripts' directory you just made. Upload the `start.js` file you just downloaded into this directory.
  4. Make another directory called 'plugins' in the 'Scripts directory. This is where you should place your plugin scripts you want the site to use.
  5. Navigate back to the site's root directory. Find the site's default HTML file. For DNN, this file should be called `Default.aspx`. Open it with your IDE, and find the `</body>` closing tag. Just above this tag, place this script tag: `<script src="/scripts/start.js" rel="preload" type="module"></script>`

      ### Example:
      ```html
      <body>
        ...
        <!-- This is the same for DNN -->
        <script src="/Scripts/start.js" rel="preload" type="module"></script>
      </body>
      ```

___
## Implementation
___
1. Now that you've installed the plugins script, you'll want to add the plugins. For each plugin, download the JavaScript file from github [here](https://github.com/Webmarkets) and add the javascript file to the 'plugins' folder you made earlier. 
2. Once you've uploaded all the plugin files to the server, you'll need to edit the start.js file with your editor. Follow these steps for each plugin you want to install: 
    + Make sure to read each plugin's instructions before you install them. Some plugins will need to be initialized in the `priorityStart()` function, and some will need to be initialized in the `startUp()` function.
    + Decide on a unique camelCased name for each plugin you want to install. Use this name instead of the [name] placeholder in the model provided.
    + Copy the Javascript file name, and import it in start.js. Use this file name instead of the [fileName] placeholder in the model provided.
    + For each plugin, there should be one `[name].loadStart()` line, and one `import [name] from "./plugins/[fileName]"` line.
        ```js
        import [name] from "./plugins/[fileName]";//The initial name doesn't matter too much, but the text in quotes needs to be the plugin's file name.
        //Standard Script Execution
        async function startUp() {
          [name].loadStart();//Make sure this matches the name you just made above.
        }
        //Priority Script Execution
        async function priorityStart() {
          [name].loadStart();//If a JS file needs to be prioritized, place the .loadStart() line here.
        }
        //You shouldn't need to edit this code.
        window.addEventListener("load", startUp);
        priorityStart();
        ```
___

### Example:

  ```js
  import delay from "./plugins/delayed_load.js";
  import popup from "./plugins/popup.js";
  async function startUp() {
    popup.loadStart();
  }
  async function priorityStart() {
    delay.loadStart();
  }
  window.addEventListener("load", startUp);
  priorityStart();
  ```