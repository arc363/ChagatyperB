// Variables required
import argsParser from "args-parser";
import validate from "uuid-validate";
export const args = argsParser(process.argv);

// ----------- FUNCTION TO PERFORM CHECKS ON REQUEST ID -------------

// Fuction performs checks for existence of requestID and then, if true, checks if it's valid
export function checksOnID(args) {
  // Get ID from run-time parameters
  if (args.id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }

  // Validate parameter
  function validateID(id) {
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
  validateID(args);
}
