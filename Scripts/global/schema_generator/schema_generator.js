let imageUrl = "https://boiseent.com/Portals/0/opengraphimage.jpg";
let head = document.getElementsByTagName("head")[0];
let title = document.getElementsByTagName("title")[0].textContent.trim();
let desc = document.getElementById("MetaDescription").getAttribute("content").trim();
let twitterDesc = desc;
let blog = false;
let address = {
  streetAddress: "6094 W. Emerald Street",
  locality: "Boise",
  region: "ID",
  postalCode: "83704",
  country: "US"
}
let url = window.location.href;
if (url.match("blog")) {
  blog = true;
}
let pageName = document.getElementsByTagName("h1")[0].textContent.trim();
pageName = superTrim(pageName);

while (twitterDesc.length > 200) {
  twitterDesc = twitterDesc.substring(0, twitterDesc.lastIndexOf(" "));
  twitterDesc += "...";
}
let scripts = head.getElementsByTagName("script");
// for (let i = 0; i < scripts.length; i++) {
//   if (scripts[i].getAttribute("type") == "application/ld+json") {
//     inserting = false;
// }
// }
/**
 * 
 * @param {Date} date 
 */
function formatDate(date) {
  let year = date.getUTCFullYear().toString();
  let month = (date.getUTCMonth() + 1).toString();
  let day = date.getUTCDay().toString();
  let hour = date.getUTCHours().toString();
  let minute = date.getUTCMinutes().toString();
  let second = date.getUTCSeconds().toString();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  if (hour.length < 2) {
    hour = "0" + hour;
  }
  if (minute.length < 2) {
    minute = "0" + minute;
  }
  if (second.length < 2) {
    second = "0" + second;
  }
  return `${year}-${month}-${day}T${hour}:${minute}:${second}`;

}
if (blog) {
  const blogHead = document.getElementById("detail-title").textContent;
  const blogImg = document.getElementById("head-img").getAttribute("src");
  const rawDate = document.getElementById("date-data").textContent;
  const date = new Date(Date.parse(rawDate));
  const schemaDate = formatDate(date);

  head.innerHTML = /*html*/`
  <!--Schema, OG and Twitter Cards automatically generated-->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${window.location.href}"
    },
    "headline": "${blogHead}",
    "image": [
      "${blogImg}"
    ],
    "datePublished": "${schemaDate}",
    "dateModified": "${schemaDate}"
  }
  </script>
  <!--End of automatically generated content-->` + head.innerHTML;
} else {
  head.innerHTML = /*html*/`
  <!--Schema, OG and Twitter Cards automatically generated-->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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