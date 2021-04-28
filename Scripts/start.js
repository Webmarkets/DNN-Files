import delay from "./plugins/delayed_load.js";
// import schema from "./plugins/schema_generator.js";

function setLinks() {
  let links = [];
  let scripts = [
    {
      scriptSrc: "https://kit.fontawesome.com/2da07fc9df.js",
      scriptCrossOrigin: "anonymous"
    }
  ];
  let head = document.getElementsByTagName('head')[0];
  for (let i = 0; i < links.length; i++) {
    let cssLink = document.createElement('link');
    cssLink.rel = links[i].rel;
    cssLink.href = links[i].href;
    cssLink.integrity = links[i].integrity;
    cssLink.crossOrigin = links[i].crossOrigin;
    head.parentNode.insertBefore(cssLink, head);
  }
  for (let i = 0; i < scripts.length; i++) {
    let scriptTag = document.createElement('script');
    scriptTag.src = scripts[i].scriptSrc;
    scriptTag.crossOrigin = scripts[i].scriptCrossOrigin;
    head.parentNode.insertBefore(scriptTag, head);
  }
}

async function startUp() {
  setLinks();

}
async function priorityStart() {
  delay.loadStart();
  // schema.loadStart();
}




window.addEventListener("load", startUp);
priorityStart();