import { pool } from "../../backend/database";
export default async function user(req, res) {
  if (req.method === "GET") {
    const userId = req.query.user_id;
    console.log(`Recieved User: ${req.body}`);
    await pool
      .query("SELECT * FROM users WHERE (user_id = $1);", [userId])
      .then((data) => {
        console.log(data.rows);
        res.send(data.rows);
      });
  } else {
    console.log('req.body.params', req.body.params)
    const data = req.body.params;
    pool.query(`UPDATE users SET username=COALESCE($2, username),
      password=COALESCE($3, password),
      email=COALESCE($4, email),
      city=COALESCE($5, city),
      picture=COALESCE($6, picture)
      WHERE (user_id=$1) RETURNING *;`,
        [data.user_id, data.username, data.password, data.email, data.city, data.picture])
      .then((data) => {
        res.send("data.rows", data.rows);
    });
  }    
}
