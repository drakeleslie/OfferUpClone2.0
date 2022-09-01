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
server.get('/api/authenticate', (req, res) => {
    pool.query("SELECT * FROM users "), (err, result)=>{
      res.send(result)
    }
  })

server.post('/api/authenticate', async (req, res) => {
    const getUserAndPassword = (
      await pool.query(`SELECT * FROM users WHERE username = $1 AND password = $2;`, 
      [req.body.username,req.body.password])); // query db for input username and password

        if(getUserAndPassword.rows.length === 0){ // if rows is empty, username and password combo does not exist
          res.send(false)
          console.log("in server -- user is NOT authorized")
        } else {
          res.send(true)
          console.log("in server -- user is authorized")
        }
    })

//to get saved items by user id 
server.get('/api/saved/:user_id', async (req, res) => {
    const userId = req.params.user_id;
    console.log(`Recieved Saved Request: ${req.body}`)
    await pool.query("SELECT * FROM saved_items WHERE (user_id = $1);", [userId]).then((data) => {
      res.send(data.rows)  
    })

  //to delete from saved items
server.delete('/api/saved/:user_id/:item_id', (req, res, next) => {
    const userId = req.params.user_id;
    const itemId = req.params.item_id;
    console.log(userId, itemId)
    pool.query("DELETE FROM saved_items WHERE (user_id = $1 and item_id = $2) RETURNING *;", [userId, itemId]).then((data) => {
      console.log(data.rows);
      if (data.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(204).send(data.rows[0]);
      }
    })
  })
    
})
//get items being sold by userId
server.get("/api/posted/:userId", async (req, res) => {
    const userId = req.params.userId;
    pool
      .query(`SELECT * FROM posted_items WHERE user_id =$1`, [userId])
      .then((data) => {
        res.send(data.rows);
      });
  })

  //get user by Id
server.get("/api/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    pool
      .query(`SELECT * FROM users WHERE user_id =$1`, [userId])
      .then((data) => {
        res.send(data.rows[0]);
      });
  });



server.listen(port, () => {
  console.log(`Express server is running on port: ${port}`);
});
