import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data"
const setCards = () =>{
    const newCardList = data.map((card,index)=>({
        ...card,
        id: data.length + (index + 1),
    }));
    return data.concat(newCardList).sort(()=> Math.random() -0.5);
};
const cardsSlice = createSlice({
    name: "cards",
    initialState:{
        cards:[],
        activeCards:[],
        status:"",
        beginScore: 200,
        correctMatch:40,
        wrongMatch:20,
        closedCards:24,
        openedCards:0,
        
    },
    reducers:{
        fillCards: (state)=>{
            state.cards = setCards();
        },
        resetGame: (state) =>{
            state.cards=[];
            state.activeCards=[];
            state.status="";
            state.beginScore= 200;
            state.correctMatch=40;
            state. wrongMatch=20;
            state.closedCards=24;
              state.openedCards=0;
        },
        openCard: (state, action) =>{
            const findCard = state.cards.find((card) => card.id === action.payload);
            findCard.status = true;
            state.activeCards =[...state.activeCards, findCard];
            state.status = "selected";
        },
        closeCard: (state) =>{
            state.activeCards.map(
                (item) => (state.cards.find((sultan) => sultan.id === item.id).status = false))
                state.status = "";
                state.activeCards = [];
        },
        correctMatch: (state) =>{
            state.beginScore = (state.beginScore + state.correctMatch ) ;
            state.openedCards += 2;    
            state.closedCards -= 2;
            state.activeCards = [];
            state.status = "success";
            
        },
        falseMatch: (state)=>{
            state.beginScore -= state.wrongMatch
            state.activeCards = [];
            state.status = "fail";
            
        },
        setMatch: (state, action) =>{
            const card =state.cards.find((sultan) => sultan.id === action.payload);
            card.matched = true
        }
    },
})

export const {fillCards,resetGame,openCard,closeCard,correctMatch,falseMatch,setMatch} = cardsSlice.actions;
export default cardsSlice.reducer;