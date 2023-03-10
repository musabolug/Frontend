import { createSlice } from "@reduxjs/toolkit";
import { configureBoard ,setWhiteStones,setBlackStones } from "../checkers";
const configureStonesOnBoard  = ()=>{
    const board = configureBoard().flat();
    const totalUsersStones = [
        ...setWhiteStones().flat(),
        ...setBlackStones().flat(),
    ]  
    // positionX:xAxis[i],
    // positionY:j,
    const xAxis = ["a","b","c","d","e","f","g","h"]
    for(let i = 0; i<=7;i++){
        for(let j =8 ; j>=1; j--){
         const anyStone = totalUsersStones.find(
            (stone) => stone.positionX === xAxis[i]  && stone.positionY === j
            )
            if(anyStone){
                const findStone = board.find(
                (stone) => stone.positionX === xAxis[i]  && stone.positionY === j
            )
            findStone.stoneData = anyStone;
            findStone.isEmpty = false
         }
        }
    }
    return board
}
const gameSlice = createSlice({
    name:"game",
    initialState:{
        board: configureStonesOnBoard(),
        user1:{
            id:1,
            name: "",
            totalStones: 16,
            color: "white",
            stones:[]
        },
        user2:{
            id:2,
            name: "",
            totalStones: 16,
            color: "black",
            stones:[]
        },
        gameStatus:"",
        showModal: false,
        player:"white",
        selectedStone: "",
        rivalStones:"",
        whiteStones:"",
        blackStones:"",
        movable: false,
        theme:"light"
    },
    reducers:{
        openResult: (state) =>{
            state.showModal = true
        },
        closeResult: (state) =>{
            state.showModal = false
        },
        startGame:(state, action)=>{
            const {user1, user2} = action.payload;
            state.user1.name= user1; 
            state.user1.name= user2;
            state.gameStatus= "playing";
            state.user1.stones = setWhiteStones()
            state.user2.stones = setBlackStones()
            state.board = configureStonesOnBoard()
        },
        moveStone:(state,action)=>{
            state.selectedStone = action.payload
            console.log(state.selectedStone.id)
            console.log("user1", state.user1.stones)
            console.log("user2",state.user2.stones)

        },
    },
})

export const {startGame,closeResult,openResult,moveStone} = gameSlice.actions
export default gameSlice.reducer