// Variables required
import validate from "uuid-validate";

// ----------- FUNCTIONS TO PERFORM CHECKS ON REQUEST ID -------------

export function process_requestID(args) {
  checkIDProvided(args.id);
  return validateID(args.id);
}

// Function to check whether an ID has been provided by user
function checkIDProvided(id) {
  if (id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }
}

// Function to check whether provided ID is valid and print if so
export function validateID(id) {
  // Only proceed if ID was provided
  if (!id) {
    console.log(`No ID to validate.`);
    process.exit();
  }
  const valid = validate(id);
  // Exit process if provided ID is not valid
  if (!valid) {
    console.log(`ID invalid`);
    process.exit();
  }
  // Print ID if it has been validated
  console.log(`Request ID: ${id}`);
}
