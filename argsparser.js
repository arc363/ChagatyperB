import { args } from "./process_requestID.js";

console.info(args);

if (args.id) {
  console.log(`Request ID present`);
}
