const MIN_DICE = 1;
const input = Number(process.argv[2]);
function randomDice(sides = 6) {
  return MIN_DICE + Math.floor(Math.random() * sides);
}
if (!isNaN(input)) {
  console.log(randomDice(input));
} else {
  console.error("Input value is not a number");
}
