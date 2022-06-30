// Canvas initializing
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbolsArray =
  "♫♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

const fontSize = 25;
const animationSpeed = 150;

// Column: create an Object function that draws vertical Letters
//
class Letter {
  constructor(x, y) {
    this.character = symbolsArray.charAt(
      Math.floor(Math.random() * symbolsArray.length)
    );
    this.x = x;
    this.y = y;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = fontSize + "px monospace";
    ctx.fillText(this.character, this.x, this.y);
  }
}

let countdown = animationSpeed;
let xPosition = fontSize;
let yPosition = fontSize;
let lettersArray = [];

function drawColumn() {
  function animate(timeStamp) {
    requestAnimationFrame(animate);
    if (timeStamp > countdown) {
      countdown = countdown + animationSpeed;
      for (let i = 1; i < canvas.width / fontSize; i++) {
        let printLetter = new Letter(i * fontSize, yPosition);
        printLetter.draw();
      }
      yPosition = yPosition + fontSize;
    }
    if (yPosition > canvas.height) {
    }
  }
  animate();
}

function drawRows() {
  drawColumn(200);
}
drawRows();

//
//
// Row: create an Object or function that draws multiple lines horizontly
//
//
//
// create a function that reduces opacity of old letters
//
//
//
// ctrate a function that listens to resizing the window
window.addEventListener("resize", () => {});

// create gradients and colors
//
//
//
