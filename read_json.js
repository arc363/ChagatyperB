import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function read_JSON(id) {
  var obj;
  // fs.readFile(`./${id}.json`, "utf8", function (err, data) {
  fs.readFile(
    path.resolve(__dirname, "ae12dc6c-517e-4f61-a9a2-a1dd5ae9e016.json"),
    "utf8",
    function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      console.log(obj);
    }
  );
}
