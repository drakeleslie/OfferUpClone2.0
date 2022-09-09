import { pool } from "../../backend/database";
export default function populatePostedItemsTB(req, res) {
  console.log(req.body, "populate posted_items request");
  const title = req.body.title;
  const price = req.body.price;
  const category = req.body.category;
  const description = req.body.description;
  const image = req.body.image;
  const userId = req.body.userId;

  pool.query(
    "INSERT INTO posted_items(title, price, category, description, image, user_id) VALUES ($1, $2, $3, $4, $5, $6);",
    [title, price, category, description, image, userId]
  );
  res.send(`item posted`);
}
