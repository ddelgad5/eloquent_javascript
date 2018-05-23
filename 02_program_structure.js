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
