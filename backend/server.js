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
    console.log(`Recieved Authentication Request: ${body.req}`)

  })
  .get('/api/saved', (req, res) => {
    console.log(`Recieved Saved Request: ${body.req}`)
  })


server.listen(port, () => {
    console.log(`Express server is running on port: ${port}`)
})