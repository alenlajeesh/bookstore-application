import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import NavBar from "./components/NavBar";
import CreateBook from "./pages/CreateBook"
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
				<Route path="/create-book" element={<CreateBook/>}></Route>
			</Routes>
		</BrowserRouter>
    </>
  )
}

export default App
