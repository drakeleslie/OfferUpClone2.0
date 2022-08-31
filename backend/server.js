import express from "express";
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
    console.log(`Recieved Authentication Request: ${req.body}`)

  })
//to get saved items by user id 
  .get('/api/saved', async (req, res) => {
    console.log(`Recieved Saved Request: ${req.body}`)
    res.send("hello")
    console.log(pool)
    pool.query('SELECT * FROM saved_items;').then((data) => {
      //res.send(data.rows)
      console.log("hello again")
      console.log(data)
    })
    
  })
server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`)
})