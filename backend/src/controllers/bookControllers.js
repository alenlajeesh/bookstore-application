const Book =require("../models/Books");

exports.createBook= async (req,res)=>{
	try{
		const book = await Book.create(req.body);
		res.json({
			success:true,
			book
		})

	}catch(err){
		res.status(500).json({
			message:err.message
		})
	}	
}

exports.getBookById= async (req,res) =>{
	try{
		const book=await Book.findById(req.params.id);
		if(!book){
			res.status(404).json({
				message:"Not Found"
			})
		}

		res.json({
			success:true,
			book
		})
	}catch(err){
		res.status(500).json({
			message:err.message
		})
	}
}

exports.getAllBooks= async (req,res)=>{
	try{
		const books =await Book.find();

		if(!books){
			res.json({
				message:"Books are empty"
			})
		}
		
		res.json({
			success:true,
			books
		})

	}catch(err){
		res.json({
			message:err.message
		})
	}
}

exports.updateBookById= async (req,res)=>{
	try{
		const book = await  Book.findByIdAndUpdate(req.params.id,req.body,{new:true});

		if(!book){
			res.status(404).json({
				message:"Not Found"
			})
		}
		res.json({
			success:true,
			book
		})


	}catch(err){
		res.status(401).json({
			message:err.message
		})
	}
}

exports.deleteBookById =async (req,res)=>{
	try{
		await Book.findByIdAndDelete(req.params.id)

		res.json({
			message:"Successfully deleted Book"
		})
	}catch(err){
		res.json({
			message:err.message
		})
	}
}
