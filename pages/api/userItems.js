import { pool } from "../../backend/database";
export default async function user(req, res) {
  const userId = req.query.user_id;
  console.log(`Recieved UserItems: ${req.body}`);
  await pool
    .query("SELECT * FROM posted_items WHERE (user_id = $1);", [userId])
    .then((data) => {
      console.log(data.rows);
      res.send(data.rows);
    });
}
