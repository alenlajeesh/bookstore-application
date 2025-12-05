import { useNavigate }from "react-router-dom"

function NavBar(){
	const  navi =  useNavigate();
	return(
		<>	
			<button onClick={()=>navi("/")}>Home</button>
			<button onClick={()=>navi("/dashboard")}>Dashboard</button>
			<button onClick={()=>navi("/login")}>Login</button>
			<button onClick={()=>navi("/register")}>Register</button>
		</>
	)
}

export default NavBar;
