import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toDos: [],
}

export const toDoSlice = createSlice({
    name: "toDo",
    initialState,
    reducers: {}
})

export default toDoSlice.reducer;