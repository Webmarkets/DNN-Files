# Schema Generator

## Description

This script generates JSON Schema for the DNN site. There is a bit more setup involved here since you have to pass in the default Schema values into an object so please pay careful attention to not just copy and paste the template below.

## Script Setup

1. If you haven't already, add a `start.js` script to the site head tag and your Scripts folder.

2. Once you have a `start.js` file you'll want to add the import below to the top of the file.

```js
import generateSchema from "./plugins/schema_generator.js";
```

3. Add the `generateSchema()` function with the template below to the startUp fucntion in your start.js file

```js
 generateSchema({
    imageUrl: "https://webmarkets.com/Portals/0/opengraphimage.jpg",
    streetAddress: "5598 N Eagle Rd Suite 101",
    locality: "Boise",
    region: "ID",
    postalCode: "83713",
    country: "US",
    businessName: "webmarkets",
    logoUrl: "https://boiseent.com/Portals/0/Logo.png",
    authorsShown: false
  });
```

Here is an example `start.js` file with the `generateSchema()` function

```js
import generateSchema from "./plugins/schema_generator.js";

async function startUp() {
  generateSchema({
    imageUrl: "https://boiseent.com/Portals/0/opengraphimage.jpg",
    streetAddress: "6094 W. Emerald Street",
    locality: "Boise",
    region: "ID",
    postalCode: "83704",
    country: "US",
    businessName: "S. Albertson Dermatology",
    logoUrl: "https://boiseent.com/Portals/0/Boise-ENT-Logo-NoBack-TM.png",
    authorsShown: false
  });
}
async function priorityStart() {

}

window.addEventListener("load", startUp);
priorityStart();
```

4. Fill out the information as needed for the business

5. Save your changes and upload through FTP

6. Reload the page and inspect to make sure a `<!--Schema, OG and Twitter Cards automatically generated-->` was added to the head tag with the script below it

## DNN Blog Setup

For sites with an active xBlog module follow the steps below to allow the schema generator to generate blog specific schema tags

1. Navigate to the file in the following directory of the site

```
httpdocs/DesktopModules/DNNGo_xBlog/Skins/Classic/view_article_info.html
```

2. Add this span tag to the page. You can place it near the title tag of the blog post. Location isn't very important as long as it is inside the template.

```html
<span style="display:none;" id="date-data">$DataItem.PublishTime</span>
```

3. Save your changes and upload through FTP

4. Reload the page and inspect to make sure a `<!--Schema, OG and Twitter Cards automatically generated-->` was added to the head tag with the script below it. This script should look different than the default schema and be pulling the publish date, modified date, blog title, etc.

