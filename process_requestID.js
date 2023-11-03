// Variables required
import argsParser from "args-parser";
import validate from "uuid-validate";
export const args = argsParser(process.argv);

// ----------- FUNCTIONS TO PERFORM CHECKS ON REQUEST ID -------------

export function process_requestID(args) {
  checkIDProvided(args);
  validateID(args);
}

// Function to check whether an ID has been provided by user
function checkIDProvided(id) {
  if (args.id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }
}

// Function to check whether provided ID is valid and print if so
export function validateID(id) {
  const valid = validate(args.id);

  // Only proceed if ID was provided
  if (!args.id) {
    console.log(`No ID to validate.`);
    process.exit();
  }
  // Exit process if provided ID is not valid
  if (!valid) {
    console.log(`ID invalid`);
    process.exit();
  }
  // Print ID if it has been validated
  console.log(`Request ID: ${args.id}`);
  return id;
}
