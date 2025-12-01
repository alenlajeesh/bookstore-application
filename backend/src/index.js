const express =require("express");
const dotenv= require("dotenv");
const connectDB= require("./service/db.js")
dotenv.config();
const PORT =process.env.PORT;

connectDB();

const app =express();
const homeRouter= require("./routes/homeRouter.js");
const userRouter= require("./routes/userRouter.js");

app.use(express.json());

app.use("/home",homeRouter);
app.use("/api/auth",userRouter);

app.use((err,req,res,next)=>{
	console.log(err);

	res.status(err.status || 500).json({
		"message":err.message || "Server Error"
	})
})
app.listen(PORT,()=>{
	console.log("Server Running at port: "+PORT+" http://localhost:"+PORT);
})


