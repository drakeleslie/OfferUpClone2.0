import { pool } from "../../backend/database";
export default function newUser(req, res) {
  console.log(req.body, "new user request");
  const newUserName = req.body.newUsername;
  const newEmail = req.body.newEmail;
  const newPassword = req.body.newPassword;
  const newCity = req.body.newCity;
  const newState = req.body.newState;
  const newPicture = req.body.newPicture;
  pool.query(
    "INSERT INTO users(username, email, password, city, state, picture) VALUES ($1, $2, $3, $4, $5, $6)",
    [newUserName, newEmail, newPassword, newCity, newState, newPicture]
  );
  res.send(`user ${newUserName} created`);
}
