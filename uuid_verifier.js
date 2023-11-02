// Get id from run time parameters
export function getRequestID(args) {
  if (args.id) {
    console.log(`Request ID supplied`);
  } else {
    console.log(`Request ID not supplied. Use "-id=" to prefix ID.`);
  }
}
