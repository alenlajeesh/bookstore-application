const jwt = require("jsonwebtoken");
module.exports=(useId)=>{
	return jwt.sign(
		{
			id:useId
		},
		process.env.JWT_SECRET,
		{
			expiresIn:"7d"
		}
	);
};
