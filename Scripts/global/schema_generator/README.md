# Schema Generator

## Description

This script generates JSON Schema for the DNN site. There is a bit more setup involved here since you have to pass in the default Schema values into an object so please pay careful attention to not just copy and paste the template below.

## Installation

1. If you haven't already, add a `start.js` script to the site head tag and your Scripts folder.

2. Once you have a `start.js` file you'll want to add the import below to the top of the file.

```js
import generateSchema from "./plugins/schema_generator.js";
```

3. Add the `generateSchema()` function with the template below

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

4. Fill out the information as needed for the business

5. Save your changes and upload through FTP

6. Reload the page and inspect to make sure a `<!--Schema, OG and Twitter Cards automatically generated-->` was added to the head tag with the scrip below it
