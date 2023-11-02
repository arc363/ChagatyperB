// Import
import path from "path";
import fs from "fs";
import pg from "pg"; // pg is the postgres database client package
import * as pool from "./config.js";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import { args } from "./validate.js";
import { getRequestID } from "./uuid_verifier.js";
import { requestID } from "./validate.js";

// Configure connection pool
pool;

// RUN PROGRAM

// 1. Get request id from run time parameters - ./uuid_verifier.js
requestID;

// 2. Validate ID - ./validate.js
getRequestID(args);

// 3. Check uploads folder exists

// 4. Look for json file named the same as the id in the folder - use fs.read

// 5. Read the json into a variable

// 6. Open database connection

// 7. Run command to insert the data and set the status

// 8. Close connection
