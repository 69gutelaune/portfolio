// Canvas initializing
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

function calculateCanvasSize() {
  canvas.height = canvas.clientHeight;
  // if (window.innerHeight > 500) {
  //   canvas.height = window.innerHeight;
  // } else {
  //   canvas.height = 500;
  // }
  canvas.width = window.innerWidth;
}
calculateCanvasSize();

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});
function findMaxHeightOfAninmation() {
  if (canvas.height > 400) {
    return 250;
  }
  return canvas.height / 2;
}
let maxAnimationHeight = findMaxHeightOfAninmation();
let minAnimationHeight = 600;

const symbolsArray =
  "♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

const fontFamily = "Verdana";

let fontSize = 20;
function calculateFontSize() {
  if (window.innerWidth > 1000) {
    fontSize = 20;
  } else {
    fontSize = 15;
  }
}
calculateFontSize();
//
//
//     COLORS
//
//

let bgColor = "rgba(221, 129, 21, 1)";
let bgColor20 = "rgba(221, 129, 21, 0.2)";
let bgColor50 = "rgba(221, 129, 21, 0.5)";

let bgBottomColor = "rgba(244, 178, 70, 1)";
let bgBottomColor20 = "rgba(244, 178, 70, 0.2)";
let bgBottomColor50 = "rgba(244, 178, 70, 0.5)";

let hoverColor = "rgba(192, 255, 220, 1)";
let white = "rgba(255, 255, 255, 0.5)";
let white50 = "rgba(255, 255, 255, 0.3)";
let white20 = "rgba(255, 255, 255, 0.1)";
let transparent = "rgba(255, 255, 255, 0)";

//
//
//
//     GRADIENTS
//
//
//
let gradient = ctx.createLinearGradient(
  canvas.width / 2,
  0,
  canvas.width / 2,
  canvas.height
);

gradient.addColorStop(0, white);
gradient.addColorStop(0.2, white50);
gradient.addColorStop(0.4, white20);
gradient.addColorStop(1, transparent);

let backgroundGradient = ctx.createLinearGradient(
  canvas.width / 2,
  0,
  canvas.width / 2,
  canvas.height
);
backgroundGradient.addColorStop(0, bgColor);
backgroundGradient.addColorStop(1, bgBottomColor);

let backgroundGradient20 = ctx.createLinearGradient(
  canvas.width / 2,
  0,
  canvas.width / 2,
  canvas.height
);
backgroundGradient20.addColorStop(0, bgColor20);
backgroundGradient20.addColorStop(1, bgBottomColor20);

function updateGradients() {
  backgroundGradient = ctx.createLinearGradient(
    canvas.width / 2,
    0,
    canvas.width / 2,
    canvas.height
  );
  backgroundGradient.addColorStop(0, bgColor);
  backgroundGradient.addColorStop(1, bgBottomColor);

  backgroundGradient20 = ctx.createLinearGradient(
    canvas.width / 2,
    0,
    canvas.width / 2,
    canvas.height
  );
  backgroundGradient20.addColorStop(0, bgColor20);
  backgroundGradient20.addColorStop(1, bgBottomColor20);
}

let reset = false;
let firstTime = true;

let mouseDistance = 50;

let hover = false;
let lastTime = 0;
const fps = 6;
const nextFrame = 1000 / fps;
let timer = 0;

function overpaintBackground() {
  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
overpaintBackground();

class Letter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.go = false;
    this.firstTime = true;
  }
  draw() {
    if (hover == false) {
      ctx.fillStyle = gradient;
    } else {
      ctx.fillStyle = hoverColor;
    }
    ctx.textAlign = "center";
    ctx.font = fontSize + "px " + fontFamily;
    ctx.fillText(
      symbolsArray.charAt(Math.floor(Math.random() * symbolsArray.length)),
      this.x,
      this.y
    );
  }
}

// creating array for all the columns

function createArray() {
  let array = [];
  for (let i = 0; i < canvas.width / fontSize; i++) {
    array[i] = new Letter(fontSize * i, fontSize);
  }
  return array;
}
let lettersArray = createArray();

function allowColumnAnimation(i) {
  if (lettersArray[i].go == false) {
    if (lettersArray[i].firstTime == true) {
      if (Math.random() > 0.93) {
        lettersArray[i].go = true;
        lettersArray[i].firstTime = false;
      }
    } else {
      if (Math.random() > 0.8) {
        lettersArray[i].go = true;
      }
    }
  }
}

function mouseHover(i) {
  if (
    lettersArray[i].x - mouse.x <= mouseDistance &&
    lettersArray[i].x - mouse.x >= -mouseDistance &&
    lettersArray[i].y - mouse.y <= mouseDistance &&
    lettersArray[i].y - mouse.y >= -mouseDistance
  ) {
    hover = true;
  } else {
    hover = false;
  }
}

function resetLetterToBeginning(i) {
  if (Math.random() > 0.85) {
    lettersArray[i].go = false;
    lettersArray[i].y = fontSize;
  }
}

function animate(timeStamp) {
  const deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  requestAnimationFrame(animate);

  if (timer > nextFrame) {
    // mattens out the underlying characters
    ctx.fillStyle = backgroundGradient20;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // loops threw all the rows
    for (let i = 0; i < lettersArray.length; i++) {
      allowColumnAnimation(i);
      if (lettersArray[i].go == true) {
        mouseHover(i);

        lettersArray[i].draw();
        lettersArray[i].y += fontSize;
        ctx.fillStyle = backgroundGradient20;
        ctx.fillRect(
          lettersArray[i].x - fontSize / 2,
          lettersArray[i].y - fontSize * 12,
          fontSize,
          fontSize * 2
        );
      }
      if (lettersArray[i].y > maxAnimationHeight) {
        resetLetterToBeginning(i);
      }
    }
    timer = 0;
  } else {
    timer += deltaTime;
  }
}

// loop threw all the arrays, if leter[i].go = true .....
animate(0);

// ctrate a function that listens to resizing the window
window.addEventListener("resize", () => {
  calculateCanvasSize();
  calculateFontSize();
  updateGradients();
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  lettersArray = createArray();
  maxAnimationHeight = findMaxHeightOfAninmation();
  overpaintBackground();
  animate(0);
});
