// import path from "path";
// import pg from "pg"; // pg is the postgres database client package
// import * as pool from "./config.js";
import * as url from "url";

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import { process_requestID } from "./process_requestID.js";
import argsParser from "args-parser";
// import { uploadFolder } from "./check_upload_folder.js";
import { checkJson } from "./checkJson.js";
import { read_JSON } from "./read_json.js";
const args = argsParser(process.argv);
import { uploadSubmission } from "./upload_to_database.js";
// RUN PROGRAM

// 1. Function to perform checks on the reuqest ID
const id = process_requestID(args);

// 2. Check uploads folder exists
// uploadFolder(id);

// 3. Look for json file named the same as the id in the folder
checkJson(id);

// 4. Read the json into a variable
read_JSON(id).then((jsonData) => uploadSubmission(id, jsonData)); // 5. Open database connection & run command to insert the data and set the status

// 6. Close connection
