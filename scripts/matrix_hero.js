// Canvas initializing
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbolsArray =
  "♫♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";

const fontSize = 25;

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
    console.log(this.character);
  }
}

let newLetter = new Letter(100, 100);
newLetter.draw();
class Column {}
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
