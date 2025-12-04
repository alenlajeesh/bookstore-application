const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
	name:{
		type:String,
		unique:true,
		required:true
	},
	email:{
		type:String,
		unique:true,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	role:{
		type:String,
		default:"user",
		enum:["user","admin","manager"]
	}

},{timestamps:true});

module.exports= mongoose.model("User",userSchema);
