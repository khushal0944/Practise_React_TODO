import { createSlice } from "@reduxjs/toolkit";

interface TodosType {
	id: number;
	todo: string;
	completed?: boolean;
}

const todos: TodosType[] =
	JSON.parse(localStorage.getItem("todosStored")!) || [];

    
const TodoSlice = createSlice({
	name: "todo",
	initialState: { todos },
	reducers: {
		addTodo: (state, action) => {
			let todo: TodosType = {
				id: Math.floor(Math.random() * 100000000),
				todo: action.payload,
				completed: false,
			};
			state.todos.push(todo);
			localStorage.setItem("todosStored", JSON.stringify(state.todos));
		},
		deleteTodo: (state, action) => {
            console.log("id ", action.payload)
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
			localStorage.setItem("todosStored", JSON.stringify(state.todos));
		},
        markTodo: (state, action) => {
            state.todos = state.todos.map(
				(todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
			);
			localStorage.setItem("todosStored", JSON.stringify(state.todos));
        },
        editTodo: (state, actions) => {
            state.todos = state.todos.map((todo) =>
				todo.id === actions.payload.id
					? { ...todo, todo: actions.payload.todo }
					: todo
			);
			localStorage.setItem("todosStored", JSON.stringify(state.todos));
        },
        clearAllTodos: (state) => {
            state.todos = []
            localStorage.setItem("todosStored", JSON.stringify([]));
        }
	},
});

export const {addTodo, editTodo, deleteTodo, markTodo, clearAllTodos} = TodoSlice.actions

export default TodoSlice.reducer