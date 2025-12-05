const express =require("express");
const dotenv= require("dotenv");
const connectDB= require("./config/db.js")
const cors=require("cors")
dotenv.config();
const PORT =process.env.PORT;

connectDB();

const app =express();
const homeRouter= require("./routes/homeRouter.js");
const userRouter= require("./routes/userRouter.js");
const authRouter= require("./routes/authRoutes.js");
const bookRouter =require("./routes/bookRouter.js");

app.use(express.json());
app.use(cors());

app.use("/",homeRouter);
app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);
app.use("/api/books",bookRouter);


app.use((err,req,res,next)=>{
	console.log(err);

	res.status(err.status || 500).json({
		"message":err.message || "Server Error"
	})
})
app.listen(PORT,()=>{
	console.log("Server Running at port: "+PORT+" http://localhost:"+PORT);
})


