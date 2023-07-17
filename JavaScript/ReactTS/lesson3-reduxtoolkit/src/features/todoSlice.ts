import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: string,
    title: string
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: "todosApp",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            const newTodo = { id: crypto.randomUUID(), title: action.payload }
            state.push(newTodo);
        },
        remove:(state, action: PayloadAction<string>)=>{
                return state.filter(item=>item.id !== action.payload);
        }
    }

})

export default todoSlice.reducer;
export const { add,remove } = todoSlice.actions;

