// Validate parameter
import argsParser from "args-parser";
import validate from "uuid-validate";

export const args = argsParser(process.argv);
export const requestID = validateID(args.id);

export function validateID(id) {
  const valid = validate(id);

  if (!valid) {
    console.log(`ID invalid`);
    process.exit();
  }
  console.log(`Request ID: ${id}`);
  return id;
}
