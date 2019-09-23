const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let arr_expr = [];

  arr_expr = expr
    .match(/((\d|\*){10})/g)
    .map(el =>
      el
        .match(/((\d|\*){2})/g)
        .map(el => {
          if (el === "00") {
            return "";
          } else if (el === "10") {
            return ".";
          } else if (el === "11") {
            return "-";
          } else if (el === "**") {
            return " ";
          }
        })
        .join("")
    )
    .map(el => {
      if (el === "     ") {
        return " ";
      } else {
        return MORSE_TABLE[el];
      }
    })
    .join("");
  return arr_expr;
}

module.exports = {
  decode
};
