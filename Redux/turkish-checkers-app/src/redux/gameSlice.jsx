import { createSlice ,current} from "@reduxjs/toolkit";
import { configureBoard ,setWhiteStones,setBlackStones } from "../checkers";
const configureStonesOnBoard  = (arrays)=>{
    const board = configureBoard().flat();
    const totalUsersStones = [
       ...arrays.flat()
    ]   
    console.log("board",board)
    console.log("TotalStones",totalUsersStones.flatMap((obj)=>obj))
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
        whiteStones:[],
        blackStones:[],
        movable: false,
        theme:"light",
        showUserForm: false,
        isActive: false,
        movableAreas: [],
        direction: "",
        selectedObj: {},
        totalStones:[],
        showHint: true,
        eatenStones:[],
        eatableIndexes:[]
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
            state.user2.name= user2;
            state.gameStatus= "playing";
            state.user1.stones = setWhiteStones().flat()
            state.user2.stones = setBlackStones().flat()
            state.whiteStones = state.user1.stones
            state.blackStones = state.user2.stones
            state.eatableStones=[]
            state.totalStones.push(state.whiteStones)
            state.totalStones.push(state.blackStones)
            console.log("totalStones",state.totalStones.flat())
            state.board = configureStonesOnBoard(state.totalStones.flat())
            console.log("user1",state.user1.stones)
            console.log("user2",state.user2.stones)
        },
        resetGame:(state)=>{
            state.gameStatus= "";
            state.user1.stones = setWhiteStones().flat()
            state.user2.stones = setBlackStones().flat()
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
        state.whiteStones=[]
        state.blackStones=[]
        state.movable= false
        state.theme="light"
        state.showUserForm= false
        
        },
     
        selectStone:(state,action)=>{
            state.showHint=true
            state.selectedStone = action.payload
            console.log(state.selectedStone)
            if(state.player ==="white"){
             const Whitestones=current(state.user1.stones)
              state.selectedObj = Whitestones.find((obj)=> obj.id === state.selectedStone)
             if(state.selectedObj){
                 state.selectedObj = {...state.selectedObj, isActive : true}
                 console.log(state.selectedObj.isActive)
                 state.isActive = state.selectedObj.isActive
                 const x = state.selectedObj.positionX
                 const y = state.selectedObj.positionY
                 let isBlocked = false
                 const eatableStones = [] 
                 const xAxis = ["a","b","c","d","e","f","g","h"]
                 if(state.selectedObj.name ==="white-pawn"){
                    //* EATABLE AREAS for white- pawn
                    state.eatableIndexes.length=0
                   
                    if(x === "a"){
                        const eatableStones = current(state.user2.stones).find((obj)=>obj.id ===`b${y+1}`)
                        console.log("eatableStones",eatableStones)
                        if(eatableStones !== undefined){
                            state.eatableIndexes.push(`b${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                    }else if(x === "b"){
                        
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`a${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `c${y+1}`))
                        console.log("eatableStones",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`a${y+1}`,`c${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`a${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`c${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                     
                    }
                    else if(x === "c"){
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`b${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `d${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`b${y+1}`,`d${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`b${y+1}`)
                        }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`d${y+1}`)
                        }
                     
                    }
                    else if(x === "d"){
                        
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`c${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `e${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`c${y+1}`,`e${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                        else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`c${y+1}`)}
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`e${y+1}`)
                        }
                    }
                    else if(x === "e"){
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`d${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `f${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`d${y+1}`,`f${y+1}`)
                            console.log("eatable",current(state.eatableIndexes).flat())
                        }
                        else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`d${y+1}`)
                        }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`f${y+1}`)
                        }
                    }
                    else if(x === "f"){
                        
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`e${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `g${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`e${y+1}`,`g${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                        else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`e${y+1}`)
                        }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`g${y+1}`)
                        }
                    }
                    else if(x === "g"){
                        
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`f${y+1}`))
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id === `h${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                            state.eatableIndexes.push(`f${y+1}`,`h${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                        else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                            state.eatableIndexes.push(`f${y+1}`)
                        }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`h${y+1}`)
                        }
                    }
                    else if(x === "h"){
                       
                        eatableStones.push(current(state.user2.stones).find((obj)=>obj.id ===`g${y+1}`))
                        console.log("eatableStone",eatableStones)
                        console.log("eatableStones",eatableStones.flat())
                        if(eatableStones[0] !== undefined ){
                            state.eatableIndexes.push(`g${y+1}`)
                            console.log("eatable",current(state.eatableIndexes))
                        }
                    }
                    //* -------------
           
                    const forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === Number(y+1))
                    console.log("forward",current(forwardStone))
                    if(forwardStone.isEmpty ===false){
                        isBlocked = true
                    }
                    if(!isBlocked){
                    if(state.selectedObj.positionY === 2){
                        state.movableAreas = [`${x}3`,`${x}4`]
                        if(state.eatableIndexes[0] !== undefined){
                            console.log(current(state.eatableIndexes))
                            state.movableAreas.push(state.eatableIndexes)
                        }
                        console.log(state.movableAreas)
                    }
                    else{
                        state.movableAreas = [`${x}${y+1}`,]
                        if(state.eatableIndexes[0] !== undefined){
                            console.log(current(state.eatableIndexes).flat())
                            state.movableAreas.push(current(state.eatableIndexes).flat())
                            console.log("currnet",state.movableAreas.flatMap(obj=>obj))
                        }
                    }}
                    if(isBlocked){
                        if(state.eatableIndexes[0] !== undefined){
                            console.log(current(state.eatableIndexes))
                            state.movableAreas = state.eatableIndexes
                        }
                        else{
                        state.movableAreas = []
                        }
                    }
                 }
             }
            
            }
            if(state.player === "black"){
                const Blackstones=current(state.user2.stones)
               state.selectedObj = Blackstones.find((obj)=> obj.id === state.selectedStone)
                if(state.selectedObj){
                    state.selectedObj = {...state.selectedObj, isActive : true}
                    console.log(state.selectedObj.isActive)
                    state.isActive = state.selectedObj.isActive
                    const x = state.selectedObj.positionX
                    const y = state.selectedObj.positionY

                     //* EATABLE AREAS for Black- pawn
                     let isBlocked = false
                     const eatableStones = [] 
                     if(state.selectedObj.name ==="black-pawn"){
                    
                        state.eatableIndexes.length=0
                       
                        if(x === "a"){
                            const eatableStones = current(state.user1.stones).find((obj)=>obj.id ===`b${y-1}`)
                            console.log("eatableStones",eatableStones)
                            if(eatableStones !== undefined){
                                    state.eatableIndexes.push(`b${y-1}`)
                                console.log("eatable",current(state.eatableIndexes))
                            }
                        }else if(x === "b"){
    
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`a${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `c${y-1}`))
                            console.log("eatableStones",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                    state.eatableIndexes.push(`a${y-1}`,`c${y-1}`)
                                console.log("eatable",current(state.eatableIndexes))
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`a${y-1}`)
                            }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`c${y-1}`)
                        }
                         
                        }
                        else if(x === "c"){
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`b${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `d${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                    state.eatableIndexes.push(`b${y-1}`,`d${y-1}`)
                                console.log("eatable",current(state.eatableIndexes))
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`b${y-1}`)
                            }
                            else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                                state.eatableIndexes.push(`d${y-1}`)
                            }
                        }
                        else if(x === "d"){
                            
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`c${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `e${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                state.eatableIndexes.push(`c${y-1}`,`e${y-1}`)
                                    console.log("eatable",current(state.eatableIndexes))
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`c${y-1}`)
                            }
                            else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                                state.eatableIndexes.push(`e${y-1}`)
                            }
                        }
                        else if(x === "e"){
                            console.log(current(state.user1.stones))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`d${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `f${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                state.eatableIndexes.push(`d${y-1}`,`f${y-1}`)
                                    console.log("eatable",current(state.eatableIndexes))
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`d${y-1}`)
                            }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`f${y-1}`)
                        }
                        }
                        else if(x === "f"){
                            
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`e${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `g${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                state.eatableIndexes.push(`e${y-1}`,`g${y-1}`)
                                    // console.log("eatable",current(state.eatableIndexes))
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`e${y-1}`)
                            }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`g${y-1}`)
                        }
                        }
                        else if(x === "g"){
                            
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`f${y-1}`))
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id === `h${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined && eatableStones[1] !== undefined ){
                                    // console.log("eatable",current(state.eatableIndexes))
                                    state.eatableIndexes.push(`f${y-1}`,`h${y-1}`)
                            }
                            else if(eatableStones[0] !== undefined && eatableStones[1] === undefined){
                                state.eatableIndexes.push(`f${y-1}`)
                            }
                        else if(eatableStones[0] === undefined && eatableStones[1] !== undefined){
                            state.eatableIndexes.push(`h${y-1}`)
                        }
                        }
                        else if(x === "h"){
                           
                            eatableStones.push(current(state.user1.stones).find((obj)=>obj.id ===`g${y-1}`))
                            console.log("eatableStone",eatableStones)
                            console.log("eatableStones",eatableStones.flat())
                            if(eatableStones[0] !== undefined ){
                                state.eatableIndexes.push(`g${y-1}`)
                                    // console.log("eatable",current(state.eatableIndexes))
                            }
                      
                        }
                    }
                    //* -------------

                    //*Movable Areas for Black Pawn
                    const forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === Number(y-1))
                    console.log("forward",current(forwardStone))
                    if(forwardStone.isEmpty ===false){
                        isBlocked = true
                    }
                    if(!isBlocked){
                        if(state.selectedObj.positionY === 7){
                        state.movableAreas = [`${x}6`,`${x}5`]
                        if(state.eatableIndexes[0] !== undefined || state.eatableIndexes[1] !== undefined){
                            console.log(current(state.eatableIndexes))
                            state.movableAreas.push(state.eatableIndexes)
                        }
                        console.log(state.movableAreas)
                    }
                    else{
                        state.movableAreas = [`${x}${y-1}`,]
                        if(state.eatableIndexes[0] !== undefined || state.eatableIndexes[1] !== undefined){
                            console.log("eatable",state.eatableIndexes)
                            state.movableAreas.push(state.eatableIndexes.flat())
                            console.log(state.movableAreas.flat())
                        }
                    }}
                    if(isBlocked){
                        if(state.eatableIndexes[0] !== undefined || state.eatableIndexes[1] !== undefined){
                            console.log(current(state.eatableIndexes))
                            state.movableAreas = state.eatableIndexes
                        }
                        else{
                        state.movableAreas = []
                        }
                    }
                    //*-------------
                }
                
            }
        },
        moveStone:(state,action)=>{
            state.showHint=false
            state.direction = action.payload
            console.log("direction",state.direction)
            console.log(state.selectedObj.positionX)
            console.log(state.selectedObj.positionY)
            console.log("selected",current(state.selectedObj))
            const directionArray = state.direction.split("")
            console.log(directionArray)
            if(state.player==="white"){
                state.selectedObj = {...state.selectedObj, positionX:directionArray[0], positionY: directionArray[1]}
                console.log(state.selectedObj)
             console.log("ChangeObjectinArray",current(state.user1.stones).find((obj)=>obj.id === state.selectedObj.id) )
          
            const ChangeArray = current(state.user1.stones).map((obj)=>{
                if(obj.id === state.selectedObj.id){
                    return {...obj, positionX:directionArray[0], positionY: Number(directionArray[1]) , id: state.direction}
                }
                return obj
            })
            if(state.user2.stones.find((obj)=> obj.id === state.direction)){
                const eatenStone = state.user2.stones.find((obj)=> obj.id === state.direction)
                state.eatenStones.push(eatenStone)
                const index = state.user2.stones.indexOf(eatenStone)
                if(index>-1){
                    state.user2.stones.splice(index,1);
                }
                console.log("eatenStone",state.user2.stones)
                console.log("eatenStones",current(state.eatenStones))
            }
            state.user1.stones.length= 0
            state.user1.stones = ChangeArray.flatMap(obj=>obj)
            state.totalStones.length= 0
            state.totalStones.push(state.user1.stones)
            state.totalStones.push(state.user2.stones)
            console.log(state.totalStones)
            state.board = configureStonesOnBoard(state.totalStones.flat())           
            // console.log("changedArray",state.user1.stones)
            // console.log("totalStonesInMove",state.totalStones)
        

            }
            if (state.player==="black") {
                state.selectedObj = {...state.selectedObj, positionX:directionArray[0], positionY: directionArray[1]}
                console.log(state.selectedObj)
            //  console.log("ChangeObjectinArray",current(state.user2.stones).find((obj)=>obj.id === state.selectedObj.id) )
          
            const ChangeArray = current(state.user2.stones).map((obj)=>{
                if(obj.id === state.selectedObj.id){
                    return {...obj, positionX:directionArray[0], positionY: Number(directionArray[1]) , id: state.direction}
                }
                return obj
            })

            if(state.user1.stones.find((obj)=> obj.id === state.direction)){
                const eatenStone = state.user1.stones.find((obj)=> obj.id === state.direction)
                state.eatenStones.push(eatenStone)
                const index = state.user1.stones.indexOf(eatenStone)
                if(index>-1){
                    state.user1.stones.splice(index,1);
                }
                console.log("eatenStone",state.user1.stones)
                console.log("eatenStones",current(state.eatenStones))
            }
            state.user2.stones.length= 0
            state.user2.stones = ChangeArray.flatMap(obj=>obj)
            state.totalStones.length= 0
            state.totalStones.push(state.user2.stones.flat())
            state.totalStones.push(state.user1.stones.flat())
            console.log(state.totalStones)
            state.board = configureStonesOnBoard(state.totalStones.flat())           
            // console.log("changedArray",state.user2.stones.flat())
            // console.log("user1",current(state.user1.stones).flatMap(obj=>obj))
            // console.log("totalStonesInMove",current(state.totalStones).flatMap((obj)=>obj))
            
            }
            
        },
        setPlayer:(state,action)=>{
                state.player = action.payload
        },
        setShowUserForm:(state,action)=>{
            state.showUserForm = action.payload
        }

    },
})

export const {startGame,closeResult,openResult,moveStone,setShowUserForm,resetGame,selectStone,setPlayer} = gameSlice.actions
export default gameSlice.reducer