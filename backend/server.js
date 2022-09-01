import express, { response } from "express";
import { pool } from "./database.js";
import dotenv from "dotenv";
import cors from "cors"


dotenv.config(); 

//config server
const server = express();
const port = process.env.PORT;
server.use(express.json());
server.use(cors());
//routes
server
//get request for checking login credentials
  .get('/api/authenticate', (req, res) => {
    pool.query("SELECT * FROM users "), (err, result)=>{
      res.send(result)
  }
})

  .post('/api/authenticate', async (req, res) => {
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
  .get('/api/saved', async (req, res) => {
    console.log(`Recieved Saved Request: ${req.body}`)
    pool.query("SELECT * FROM saved_items").then((data) => {
      res.send(data.rows)  
    })
    
  })
server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`)
})