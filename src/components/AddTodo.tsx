import { FormEvent, useState } from "react";
import { addTodo } from "../store/slices/TodoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    
    function submitTodo(e: FormEvent) {
        e.preventDefault();
        if (todo.trim() == "") return;
        dispatch(addTodo(todo));
        setTodo("");
    }

	return (
		<section className="task-form">
			<form
				className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow mb-6"
				onSubmit={(e) => submitTodo(e)}
			>
				<div className="flex gap-2">
					<input
						type="text"
						placeholder="Add a new task..."
						className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
						onChange={(e) => setTodo(e.target.value)}
						value={todo}
					/>
					<button
						type="submit"
						className="bg-[var(--primary-color)]  hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
					>
						Add Task
					</button>
				</div>
			</form>
		</section>
	);
}

export default AddTodo;
