let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene, {
  relativeInput: true,
});

// ---------------------------- SECTIONS
const heroSection = document.querySelector("#hero-section");

// ---------------------------- SINGLE OBJECTS
const sun = document.querySelector(".parallax-sun");
const sunInit = 20;
const castle1 = document.querySelector(".parallax-left-castle");
const castle2 = document.querySelector(".parallax-right-castle");
const castleInit = 0;
const clouds3 = document.querySelector(".parallax-clouds-background");
const clouds3Init = 20;
const bridge = document.querySelector(".parallax-bridge");
const bridgeInit = 20;
const trees2 = document.querySelector(".parallax-trees-background");
const trees2Init = 36;
const mountain2 = document.querySelector(".parallax-mountains");
const mountain2Init = 17;
const clouds2 = document.querySelector(".parallax-clouds-front");
const clouds2Init = 35;
const trees = document.querySelector(".parallax-forest-front");
const treesInit = 23;
const houses = document.querySelector(".parallax-houses");
const housesInit = 65;
const clouds = document.querySelector(".parallax-clouds");
const cloudsInit = document.querySelector(".parallax-clouds");
const mountain = document.querySelector(".parallax-mountains-front");
const mountainInit = 55;

function initialScale() {
  sun.style.marginTop = bridgeInit + "vw";
  castle1.style.marginTop = castleInit + "vw";
  castle2.style.marginTop = castleInit + "vw";
  clouds3.style.marginTop = clouds3Init + "vw";
  trees2.style.marginTop = trees2Init + "vw";
  bridge.style.marginTop = bridgeInit + "vw";
  mountain2.style.marginTop = mountain2Init + "vw";
  clouds2.style.marginTop = clouds2Init + "vw";
  trees.style.marginTop = treesInit + "vw";
  houses.style.marginTop = housesInit + "vw";
  mountain.style.marginTop = mountainInit + "vw";
  // missing foreground
}
initialScale();

function parallaxScroll(scrollParameter) {
  castle1.style.marginTop = castleInit - scrollParameter / 1.5 + "vw";
  castle2.style.marginTop = castleInit - scrollParameter / 1.5 + "vw";
  clouds3.style.marginTop = clouds3Init - scrollParameter * 1.6 + "vw";
  trees2.style.marginTop = trees2Init - scrollParameter * 2.2 + "vw";
  bridge.style.marginTop = bridgeInit - scrollParameter * 3.2 + "vw";
  mountain2.style.marginTop = mountain2Init - scrollParameter * 5 + "vw";
  clouds2.style.marginTop = clouds2Init - scrollParameter * 7.5 + "vw";
  trees.style.marginTop = treesInit - scrollParameter * 10 + "vw";
  houses.style.marginTop = housesInit - scrollParameter * 20 + "vw";
  mountain.style.marginTop = mountainInit - scrollParameter * 30 + "vw";
}

window.addEventListener("scroll", () => {
  let scrollPosition = 0;
  let proportions = window.innerHeight - window.innerWidth;
  console.log(proportions);

  if (proportions <= -24) {
    scrollPosition = scrollY - heroSection.clientHeight / 1.4;
  } else if (proportions >= -25 && proportions < 299) {
    scrollPosition = scrollY - heroSection.clientHeight / 2;
  } else if (proportions >= 300) {
    scrollPosition = scrollY - heroSection.clientHeight / 6;
  } else if (proportions >= 500) {
    scrollPosition = scrollY - heroSection.clientHeight / 10;
  }

  //   else {
  //     scrollPosition = scrollY - heroSection.clientHeight / 2;
  //   }

  let scrollParameter = (scrollPosition / window.innerWidth) * 10;

  // and somehow make sure that the following section adapts to that (also -margin on section???)

  if (scrollPosition > 0) {
    sun.style.marginTop = bridgeInit + "vw";
    parallaxScroll(scrollParameter);
    // missing foreground
  }
});

// machen dir dein eigenes Bild von mir!
// und dann ich im rahmen zum anmalen
// und dann eine Paint app mit meinem Foto darin ( oder man kann mir hüte anziehen oder so)
