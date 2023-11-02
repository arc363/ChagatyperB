import argsParser from "args-parser";
import validate from "uuid-validate";
const args = argsParser(process.argv);
const requestID = validateID(args.id);

export function checksOnID(args) {
  // Get ID from run-time parameters
  if (args.id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }

  // Validate parameter
  const requestID = validateID(args.id);
  function validateID(id) {
    const valid = validate(id);
    if (!valid) {
      console.log(`ID invalid`);
      process.exit();
    }
    console.log(`Request ID: ${id}`);
    return id;
  }
}
