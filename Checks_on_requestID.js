import argsParser from "args-parser";
import validate from "uuid-validate";
export const args = argsParser(process.argv);

export function checksOnID(args) {
  // Get ID from run-time parameters
  if (args.id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }

  // Validate parameter

  function validateID(id) {
    // const requestID = validateID(args.id);
    const valid = validate(args.id);
    if (!valid) {
      console.log(`ID invalid`);
      process.exit();
    }
    console.log(`Request ID: ${args.id}`);
    return id;
  }
  validateID(args);
}
