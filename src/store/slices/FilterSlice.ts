import { createSlice } from "@reduxjs/toolkit";

interface FilterType {
    filter: "All" | "Active" | "Inactive"
}

const initialState: FilterType = {
    filter: "All"
}

const FilterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const {changeFilter} = FilterSlice.actions

export default FilterSlice.reducer