import {createSlice} from "@reduxjs/toolkit"
import wordData from "../data/wordData.json"
import arrayShuffle from 'array-shuffle';
export const typespeedSlice = createSlice({
    name:"typespeed",
    initialState:{
        words: arrayShuffle(wordData.words).map((item) => {
            return {...item, status: ""}
        }),
        language: ["TR","EN"],
        selectedLanguage:"EN",
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
        accuracy:0,
    },
    reducers:{
        setAccuracy:(state,action) =>{
            state.accuracy = action.payload
        },
        resetWords:(state)=>{
            state.words= arrayShuffle(wordData.words).map((item) => {
                return {...item, status: ""}
            })
            state.wordIndex = 0;
            state.tickstatus = false
        },
        setModalstate:(state) =>{
            state.modalOpen = true
        },
        startGame: (state)=>{
            state.start = true
        },
        stopGame: (state) =>{
            state.timerKey = state.timerKey +1 
            state.start = false;
        },
        changeLanguage:(state,action) =>{
            state.selectedLanguage = action.payload
        },
        setCurrentWord:(state, action) =>{
            state.currentWord =action.payload;
        },
        setInput: (state,action)=>{
            const inputTextlastCharacter = 
            action.payload.trim().split("").length === 0 
            ? ""
            : action.payload.trim().split("")[action.payload.length - 1];
            
            const text = action.payload.trim();

            if(text){
                state.inputText = action.payload
            if(
                state.currentWord.split("")[state.inputText.length -1] === inputTextlastCharacter
            ){
                state.tickstatus = false;
            }else{
                state.tickstatus = true;
            }
        }else{
            state.inputText = "";
        }
        },
        setKeyTick: (state,action)=>{
            const currentWord = state.words[state.wordIndex];
            const char = action.payload.trim()
            const CharArray = char.split("")
            const CharArrayTR = currentWord.turkish.split("")
            const CharArrayEN = currentWord.english.split("")
            if(state.selectedLanguage === "EN"){
                CharArray.map((ch,index)=>{
                        if(ch === CharArrayEN[index]){
                          state.correctWordsTick++
                          state.tickstatus = false
                           
                        }else{
                            state.wrongWordsTick++
                            state.tickstatus = true
                        }
                })

            }else if(state.selectedLanguage === "TR"){
                CharArray.map((ch,index)=>{
                    if(ch === CharArrayTR[index]){
                        state.correctWordsTick++
                        state.tickstatus = false
                    }else{
                        state.wrongWordsTick++
                        state.tickstatus = true
                      }
                })
            }
        },
        setKeyPress:(state) =>{
            const currentWord = state.words[state.wordIndex];

            if(
                state.inputText.trim() === currentWord.turkish ||
                state.inputText.trim() === currentWord.english
                ){
                    state.totalCorrectWords++;
                    currentWord.status = "correct" 
                }else{
                    state.totalWrongWords++;
                    currentWord.status = "wrong";
                }
                state.wordIndex++;
                state.inputText = ""
        },
        resetGame:(state)=>{
            state.language= ["TR","EN"];
            state.selectedLanguage="EN";
            state.inputText="";
            state.currentWord= "";
            state.wordIndex=0;
            state.totalCorrectWords=0;
            state.totalWrongWords=0;
            state.correctWordsTick=0;
            state.wrongWordsTick=0;
            state.tickstatus=false;
            state.timer=60;
            state.start=false;
            state.modalOpen=false;
            state.timerKey=60;        
            state.accuracy=0
            resetWords()
        },
        setModalStatus: (state,action)=>{
            state.modalOpen = action.payload
        },
    }
})

export const {setModalStatus,resetGame,setAccuracy,setKeyPress,setKeyTick,setInput,setCurrentWord,changeLanguage,stopGame,startGame,setModalstate,resetWords} = typespeedSlice.actions;
export default typespeedSlice.reducer 