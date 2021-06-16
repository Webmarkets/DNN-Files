function popup() {
  let popup;
  let overlay;
  let exitBtn;
  const oldDate = JSON.parse(window.localStorage.getItem("load-data"));
  const currentDate = new Date();
  if ((currentDate.getTime() - oldDate) > 2628002880 || !oldDate) {
    document.body.insertAdjacentHTML("afterbegin", `
      <div class="overlay" id="load-popup-overlay">
        <div class="load-popup" id="load-popup">
          <button class="load-popup-exit" id="load-popup-exit"><i class="fas fa-times"></i></button>
          <picture>
            <source srcset="/portals/0/images/EITG-2021-840x400-FINAL.webp" type="image/webp">
            <source srcset="/portals/0/images/EITG-2021-840x400-FINAL.jpg" type="image/jpg">
            <img src="/portals/0/images/EITG-2021-840x400-FINAL.jpg" alt="Habitat for Humanity Evening in the Garden" title="Habitat for Humanity Evening in the Garden">
          </picture>
          <a href="https://eveninginthegarden.afrogs.org/#/index" class="load-popup-cta btn-border border-accent" target="_blank" alt="Learn more about Habitat for Humanity Evening in the Garden" title="Learn more about Habitat for Humanity Evening in the Garden">Learn More</a>
        </div>
      </div>
    `);
    popup = document.getElementById("load-popup");
    overlay = document.getElementById("load-popup-overlay");
    exitBtn = document.getElementById("load-popup-exit");
    localStorage.setItem("load-data", JSON.stringify(currentDate.getTime()));
    popup.setAttribute("class", "load-popup load-popup-active");
    overlay.setAttribute("class", "load-popup-overlay load-popup-overlay-active");
    popup.addEventListener("click", (event) => { event.stopPropagation() });
    overlay.addEventListener("click", hide);
    exitBtn.addEventListener("click", hide);
  }
  function hide() {
    popup.setAttribute("class", "load-popup");
    overlay.setAttribute("class", "load-popup-overlay");
  }
}
window.addEventListener("load", () => { setTimeout(popup, 5000) });