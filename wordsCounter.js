const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, (err, data) => {
  if (err) {
    throw new Error("File doesn't exists");
  }
  console.log(String(data).split(" ".length));
})