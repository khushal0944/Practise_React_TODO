// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTodo, editTodo, markTodo } from "../store/slices/TodoSlice";
// import AddTodo from "./AddTodo";

// type FilterType = "All" | "Active" | "Inactive";
// interface TodosType {
// 	id: number;
// 	todo: string;
// 	completed?: boolean;
// }

// function AllTodos() {
// 	const filter: FilterType = useSelector(
// 		(state: any) => state.filterReducer.filter
// 	);
// 	const AllTodos: TodosType[] = useSelector(
// 		(state: any) => state.todoReducer.todos
// 	);
//     const [editingId, setEditingId] = useState<number | null>(null);
//     const [editBtn, setEditBtn] = useState(false);
//     const dispatch = useDispatch();
// 	const [filteredTodos, setFilteredTodos] = useState<TodosType[]>(AllTodos);
// 	useEffect(() => {
// 		if (filter == "All") setFilteredTodos(AllTodos);
// 		else if (filter == "Active") {
// 			setFilteredTodos(AllTodos.filter((todo) => todo.completed));
// 		} else if (filter == "Inactive") {
// 			setFilteredTodos(AllTodos.filter((todo) => !todo.completed));
// 		}
// 	}, [filter, AllTodos]);
//     const [editText, setEditText] = useState("");

//     function handleEditClick(todo: TodosType) {
//         if (editingId !== todo.id) {
//             dispatch(editTodo({id: todo.id, todo: editText}))
//             setEditingId(null);
//         } else {
//             setEditingId(todo.id);
//             setEditText(todo.todo);
//         }
//     }

// 	return (
// 		<>
// 			<section className="task-list">
// 				<h1 className="text-center text-2xl underline mb-3">
// 					{filter}
// 				</h1>
// 				<div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
// 					{filteredTodos.map((todo: TodosType) => (
// 						<div
// 							key={todo.id}
// 							className="task-item p-4 border-b border-gray-200 dark:border-gray-600 flex items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
// 						>
// 							<input
// 								type="checkbox"
// 								className={`mr-3 h-5 w-5 cursor-pointer`}
// 								checked={todo.completed}
// 								id={`${todo.id}`}
// 								onChange={() => dispatch(markTodo(todo.id))}
// 							/>
// 							{editingId !== todo.id ? (
// 								<label
// 									htmlFor={`${todo.id}`}
// 									className={`${
// 										todo.completed
// 											? "line-through text-gray-300"
// 											: ""
// 									} task-text flex-grow`}
// 								>
// 									{todo.todo}
// 								</label>
// 							) : (
// 								<input
// 									type="text"
// 									placeholder="Add a new task..."
// 									className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
// 									onChange={(e) =>
// 										setEditText(e.target.value)
// 									}
// 									value={editText}
// 								/>
// 							)}
// 							<div className="task-actions flex gap-2">
// 								<button
// 									onClick={() => handleEditClick(todo)}
// 									className="text-warning hover:bg-gray-200 dark:hover:bg-gray-500 p-1 rounded transition-colors"
// 								>
// 									{editingId === todo.id ? "Save" : "Edit"}
// 								</button>
// 								<button
// 									onClick={() =>
// 										dispatch(deleteTodo(todo.id))
// 									}
// 									className="text-[var(--delete-color)] hover:bg-gray-500 p-1 rounded transition-colors"
// 								>
// 									Delete
// 								</button>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</section>
// 		</>
// 	);
// }

// export default AllTodos;


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markTodo, editTodo } from "../store/slices/TodoSlice";

type FilterType = "All" | "Active" | "Inactive";
interface TodosType {
	id: number;
	todo: string;
	completed?: boolean;
}

function AllTodos() {
	const filter: FilterType = useSelector(
		(state: any) => state.filterReducer.filter
	);
	const AllTodos: TodosType[] = useSelector(
		(state: any) => state.todoReducer.todos
	);
	const [editingId, setEditingId] = useState<number | null>(null);
	const dispatch = useDispatch();
	const [filteredTodos, setFilteredTodos] = useState<TodosType[]>(AllTodos);
	useEffect(() => {
		if (filter == "All") setFilteredTodos(AllTodos);
		else if (filter == "Active") {
			setFilteredTodos(AllTodos.filter((todo) => todo.completed));
		} else if (filter == "Inactive") {
			setFilteredTodos(AllTodos.filter((todo) => !todo.completed));
		}
	}, [filter, AllTodos]);
	const [editText, setEditText] = useState("");

	function handleEditClick(todo: TodosType) {
        if (todo.completed) {
			setEditingId(null);
            return;
        }
		if (editingId === todo.id) {
			dispatch(editTodo({ id: todo.id, todo: editText }));
			setEditingId(null);
		} else {
			setEditingId(todo.id);
			setEditText(todo.todo);
		}
	}

    function changeTodoCompleted( todo: TodosType) {
        if (editingId === todo.id) return;
        dispatch(markTodo(todo.id));
    }

	return (
		<>
			<section className="task-list">
				<div className="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
					{filteredTodos.map((todo: TodosType) => (
						<div
							key={todo.id}
							className="task-item p-4 border-b border-gray-200 dark:border-gray-600 flex items-center hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
						>
							<input
								type="checkbox"
								className="mr-3 h-5 w-5 flex-shrink-0 cursor-pointer accent-blue-500"
								checked={todo.completed}
								id={`${todo.id}`}
								onChange={() => changeTodoCompleted(todo)}
							/>
							{editingId !== todo.id ? (
								<label
									htmlFor={`${todo.id}`}
									className={`${
										todo.completed
											? "line-through text-gray-400 dark:text-gray-300"
											: "text-gray-800 dark:text-white"
									} task-text max-h-32 flex-grow break-words overflow-auto text-ellipsis`}
									style={{
										scrollbarWidth: "none" /* Firefox */,
										msOverflowStyle: "none" /* IE/Edge */,
										overflowY: "auto",
									}}
								>
									{todo.todo}
								</label>
							) : (
								<div className="flex-grow">
									<textarea
										placeholder="Edit task..."
										className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white resize-none max-h-32"
										onChange={(e) =>
											setEditText(e.target.value)
										}
										value={editText}
										style={{
											scrollbarWidth:
												"none" /* Firefox */,
											msOverflowStyle:
												"none" /* IE/Edge */,
											overflowY: "auto",
										}}
										onInput={(e) => {
											const target =
												e.target as HTMLTextAreaElement;
											target.style.height = "auto";
											target.style.height = `${Math.min(
												target.scrollHeight,
												128
											)}px`;
										}}
									/>
								</div>
							)}
							<div className="task-actions flex gap-2 ml-2 flex-shrink-0">
								<button
									onClick={() => handleEditClick(todo)}
									className="text-blue-600 dark:text-warning hover:bg-gray-200 dark:hover:bg-gray-500 p-1 rounded transition-colors whitespace-nowrap"
								>
									{editingId === todo.id ? "Save" : "Edit"}
								</button>
								<button
									onClick={() =>
										dispatch(deleteTodo(todo.id))
									}
									className="text-red-600 dark:text-danger hover:bg-gray-200 dark:hover:bg-gray-500 p-1 rounded transition-colors whitespace-nowrap"
								>
									Delete
								</button>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default AllTodos;