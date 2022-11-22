import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

//Make Connection to our database:
const pool = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER, 
    password: process.env.MYSQL_PASSWORD,
}).promise()

export async function getData(){
    const [rows] = await pool.query('SELECT * FROM sql9579135.war')
    return rows
}

export async function updateData(score, id) {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE sql9579135.war SET score= ? WHERE id= ?;`;
      // pool.query relies on a callback so we are turning into a promise ourselves
  
      pool.query(sql, [score, id], function (err, result) {
        if (err) return reject(err); // === .catch or catch(err) with try/catch block and async await
        console.log(result); // this will have the updated data somewhere
        console.log(result.affectedRows);
        resolve(result); // === .then or try { } sucess with async function
      });
    });
  }


//const data = await updateData();
//console.log(data)



