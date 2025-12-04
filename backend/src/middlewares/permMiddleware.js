const User = require("../models/User");
const { all } = require("../routes/bookRouter");

function permission(...allowed){
	return async (req,res,next)=>{
		try{
			const user= await User.findById(req.user);

			if(!user){
				return res.status(401).json({
					message:"Please Login"
				})
			}
			if(!allowed.includes(user.role)){
				return res.status(404).json({
					message:"Access Denied"
				})
			}
			next()
		}catch(err){
			res.json({
				message:err.message
			});
		}
	}
}

module. exports=permission;
