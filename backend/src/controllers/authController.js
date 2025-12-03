const User =require("../models/User");
const bcrypt =require("bcrypt");

const generateToken = require("../utils/generateToken");

exports.register= async (req,res)=>{
	try{
		const {name,email,password}=req.body;
		const hashedPassword =await bcrypt.hash(password,10);

		const user= await User.create({
			name,
			email,
			password:hashedPassword
		})

		res.json({
			success:true,
			data:{
				name:user.name,
				email:user.email
			}
		})
	}catch(err){
		res.status(500).json({
			message:err.message
		})
	}
}

exports.login= async (req,res)=>{
	try{
		const {email,password}=req.body;
		const user = await User.findOne({email});

		if(!user){
			return res.status(404).json({
				message:"user Not found"
			})
		}

		const isMatch =await bcrypt.compare(password,user.password);
		if(!isMatch){
			return res.status(400).json({
				message:"wrong password"
			})
		}

		const token =generateToken(user._id);

		res.json({
			success:true,
			token,
			user:{
				id:user._id,
				name:user.name,
				email:user.email
			}
		})
	}catch(err){
		res.status(500).json({
			message:err.message
		})
	}
}
