import { pool } from "../../backend/database";
export default async function user(req, res) {
  const userId = req.query.user_id;
  console.log(userId);
  console.log(`Recieved User: ${req.body}`);
  await pool
    .query("SELECT * FROM users WHERE (user_id = $1);", [userId])
    .then((data) => {
      res.send(data.rows);
    });
}
