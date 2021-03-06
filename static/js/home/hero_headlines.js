// ------------------------------- H2
// ------------------------------- H2
// ------------------------------- H2
// ------------------------------- H2
// ------------------------------- H2

const myNameHtml = document.querySelector("#hero-h2");
const h2Content = "Georgiy Stier";
const leftMarkup = document.querySelector(".left-tag-subhead");
const rightMarkup = document.querySelector(".right-tag-subhead");

let indexG = 0;
let currentTextG = "";
let letterG = "";
function typeGeorgiy() {
  let randomTimeout = Math.floor(Math.random() * 200 + 30);
  currentText = h2Content;

  letterG = currentText.slice(0, ++indexG);
  myNameHtml.textContent = letterG;
  if (letterG.length !== currentText.length) {
    setTimeout(typeGeorgiy, randomTimeout);
  } else {
    console.log(leftMarkup.style);

    leftMarkup.style.opacity = "100%";
    rightMarkup.style.opacity = "100%";

    // leftMarkup.classList.remove("invisible");
    // leftMarkup.classList.add("visible");
    // rightMarkup.classList.remove("invisible");
    // rightMarkup.classList.add("visible");
  }
}

// ------------------------------- JUMBO
// ------------------------------- JUMBO
// ------------------------------- JUMBO
// ------------------------------- JUMBO

const jumboH1 = document.querySelector("#hero-jumbo");
const jumboContent = "Web-Development";

let index = 0;
let currentText = "";
let letter = "";

// Headline Jumbo Typing Function
(function type() {
  let randomTimeout = Math.floor(Math.random() * 200 + 30);
  currentText = jumboContent;
  letter = currentText.slice(0, ++index);
  jumboH1.textContent = letter;
  if (letter.length !== currentText.length) {
    setTimeout(type, randomTimeout);
  } else {
    //   adding spans for the glitch effect to work!!!
    jumboH1.innerHTML = `Web-Development
    <span aria-hidden="true">Web-Development</span><span  aria-hidden="true">Web-Development</span>`;
    jumboH1.classList.add("glitch");
    jumboH1.classList.remove("jumboTypingEffect");
    setTimeout(typeGeorgiy, randomTimeout);
  }
})();

// -------------------------------------------------------------- Text opacity on scroll down ( 1  to 0)
const headlines = document.querySelector("#hero-heaadlines");

function jumboOpacity() {
  console.log("yo");
  if (window.scrollY >= window.innerHeight / 5) {
    headlines.style.opacity = 0;
  } else {
    headlines.style.opacity = 1;
  }
}
document.addEventListener("resize", () => {
  console.log("hi");
});
