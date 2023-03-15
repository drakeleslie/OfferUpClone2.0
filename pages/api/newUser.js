import { pool } from "../../backend/database";
export default function newUser(req, res) {
  console.log(req.body, "new user request");
  const newUserName = req.body.newUsername;
  const newEmail = req.body.newEmail;
  const newPassword = req.body.newPassword;
  const newCity = req.body.newCity;
  const newState = req.body.newState;
  const newPicture = req.body.newPicture;
  const newAge = req.body.newAge;
  pool.query(
    "INSERT INTO users(username, email, password, city, state, picture, account_age) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [newUserName, newEmail, newPassword, newCity, newState, newPicture, newAge]
  );
  res.send(`user ${newUserName} created`);
}
