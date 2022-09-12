import { pool } from "../../backend/database";
export default async function postedItems(req, res) {
        const itemId = req.query.posted_item_id;
        console.log(`Recieved Saved Request: ${req.body}`);
        await pool
          .query("SELECT * FROM posted_items WHERE (posted_item_id = $1) ORDER BY posted_item_id ASC;", [itemId])
          .then((data) => {
            res.send(data.rows);
          });
}