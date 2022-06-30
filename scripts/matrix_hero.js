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
    this.symbols =
      "♫♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    this.x = x;
    this.y = y;
    this.go = false;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = fontSize + "px monospace";
    ctx.fillText(
      this.symbols.charAt(Math.floor(Math.random() * symbolsArray.length)),
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
const lettersArray = createArray();
lettersArray[5].go = true;
let countdown = animationSpeed;

function animate(timeStamp) {
  requestAnimationFrame(animate);
  // only runs every "animationSpeed" milliseconds
  if (timeStamp > countdown) {
    countdown = countdown + animationSpeed;
    // mattens out the underlying characters
    ctx.fillStyle = "rgba(234, 155, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // loops threw all the rows
    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i].go == false) {
        if (Math.random() > 0.9) {
          lettersArray[i].go = true;
        }
      }
      if (lettersArray[i].go == true) {
        lettersArray[i].draw();
        lettersArray[i].y += fontSize;
      }
      if (lettersArray[i].y > canvas.height / 2) {
        if (Math.random() > 0.95) {
          lettersArray[i].go = false;
          lettersArray[i].y = fontSize;
        }
      }
    }
  }
}

// loop threw all the arrays, if leter[i].go = true .....

animate();

// --------------------------- this chunk works!

// let countdown = animationSpeed;
// let xPosition = fontSize;
// let yPosition = fontSize;
// let lettersArray = [];

// function drawColumn() {
//   let yPositions = [];
//   for (let i = 1; i < canvas.width / fontSize; i++) {
//     yPositions[i] = 0;
//   }
//   function animate(timeStamp) {
//     requestAnimationFrame(animate);
//     if (timeStamp > countdown) {
//       countdown = countdown + animationSpeed;
//       for (let i = 1; i < canvas.width / fontSize; i++) {
//         if (Math.random() > 0.4) {
//           yPositions[i] += fontSize;
//           console.log(yPositions);
//           let printLetter = new Letter(i * fontSize, yPositions[i]);
//           printLetter.draw(), 1000;
//         }
//       }
//       yPosition = yPosition + fontSize;
//     }
//     if (yPosition > canvas.height) {
//     }
//   }
//   animate();
// }

// drawColumn();

// --------------------------- this chunk above works!

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
