/**
 * 
 * @param {SchemaOptions} options 
 */
export default function generateSchema (options) {
  let imageUrl = options.imageUrl;
  let blog = false;
  let rawDate;

  if (document.getElementById("date-data") && document.getElementById("date-data").textContent) {
    rawDate = document.getElementById("date-data").textContent;
    if (rawDate) {
      blog = true;
    }
  }

  let pageName = document.getElementsByTagName("h1")[0].textContent.trim();
  pageName = superTrim(pageName);
  /**
   * 
   * @param {Date} date 
   */
  function formatDate (date) {
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
    const date = new Date(Date.parse(rawDate));
    const schemaDate = formatDate(date);
    let author = options.businessName;
    let type = "Organization";
    if (options.authorsShown) {
      author = document.getElementById("data-author").textContent;
      type = "Person";
    }

    document.head.innerHTML = /*html*/`
  <!--Schema, OG and Twitter Cards automatically generated-->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${window.location.href}"
    },
    "headline": "${superTrim(blogHead)}",
    "image": [
      "${blogImg}"
    ],
    "datePublished": "${schemaDate}",
    "dateModified": "${schemaDate}",
    "author": {
      "@type": "${type}",
      "name": "${author}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "${options.businessName}",
      "logo": {
        "@type": "ImageObject",
        "url": "${options.logoUrl}"
      }
    }
  }
  </script>
  <!--End of automatically generated content-->` + document.head.innerHTML;
  } else {
    document.head.innerHTML = /*html*/`
  <!--Schema, OG and Twitter Cards automatically generated-->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${options.businessName}",
    "image": "${imageUrl}",
    "@id": "${window.location.href}",
    "url": "${window.location.href}",
    "telephone": "2083021000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "${options.streetAddress}",
      "addressLocality": "${options.locality}",
      "addressRegion": "${options.region}",
      "postalCode": "${options.postalCode}",
      "addressCountry": "${options.country}"
    }
  }
  </script>
  <!--End of automatically generated content-->` + document.head.innerHTML;
  }
  function superTrim (initString) {
    let newString = "";
    let trimIndexes = [];
    let start = -1;
    initString = initString.replace(/\t|\n|\r|\n\r|↵/, "");
    for (let i = 0; i < initString.length; i++) {
      if (initString[i] != " " && start == -1) {
        start = i;
      } else if (initString[i] == " " && start != -1) {
        trimIndexes.push({start: start, end: i});
        start = -1;
      } else if (i == initString.length - 1 && start != -1) {
        trimIndexes.push({start: start, end: i + 1});
      }
    }
    trimIndexes.forEach(c => {
      newString += initString.substring(c.start, c.end) + " ";
    });
    return newString.trim();
  }
}