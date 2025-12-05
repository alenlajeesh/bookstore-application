import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
	const navi =useNavigate();

	const [formData,setFormData]=useState({
		email:"",
		password:""
	})
	const handleSubmit =async (e)=>{
		e.preventDefault()
		try{
			const res= await fetch("http://localhost:4000/api/auth/login",{
				method:"POST",
				headers:{"Content-Type":"application/json"},
				body:JSON.stringify(formData)
			})

			const data =await res.json();

			if(res.ok){
				localStorage.setItem("token",data.token);
				localStorage.setItem("user",JSON.stringify(data.user));
				
				navi("/dashboard");
			}else{
				alert(data.message);
			}
		}catch(err){
			console.error(err);
			alert("Login failed");
		}
	}
	const handleChange=(e)=>{
		setFormData({
			...formData,
			[e.target.name]:e.target.value
		})
	}
	return(
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>

			<label htmlFor="email">Email   :</label>
			<input id="email" type="email" name="email"placeholder="Email" value={formData.email} onChange={handleChange}/><br/>
			<label htmlFor="password">Password:</label>
			<input id="password" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
			<br/>
			<button type="submit">Submit</button>
			<button type="reset">Cancel</button>
			</form>
		</>
	)
}

export default Login;
