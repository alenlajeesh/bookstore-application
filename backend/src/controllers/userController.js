const User= require("../models/User.js")

exports.createUser= async (req,res,next)=>{
	try{
		const user = await User.create(req.body);
		res.status(201).json({
			success:true,
			user
		})
	}catch(err){
		next(err);
		console.log(err);
	}
}
exports.getUsers=async (req,res,next)=>{
	try{
		const users= await User.find();
		res.json({
			success:true,
			users
		})
	}catch(err){
		next(err)
	}
}

exports.getUserById= async (req,res,next)=>{
	try{
		const user= await User.findById(req.params.id);
		res.json({
			success:true,
			user
		})
	}
	catch(err){
		next(err);
	}
}

exports.updateUserById = async (req,res,next)=>{
	try{
		const user= await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{new:true}
		);

		res.json({
			success:true,
			user
		})

	}catch(err){
		next(err);
	}
}
exports.deleteById= async (req,res,next)=>{
	try{
		await User.findByIdAndDelete(req.params.id);
		res.json({
			message:"User Deleted"
		})
	}
	catch(err){
		next(err);
	}
}
