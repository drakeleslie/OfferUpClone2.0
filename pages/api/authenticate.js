import e from "cors";
import { pool } from "../../backend/database";
export default async function authenticate(req, res) {
  console.log(req.query, "req");
  const username = req.query.username;
  const password = req.query.password;
  const getUserNameAndPassword = await pool.query(
    "SELECT * FROM users WHERE (username = $1 AND password = $2);",
    [username, password]
  );
  let checkForUser = getUserNameAndPassword.rows[0];
  if (checkForUser !== undefined) {
    let checkForUserID = getUserNameAndPassword.rows[0].user_id;
    if (!checkForUserID) {
      res.send({ bool: false });
    } else {
      res.send({ bool: true, data: getUserNameAndPassword.rows });
    }
  } else {
    res.send("invalid user");
  }
}
