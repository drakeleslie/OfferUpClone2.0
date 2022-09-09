import { pool } from "../../backend/database";
export default async function posted(req, res) {
    if (req.method === "GET") {
        const userId = req.query.user_id;
        console.log(userId)
        console.log(`Recieved Saved Request: ${req.body}`);
        await pool
          .query("SELECT * FROM posted_items WHERE (user_id = $1) ORDER BY posted_item_id ASC;", [userId])
          .then((data) => {
            res.send(data.rows);
          });
    } else if (req.method === "DELETE") {
        const userId = req.query.user_id;
        const itemId = req.query.posted_item_id;
        console.log(userId, itemId);
        pool
          .query(
            "DELETE FROM posted_items WHERE (user_id = $1 and posted_item_id = $2) RETURNING *;",
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
    } else if (req.method === "POST") {
        const title = req.body.title; 
        const price = req.body.price; 
        const category = req.body.category; 
        const description = req.body.description;
        const image = req.body.image; 
        const user_id = req.body.user_id
        pool.query("INSERT INTO posted_items(title, price, category, description, image, user_id) VALUES ($1, $2, $3, $4, $5, $6)", 
            [ title, price, category, description, image, user_id ])
            res.send(`${title} inserted into posted items`)
    } else {
        console.log(req.body.params)
        const itemId = req.body.params.posted_item_id;
        const userId = req.body.params.user_id;
        const price = req.body.params.price;
        console.log(itemId, userId, price);
        pool.query("UPDATE posted_items SET price=COALESCE($1, price) WHERE (user_id=$2 and posted_item_id=$3) RETURNING *",
            [price, userId, itemId])
        .then((data) => {
            res.send(data.rows);
        });
    }
}