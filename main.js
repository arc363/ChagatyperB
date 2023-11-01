// Import modules (?)
import argsParser from "args-parser";
const args = argsParser(process.argv);
import path from "path";
import fs from "fs";
import pg from "pg"; // pg is the postgres database client package
import validate from "uuid-validate";
import * as pool from "./config.js";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Import functions
import * as check from "./uuid_verifier.js";

// Configure connection pool

// Run program

//Get id from run time parameters
uuid_verifier.check();

// Check uploads folder exists
// Look for json file named the same as the id in the folder - use fs.read
// Read the json into a variable
// open database connection
// Run command to insert the data and set the status
// Close connection
