import fs from "fs";
import { args } from "./checks_on_requestID";

// Check uploads folder exists & if not create one
export function uploadFolder(id) {
  if (!fs.existsSync(`./${args}`)) {
    fs.mkdir(`./${args}`, (err) => {
      if (err) {
        // console.log(err);
      }
      console.log(`Folder created`);
    });
  } else {
    console.log(`Folder already exists`);
  }
}
