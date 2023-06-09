const express = require("express");
const mysql = require("mysql");
require('dotenv').config()

const app = express();

//body parser middleware
app.use(express.json());


console.log(process.env.db_host)

const connection = mysql.createConnection({
  host     :  process.env.db_host,
  user     :  process.env.db_user,
  password :  process.env.db_password,
  database :  process.env.db_database
});


connection.connect((error)=>{
	if(error){
		console.log("error")
	}else{
		console.log("Successs")
	}
})

//post to leaderboard

app.post("/leaderboard",(req,resp)=>{
	let name = req.body.name;
	let score = req.body.score;

	connection.query('insert  into leaderboard (name,score) values (?,?)',[name,score],(error,result)=>{
		if(error){
			resp.status(500).send(error);
		}else{
			resp.send("Success");
		}
	})

})
//fetch leaderboard
app.get("/players",(req,resp)=>{


connection.query("select * from leaderboard",(error,result)=>{
	if(error){
		console.log("Error");
	}else{
		resp.json(result);
	}
})




}
)



const PORT =process.env.PORT || 9000;
app.listen(PORT,()=>{
	console.log("Server Listening To Port: ",PORT);
})