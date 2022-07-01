// Canvas initializing
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

function calculateCanvasSize() {
  if (window.innerHeight > 600) {
    canvas.height = window.innerHeight;
  } else {
    canvas.height = 600;
  }
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
  console.log(canvas.height);
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
  "♫♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

const fontSize = 20;
let bgColor = "rgba(193, 114, 0, 1)";
let bgColor50 = "rgba(193, 114, 0, 0.5)";
let bgColorTransparent = "rgba(193, 114, 0, 0.2)";
let reset = false;
let firstTime = true;
// resets the canvas to background color
ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let hoverColor = "rgba(192, 255, 220, 0.8)";
let white = "rgba(255, 255, 255, 0.5)";
let white50 = "rgba(255, 255, 255, 0.3)";
let white20 = "rgba(255, 255, 255, 0.1)";
let transparent = "rgba(255, 255, 255, 0)";

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

let mouseDistance = 50;

let hover = false;
let lastTime = 0;
const fps = 10;
const nextFrame = 1000 / fps;
let timer = 0;

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
    ctx.font = fontSize + "px monospace";
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
    ctx.fillStyle = bgColorTransparent;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // loops threw all the rows
    for (let i = 0; i < lettersArray.length; i++) {
      allowColumnAnimation(i);
      if (lettersArray[i].go == true) {
        mouseHover(i);

        lettersArray[i].draw();
        lettersArray[i].y += fontSize;
        ctx.fillStyle = bgColor50;
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
      // if (lettersArray[i].y > maxAnimationHeight) {
      //   if (Math.random() > 0.85) {
      //     lettersArray[i].go = false;
      //     lettersArray[i].y = fontSize;
      //   }
      // }
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
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  lettersArray = createArray();
  maxAnimationHeight = findMaxHeightOfAninmation();
  animate(0);
});
