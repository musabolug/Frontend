import { createSlice } from "@reduxjs/toolkit";
import {help} from "./helpMarkdownText"
export const markdownSlice = createSlice({
        name:"markdown",
        initialState:{
            currentText:"this is user input",
            textHelp: help,
            isShowingHelp: false,
            textUser:"this is user input",
        },
        reducers:{
            writeText: (state,action)=>{
                state.textUser =action.payload;
                state.currentText = action.payload
            },
            helpText: (state) =>{
                if(state.isShowingHelp=== true){
                    state.currentText = state.textHelp;
                    state.isShowingHelp = true
                }else{
                    state.currentText = state.textUser;
                    state.isShowingHelp = false
                }
            },
            toggleHelp:(state)=>{
                if(state.isShowingHelp === true){
                    state.isShowingHelp = false;
                }else{
                    state.isShowingHelp = true
                }
                console.log(state.isShowingHelp)
            }

        },

})

export const {helpText,writeText,toggleHelp} = markdownSlice.actions;
export default markdownSlice.reducer;