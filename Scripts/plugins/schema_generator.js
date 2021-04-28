let imageUrl = "https://boiseent.com/Portals/0/opengraphimage.jpg";
let head = document.getElementsByTagName("head")[0];
let title = document.getElementsByTagName("title")[0].textContent.trim();
let desc = document.getElementById("MetaDescription").getAttribute("content").trim();
let twitterDesc = desc;
let address = {
  streetAddress: "6094 W. Emerald Street",
  locality: "Boise",
  region: "ID",
  postalCode: "83704",
  country: "US"
}
let pageName = "page name";
// let pageName = await document.getElementsByTagName("h1")[0].textContent.trim();
// pageName = superTrim(pageName);

while (twitterDesc.length > 200) {
  twitterDesc = twitterDesc.substring(0, twitterDesc.lastIndexOf(" "));
  twitterDesc += "...";
}
let scripts = head.getElementsByTagName("script");
let inserting = true;
for (let i = 0; i < scripts.length; i++) {
  if (scripts[i].getAttribute("type") == "application/ld+json") {
    inserting = false;
  }
}
if (inserting) {
  head.innerHTML = `<!--Schema, OG and Twitter Cards automatically generated-->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:title" content="${pageName}">
      <meta name="twitter:description" content="${desc}">
      <meta name="twitter:image" content="${imageUrl}">
      <meta name="twitter:image:alt" content="${title}">
      <meta property="og:type" content="business.business">
      <meta property="og:title" content="${pageName}">
      <meta property="og:url" content="${window.location.href}">
      <meta property="og:image" content="${imageUrl}">
      <meta property="og:description" content="${desc}">
      <meta property="business:contact_data:street_address" content="${address.streetAddress}">
      <meta property="business:contact_data:locality" content="${address.locality}">
      <meta property="business:contact_data:region" content="${address.region}">
      <meta property="business:contact_data:postal_code" content="${address.postalCode}">
      <meta property="business:contact_data:country_name" content="${address.country}">
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "Otolaryngologic",
          "name": "${pageName}",
          "image": "${imageUrl}",
          "@id": "${window.location.href}",
          "url": "${window.location.href}",
          "telephone": "2083021000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "${address.streetAddress}",
            "addressLocality": "${address.locality}",
            "addressRegion": "${address.region}",
            "postalCode": "${address.postalCode}",
            "addressCountry": "${address.country}"
          }
        }
      </script>
      <!--End of automatically generated content-->` + head.innerHTML;
}

function superTrim(initString) {
  let newString = "";
  let trimIndexes = [];
  let start = -1;
  initString = initString.replace(/\t|\n|\r|\n\r|↵/, "");
  for (let i = 0; i < initString.length; i++) {
    if (initString[i] != " " && start == -1) {
      start = i;
    } else if (initString[i] == " " && start != -1) {
      trimIndexes.push({ start: start, end: i });
      start = -1;
    } else if (i == initString.length - 1 && start != -1) {
      trimIndexes.push({ start: start, end: i + 1 });
    }
  }
  trimIndexes.forEach(c => {
    newString += initString.substring(c.start, c.end) + " ";
  });
  return newString.trim();
}
