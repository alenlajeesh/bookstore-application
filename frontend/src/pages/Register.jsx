import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
	const navigate=useNavigate();
	const [formData,setFormData]=useState({
		name:"",
		email:"",
		password:""
	});
	const handleSubmit =async (e)=>{
		e.preventDefault();
		try{
			const res =await fetch("http://localhost:4000/api/auth/register",{
				method:"POST",
				headers:{
					"content-Type":"application/json"
				},
				body:JSON.stringify(formData)
			})
			const data=await res.json();
			console.log(data);
			if(res.ok){
				navigate("/login")
			}else{
				console.log(data.message||"registation failed")
			}

		}catch(err){
			console.error("Error:",err)
			alert("Failed");
		}
	}
	const handleChange =(e)=>{
		setFormData({
			...formData,
			[e.target.name]:e.target.value
		});
	}
	return(
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>

			<label htmlFor="username">Username:</label>
			<input id="name" placeholder="name" onChange={handleChange} value={formData.name} name="name"/><br />
			<label htmlFor="email">Email   :</label>
			<input id="email" placeholder="Email" onChange={handleChange} value={formData.email} name="email"/><br/>
			<label htmlFor="password">Password:</label>
			<input id="password" onChange={handleChange} value={formData.password} placeholder="Password" name="password"/>
			<br/>
			<button type="submit">Submit</button>
			<button type="reset">Cancel</button>
			</form>
		</>
	)
}

export default Register;
