import {createSlice} from "@reduxjs/toolkit"
import wordData from "../data/wordData.json"
import arrayShuffle from 'array-shuffle';
export const typespeedSlice = createSlice({
    name:"typespeed",
    initialState:{
        words: arrayShuffle(wordData.words).map((item) => {
            return {...item, stateus: ""}
        }),
        language: ["TR","EN"],
        selectedLanguage:"TR",
        inputText:"",
        currentWord: "",
        wordIndex:0,
        totalCorrectWords:0,
        totalWrongWords:0,
        correctWordsTick:0,
        wrongWordsTick:0,
        tickstatus:false,
        timer:60,
        start:false,
        modalOpen:false,
        timerKey:60,
    },
    reducers:{


    }
})

export const {} = typespeedSlice.actions;
export default typespeedSlice.reducer 