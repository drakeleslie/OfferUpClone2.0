import { pool } from "../../backend/database"
export default async function authenticate(req, res) {
    console.log(req.query, 'req');
    const username = req.query.username;
    const password = req.query.password; 
    const getUserNameAndPassword = ( await pool.query("SELECT * FROM users WHERE (username = $1 AND password = $2);", [username, password]))
    let checkForUserID = getUserNameAndPassword.rows[0].user_id
    if(!checkForUserID){
      res.send(false)
    } else{
      res.send({bool: true, data: getUserNameAndPassword.rows})
    }
}
