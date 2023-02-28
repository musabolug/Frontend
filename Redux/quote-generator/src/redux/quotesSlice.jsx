import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomQuotes = createAsyncThunk("quotes/getRandomQuotes", async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/random?minLength=70&maxLength=75`) 
    return res.data
})

export const fetchCodeQuotes = createAsyncThunk("quotes/getCodeQuotes", async (minVal) =>{
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/random?minLength=${minVal}&maxLength=${minVal+1071}`)
    return res.data
})
const quotesSlice = createSlice({
    name:"quotes",
    initialState:{
        isLoading:false,
        data:[],
        codeData:[],
    },
    reducers:{

    },
    extraReducers:{
        [fetchRandomQuotes.fulfilled]: (state,action) =>{
            state.data = action.payload
            console.log("data",state.data)
        },
        [fetchRandomQuotes.pending]:(state,action) =>{
            state.isLoading = true;
        },
        [fetchRandomQuotes.rejected] : (state,action) =>{
            state.error = action.error.message;
            state.isLoading = false;
        },
        [fetchCodeQuotes.fulfilled]: (state,action) =>{
            state.codeData = action.payload
            console.log("codeData",state.codeData)
        },
        [fetchCodeQuotes.pending]:(state,action) =>{
            state.isLoading = true;
        },
        [fetchCodeQuotes.rejected] : (state,action) =>{
            state.error = action.error.message;
            state.isLoading = false;
        },

    }
})
export const {} = quotesSlice.actions
export default quotesSlice.reducer
