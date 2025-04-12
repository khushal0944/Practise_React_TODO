import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./slices/ThemeSlice";
import TodoSlice from './slices/TodoSlice'
import FilterSlice from './slices/FilterSlice'

const store = configureStore({
    reducer: {
        themeReducer: ThemeSlice,
        todoReducer: TodoSlice,
        filterReducer: FilterSlice,
    }
})

export {store};