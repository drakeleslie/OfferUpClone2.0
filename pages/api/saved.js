import { pool } from "../../backend/database";
export default async function saved(req, res) {
    if (req.method === "GET") {
        const userId = req.query.user_id;
        console.log(userId)
        console.log(`Recieved Saved Request: ${req.body}`);
        await pool
          .query("SELECT * FROM saved_items WHERE (user_id = $1);", [userId])
          .then((data) => {
            res.send(data.rows);
          });
    } else {
        const userId = req.query.user_id;
        const itemId = req.query.item_id;
        console.log(userId, itemId);
        pool
          .query(
            "DELETE FROM saved_items WHERE (user_id = $1 and item_id = $2) RETURNING *;",
            [userId, itemId]
          )
          .then((data) => {
            console.log(data.rows);
            if (data.rows.length === 0) {
              res.sendStatus(404);
            } else {
              res.status(204).send(data.rows[0]);
            }
          });
    }
   
  }
  