// Import from modules and define variables
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
import { process_requestID } from "./process_requestID.js";
import argsParser from "args-parser";
import { checkJson } from "./checkJson.js";
import { read_JSON } from "./read_json.js";
const args = argsParser(process.argv);
import { uploadToDatabase } from "./upload_to_database.js";

// RUN PROGRAM

// 1. Function to perform checks on the reuqest ID
const id = process_requestID(args);

// 2. Check uploads folder exists
// uploadFolder(id);

// 3. Look for json file named the same as the id in the folder
checkJson(id);

// 4. Read the json into a variable
read_JSON(id).then((jsonData) => uploadToDatabase(id, jsonData)); // 5. Open database connection & run command to insert the data; set the status; close connection
