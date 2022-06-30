// Canvas initializing
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbolsArray =
  "♫♪アァカサタナハマヤャラワンわワヰヱヲらりるれろラリルレロヤユヨマミムメモはひふへほハヒフヘいうえアイウエオかたにナニヌネノちつてとタチツテトきくけこカキクケコさしすせそサスセソABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let randomCharacter = symbolsArray.charAt(
  Math.floor(Math.random() * symbolsArray.length)
);
console.log(randomCharacter);
