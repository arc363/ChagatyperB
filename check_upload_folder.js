import fs from "fs";

const requestID = validateID(args.id);
import { process_requestID, args } from "./process_requestID.js";

// Check uploads folder exists & if not create one
export function uploadFolder(id) {
  if (!fs.existsSync(`./${requestID}`)) {
    fs.mkdir(`./${requestID}`, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Folder created`);
    });
  } else {
    console.log(`Folder already exists`);
  }
}
