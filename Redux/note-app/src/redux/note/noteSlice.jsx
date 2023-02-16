import {createSlice} from "@reduxjs/toolkit"

export const noteSlice = createSlice({
    name:"notes",
    initialState:{
        items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[],
        search: "",
    },
    reducers:{
            addNote:(state,action) =>{
                state.items.push(action.payload);
                localStorage.setItem("items",JSON.stringify(state.items))
            } ,

            deleteNote:(state,action) =>{
                state.items = state.items.filter(item => item.id !== action.payload)
                localStorage.setItem("items",JSON.stringify(state.items))
            },

            findNote:(state,action) => {
                state.search = action.payload;
            },

            changeColor:(state,action) =>{
                state.color = action.payload;
            },
    }
})

export const {addNote,deleteNote,findNote,changeColor} = noteSlice.actions ;
export default noteSlice.reducer;
