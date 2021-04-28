export default {
  loadStart() {
    let popups = document.getElementsByClassName("popup-card");
    for (let i = 0; i < popups.length; i++) {
      let activePopup = popups[i];
      activePopup.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
    let buttons = document.getElementsByClassName("popup-trigger");
    for (let i = 0; i < buttons.length; i++) {
      let currentButton = buttons[i];
      let overlay = document.getElementById(currentButton.getAttribute("data-target"));
      overlay.addEventListener("click", function () {
        closePopUp(overlay.id);
      });
      currentButton.addEventListener("click", function () {
        triggerPopUp(currentButton.getAttribute("data-target"));
      });
    }
    buttons = document.getElementsByClassName("popup-close");
    for (let i = 0; i < buttons.length; i++) {
      let currentButton = buttons[i];
      currentButton.addEventListener("click", function () {
        closePopUp(currentButton.getAttribute("data-target"));
      });
    }
  }
}
function triggerPopUp(target) {
  let popup = document.getElementById(target);
  popup.setAttribute("class", "overlay active");
}
function closePopUp(target) {
  let popup = document.getElementById(target);
  popup.setAttribute("class", "overlay");
}