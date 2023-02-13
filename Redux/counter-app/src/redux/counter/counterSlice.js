import {createSlice} from "@reduxjs/toolkit"

export const counterSlice = createSlice({
name: "counter",
initialState:{
    value:0
},
reducers:{
    increment: (state) =>{
      state.value += 1;
    },
    decremnet: (state) =>{
        state.value -= 1;
    },
    incrementByAmount: (state,action) =>{
        state.value += Number (action.payload);
        },  
},
})
export const {increment, decremnet,incrementByAmount} = counterSlice.actions;   
export default counterSlice.reducer;