function backVid() {
  let backVideos = document.getElementsByClassName("back-vid"), vidParents = document.getElementsByClassName("back-vid-parent");
  for (let e = 0; e < backVideos.length; e++) {
    function sizeVid() {
      (i = backVideos[e].clientWidth / backVideos[e].clientHeight) < vidParents[e].clientWidth / vidParents[e].clientHeight ? backVideos[e].style = "min-width:100%" : backVideos[e].style = "min-width:" + vidParents[e].clientHeight * i + "px"
    }
    let i = 1;
    backVideos[e].addEventListener("canplay", sizeVid), window.addEventListener("resize", sizeVid);
  }
}
backVid();