// import path from "path";
// import pg from "pg"; // pg is the postgres database client package
// import * as pool from "./config.js";
import * as url from "url";

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import { process_requestID } from "./process_requestID.js";
import argsParser from "args-parser";
import { uploadFolder } from "./check_upload_folder.js";
import { checkJson } from "./checkJson.js";
// import { readInData } from "./read_in_JSON_data.js";
import { read_JSON } from "./read_json.js";
const args = argsParser(process.argv);

// RUN PROGRAM

// 1. Function to perform checks on the reuqest ID
const id = process_requestID(args);

// 2. Check uploads folder exists
// uploadFolder(id);

// 3. Look for json file named the same as the id in the folder - use fs.read
checkJson(id);

// 5. Read the json into a variable
read_JSON(id);
// 6. Open database connection

// 7. Run command to insert the data and set the status

// 8. Close connection
