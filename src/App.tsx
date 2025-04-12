import AddTodo from "./components/AddTodo";
import AllTodos from "./components/AllTodos";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className=" max-w-lg mx-auto mt-5 px-2">
				<AddTodo />
                <Filter />
				<AllTodos />
			</div>
		</>
	);
}

export default App;
