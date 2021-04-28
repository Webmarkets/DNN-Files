import delay from "./plugins/delayed_load.js";

async function startUp() {

}
async function priorityStart() {
  delay.loadStart();
}

window.addEventListener("load", startUp);
priorityStart();