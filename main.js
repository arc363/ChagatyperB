// Import
// import path from "path";
// import pg from "pg"; // pg is the postgres database client package
// import * as pool from "./config.js";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// import { getRequestID } from "./uuid_verifier.js";
import { checksOnID, args } from "./checks_on_requestID.js";
// import { args } from "./checks_on_requestID.js";
// import { uploadFolder } from "./check_upload_folder.js";

// RUN PROGRAM

// 1. Function to perform checks on the reuqest ID
checksOnID(args);

// 3. Check uploads folder exists
uploadFolder(args);

// 4. Look for json file named the same as the id in the folder - use fs.read

// 5. Read the json into a variable

// 6. Open database connection

// 7. Run command to insert the data and set the status

// 8. Close connection
