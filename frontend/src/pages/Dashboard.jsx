import { useEffect, useState } from "react";

function Dashboard(){
	const [user,setUser]=useState(null);

	useEffect(()=>{
		const token=localStorage.getItem("token");

		if(!token){
			window.location.href="/login";
			return;
		}
		fetch("http://localhost:4000/api/user/me",{
			headers:{
				"Authorization": `Bearer ${token}`
			}
		})
		.then(res=>res.json())
		.then(data=>{
			setUser(data.user||data)
			console.log(data);
		})
		.catch(err=>console.log(err));
		console.log(user)

	},[])

	if(!user){
		return(
			<h1>Loading...</h1>
		)
	}
	return(
		<>
			<h1>Dashboard</h1>
			<p>Username:{user.name}</p>
			<p>Email: {user.email}</p>
			<p>Role:{user.role}</p>
		</>
	)
}

export default Dashboard;
