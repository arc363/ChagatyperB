import fs from "fs";
import { requestID } from "./checks_on_requestID";

// Check uploads folder exists & if not create one
export function uploadFolder(id) {
  if (!fs.existsSync(`./${requestID}`)) {
    fs.mkdir(`./${requestID}`, (err) => {
      if (err) {
        // console.log(err);
      }
      console.log(`Folder created`);
    });
  } else {
    console.log(`Folder already exists`);
  }
}
