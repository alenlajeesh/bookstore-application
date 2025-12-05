import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/login" element={<Login/>}></Route>
				<Route path="/register" element={<Register/>}></Route>
				<Route path="/dashboard" element={<Dashboard/>}></Route>
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
