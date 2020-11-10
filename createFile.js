const fs = require("fs")
const { appendFile, readFile, unlink } = require("fs").promises
const file = process.argv[2];
const filePath = "./items.txt";

main(file, filePath);

async function main(file, filePath) {
  if (fs.existsSync(filePath)) {
    console.log('The file exists');
    await removeFile(filePath);
  }
  const splitContent = await read(file).then(fileContent => String(fileContent).split(" "))
  for (const word of splitContent) {
    await write(filePath, word)
  }
}

async function removeFile(filePath) {
  try {
    await unlink(filePath);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function read(file) {
  try {
    return await readFile(file, 'utf-8');
  } catch (error) {
    console.error("Error:", error);
  }
}

async function write(filePath, word) {
  try {
    await appendFile(filePath, word + "\n");
  } catch (error) {
    console.error("Error:", error);
  }
}
