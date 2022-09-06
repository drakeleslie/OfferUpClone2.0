import express, { response } from "express";
import { pool } from "./database.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

//config server
const server = express();
const port = process.env.PORT;
server.use(express.json());
server.use(cors());
//routes

//get request for checking login credentials

server.get("/api/authenticate/:username/:password", async (req, res) => {
  console.log(req.params);
  const username = req.params.username;


  const password = req.params.password 
  const getUserNameAndPassword = ( await pool.query("SELECT * FROM users WHERE (username = $1 AND password = $2);", [username, password]))
  let checkForUserID = getUserNameAndPassword.rows[0].user_id
  if(!checkForUserID){
    res.send(false)
  } else{
    res.send({bool: true, data: getUserNameAndPassword.rows})


  }
});

//create new user

server.post('/api/newUser', async (req, res) => {
 const newUserName = req.body.newUsername; 
 const newEmail = req.body.newEmail; 
 const newPassword = req.body.newPassword; 
 const newCity = req.body.newCity
 const newState = req.body.newState; 
    pool.query("INSERT INTO users(username, email, password, city, state) VALUES ($1, $2, $3, $4, $5)", 
    [newUserName, newEmail, newPassword, newCity, newState ])
    res.send(`user ${newUserName} created`)
});



//to get saved items by user id
server.get("/api/saved/:user_id", (req, res) => {
  console.log(req, "req")
  const userId = req.params.user_id;
  console.log(`Recieved Saved Request: ${req.body}`);
  pool.query("SELECT * FROM saved_items WHERE (user_id = $1);", [userId])
    .then((data) => {
      res.send(data.rows);
    });
});

  //to delete from saved items
  server.delete("/api/saved/:user_id/:item_id", (req, res, next) => {
    const userId = req.params.user_id;
    const itemId = req.params.item_id;
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
  });

//get items being sold by userId
server.get("/api/posted/:userId", async (req, res) => {
  const userId = req.params.userId;
  pool
    .query(`SELECT * FROM posted_items WHERE user_id =$1`, [userId])
    .then((data) => {
      res.send(data.rows);
    });
});

//get user by Id
server.get("/api/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  pool.query(`SELECT * FROM users WHERE user_id =$1`, [userId]).then((data) => {
    res.send(data.rows[0]);
  });
});

server.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
