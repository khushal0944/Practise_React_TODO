import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark"

const theme: Theme = JSON.parse(localStorage.getItem("theme")!) || "light"; 
console.log("theme", theme)

const initialState = {theme}

const ThemeSlice = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", JSON.stringify(state.theme))
        }
    }
})

export const {switchTheme} = ThemeSlice.actions

export default ThemeSlice.reducer