import path from "path";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function read_JSON(id) {
  var obj;
  return await fs.readFile(`./${id}.json`, "utf8", function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(`JSON object printed below:`, obj);
    return obj;
  });
}
