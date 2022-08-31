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

    res.send(req.body)
  })
//to get saved items by user id 
  .get('/api/saved', (req, res) => {
    console.log(`Recieved Saved Request: ${req.body}`)
  })


server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`)
})