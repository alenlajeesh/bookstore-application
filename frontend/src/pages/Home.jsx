import { useEffect, useState } from "react";
import axios from "axios"
function Home(){
	const [books,setBooks]=useState([]);

	useEffect(()=>{
		axios.get( "http://localhost:4000/api/books/")
			.then((res)=>{
				setBooks(res.data.books)
			})
			.catch((err)=>console.log(err));
	},[])
	return(
		<>
			<h1>Home</h1>
			{
				books.length===0 ?<p>No Books found</p>:
					books.map((book)=>(
						<div key={book._id}>
							<h2>{book.title}</h2>
							<p>{book.author}</p>
							<p>{book.description}</p>
						</div>
					))
			}
		</>
	)
}

export default Home;
