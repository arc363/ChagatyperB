import { pool } from "./config.js";

export async function uploadToDatabase(id, jsonData) {
  const client = await pool.connect();
  try {
    await client.query(
      "UPDATE public.submissions SET status_id=3, processed_data=$2 WHERE id=$1;",
      [id, jsonData]
    );
    console.log(`Database updated`);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  } finally {
    client.release();
  }
}
