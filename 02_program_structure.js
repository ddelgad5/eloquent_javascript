//Chapter 2

let x = 30;
console.log("The value of x is :", x);

console.log(Math.max(30,-9,099,91));

console.log(Math.min(30,21,9) + 200);

//cannot perform prompt exercise on node.js

if (1 + 1 == 2) console.log("It's true");

console.log("\nLooping a triangle\n");
let hash = "#";
for (let rows=0; rows < 7; rows++) {
  console.log(hash+"\n");
  hash = hash + "#";
}

//FizzBuzz
console.log("\nFizzBuzz\n");
for (let counter = 1; counter <= 100; counter++) {
  let output = "";
  if (counter % 3 == 0) output = "Fizz";
  if (counter % 5 == 0) output += "Buzz";
  console.log(output || counter);
}

//Chessboard
console.log ("\nChessBoard\n");
let boardSize = 8;
let output = "";
for (let rows = 0; rows < boardSize; rows++) {
  for (let columns = 1+rows; columns <= boardSize+rows; columns++) {
    if (columns % 2 == 0) output += "#";
    else output += " ";
  }
  output += "\n";
}
console.log(output);
