const input = process.argv[2];
if (!input) {
  console.error("Debe introducir una frase");
} else {
  const trimmedInput = input.trim().toLowerCase();
  let count = 0;
  for (let i = 0; i < trimmedInput.length; i++) {
    if (trimmedInput[i] === "a") {
      count++;
    }
  }
  console.log(count);
}
