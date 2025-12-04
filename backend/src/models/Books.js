const mongoose=require("mongoose");

const bookSchema= mongoose.Schema({
	title:{
		type: String,
		required:true
	},
	author:{
		type:String,
		required:true
	},
	description:String,
	price:{
		type:Number,
		required:true
	},
	stock:{
		type:String,
		default:0
	},
	category:String,
	isbn:{
		type:String,
		unique:true
	},
	publishedYear:Number
},{timestamps:true});

module.exports =mongoose.model("Book",bookSchema);
