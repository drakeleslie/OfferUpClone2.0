import { pool } from "../../backend/database";
export default async function user(req, res) {
  const userId = req.query.user_id;

  console.log(`Recieved User: ${req.body}`);
  await pool
    .query("SELECT * FROM users WHERE (user_id = $1);", [userId])
    .then((data) => {
      console.log(data.rows);
      res.send(data.rows);
    });
}
