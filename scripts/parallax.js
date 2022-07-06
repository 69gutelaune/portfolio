const parallaxForeground = document.querySelector("#galaxy-section");
console.log(parallaxForeground);

const parallaxForegroundPosition = parallaxForeground.getBoundingClientRect();

function positionSection() {
  console.log(
    parallaxForegroundPosition.top,
    parallaxForegroundPosition.right,
    parallaxForegroundPosition.bottom,
    parallaxForegroundPosition.left
  );
}

document.addEventListener("scroll", () => {
  console.log("hi");
});
