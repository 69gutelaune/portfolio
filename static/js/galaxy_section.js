let parallaxForeground = document.querySelector(".parallax-foreground-image");
const parallaxSection = document.querySelector("#parallax-section");
let parallaxForegroundPosition = getCoords(parallaxForeground);
// parallaxSection.style.height = parallaxForegroundPosition.bottom + "px";

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionSection() {
  console.log("positioning!");

  parallaxForegroundPosition = getCoords(parallaxForeground);
  parallaxSection.style.height = parallaxForegroundPosition.bottom + "px";
}

document.addEventListener("scroll", () => {
  positionSection();
});
document.addEventListener("resize", () => {
  positionSection();
});

// ---------------------- adding event listeners!
// function updateParallax() {}
// var updateParallaxWaiting = false;

// document.addEventListener("scroll", () => {
//   if (updateParallaxWaiting) {
//     return;
//   }
//   updateParallaxWaiting = true;
//   updateParallax();

//   setTimeout(function () {
//     updateParallaxWaiting = false;
//   }, 10);
// });

// ---------- to do!
// learn how to import variables from other scripts
// - make this load later
