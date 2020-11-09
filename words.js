const input = process.argv[2];
if (!input) {
  console.error("Debe introducir una frase");
} else {
  const splitedText = input.trim().split(" ");
  console.log(splitedText.length);
}
