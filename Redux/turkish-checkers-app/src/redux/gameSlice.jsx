import { createSlice ,current} from "@reduxjs/toolkit";
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
        board: configureBoard(),
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
        theme:"light",
        showUserForm: false,
        isActive: false,
        movableAreas: []
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
            state.user2.stones =setBlackStones()
            state.board = configureStonesOnBoard()
            console.log("user1",state.user1.stones)
            console.log("user2",state.user2.stones)
        },
        resetGame:(state)=>{
            state.gameStatus= "";
            state.user1.stones = setWhiteStones()
            state.user2.stones = setBlackStones()
            state.board = configureStonesOnBoard()
            state.user1={
            id:1,
            name: "",
            totalStones: 16,
            color: "white",
            stones:[]
        }
        state.user2={
            id:2,
            name: "",
            totalStones: 16,
            color: "black",
            stones:[]
        }
        state.gameStatus=""
        state.showModal= false
        state.player="white"
        state. selectedStone= ""
        state.rivalStones=""
        state.whiteStones=""
        state. blackStones=""
        state.movable= false
        state.theme="light"
        state.showUserForm= false
        },
        moveStone:(state,action)=>{
            state.selectedStone = action.payload
            console.log(state.selectedStone)
            console.log("user1",current(state.user1.stones))
            console.log("user2  ",current(state.user2.stones))
            if(state.player ==="white"){
             const Whitestones=current(state.user1.stones)
             let selectedObj = Whitestones.find((obj)=> obj.id === state.selectedStone)
             if(selectedObj){
                 selectedObj = {...selectedObj, isActive : true}
                 console.log(selectedObj.isActive)
                 state.isActive = selectedObj.isActive
                 const x = selectedObj.positionX
                 const y = selectedObj.positionY
                 if(selectedObj.name ==="white-pawn"){
                    if(selectedObj.positionY === 2){
                        state.movableAreas = [`${x}3`,`${x}4`]
                        console.log(state.movableAreas)
                    }else{
                        state.movableAreas = [`${x}${y+1}`,]
                    }
                 }
             }
            
            }
            if(state.player === "black"){
                const Blackstones=current(state.user2.stones)
                let selectedObj = Blackstones.find((obj)=> obj.id === state.selectedStone)
                if(selectedObj){
                    selectedObj = {...selectedObj, isActive : true}
                    console.log(selectedObj.isActive)
                    state.isActive = selectedObj.isActive
                    
                }
            }
        },
        setShowUserForm:(state,action)=>{
            state.showUserForm = action.payload
        }

    },
})

export const {startGame,closeResult,openResult,moveStone,setShowUserForm,resetGame} = gameSlice.actions
export default gameSlice.reducer