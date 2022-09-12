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
    } else  if (req.method === "DELETE") {
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
    } else if (req.method === "POST") {
      const title = req.body.title; 
      const price = req.body.price; 
      const category = req.body.category; 
      const description = req.body.description;
      const image = req.body.image; 
      const user_id = req.body.user_id
      const posted_item_id = req.body.posted_item_id
      pool.query("INSERT INTO saved_items(title, price, category, description, image, user_id, posted_item_id) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        [ title, price, category, description, image, user_id, posted_item_id ])
         res.send(`${title} inserted into saved items`)
    } else {
      console.log(req.body.params)
      const itemId = req.body.params.item_id;
      const userId = req.body.params.user_id;
      const price = req.body.params.price;
      console.log(itemId, userId, price);
      pool.query("UPDATE saved_items SET price=COALESCE($1, price) WHERE (user_id=$2 and item_id=$3) RETURNING *",
          [price, userId, itemId])
      .then((data) => {
          res.send(data.rows);
      });
    }
   
  }
  