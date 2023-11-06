import fs from "fs";

// Function reads JSON file into a variable
export function checkJson(id) {
  if (!fs.existsSync(`./${id}.json`)) {
    console.log(`Failed to locate JSON file`);
    process.exit();
  }
  console.log(`JSON file located`);
}
