// Import modules (?)
import path from "path";
import fs from "fs";
import pg from "pg"; // pg is the postgres database client package
import * as pool from "./config.js";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Import
import { args } from "./validate.js";
import { check } from "./uuid_verifier.js";
import { validateID } from "./validate.js";

// Configure connection pool
pool;

// Run program

//Get id from run time parameters
check(args);
validateID(args);

// Check uploads folder exists

// Look for json file named the same as the id in the folder - use fs.read
// Read the json into a variable
// open database connection
// Run command to insert the data and set the status
// Close connection
