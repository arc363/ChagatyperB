import fs from "fs";

// Function checks uploads folder exists & if not creates one
export function uploadFolder(id) {
  if (!fs.existsSync(`./${id}`)) {
    fs.mkdir(`./${id}`, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Folder created`);
    });
  } else {
    console.log(`Folder already exists`);
  }
}
