const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config()

const app = express();

//body parser middleware
app.use(express.json());
app.use(cors());


console.log(process.env.db_host)

const connection = mysql.createConnection({
  host     :  process.env.db_host,
  user     :  process.env.db_user,
  password :  process.env.db_password,
  database :  process.env.db_database
});


connection.connect((error)=>{
	if(error){
		console.log(error)
	}else{
		console.log("Successs")
	}
})

connection.query("truncate leaderboard")
//check if username already exis

//post to leaderboard

app.post("/leaderboard",(req,resp)=>{
	let name = req.body.name;
	let score = req.body.score;

	if(score >= 100){
			connection.query('insert  into leaderboard (name,score) values (?,?)',[name,score],(error,result)=>{
		if(error){
			resp.status(500).send(error);
		}else{
			resp.send("Success");
		}
	})

		}else{
			resp.send("Player did not qualify to be in the leaderboard");
		}


})

//fetch leaderboard
app.get("/players",(req,resp)=>{


connection.query("select * from leaderboard order by score desc",(error,result)=>{
	if(error){
		console.log(error);
		resp.send(error)
	}else{
		resp.json(result);
	}
})




}
)



const PORT = 9000;
app.listen(PORT,()=>{
	console.log("Server Listening To Port: ",PORT);
})