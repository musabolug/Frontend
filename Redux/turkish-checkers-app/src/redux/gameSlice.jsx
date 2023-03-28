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
        eatableIndexes:[],
        friendStones:[],
        falseItems:[],
        minfalse: 9,
        maxFalse:0,
        leftfalse:-1,
        rightfalse:8,
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
            state.board = configureBoard()
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
        state.movableAreas=[]
        state.direction=""
        state.selectedObj={} 
        state.totalStones=[]
        },
     
        selectStone:(state,action)=>{
            state.eatableIndexes.length= 0
            state.showHint=true
            state.selectedStone = action.payload
            console.log(state.selectedStone)
            if(state.player ==="white"){
                state.movableAreas.length = 0
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
           
                    const forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === Number(y+1))
                    const forwardStone1 =state.board.find((obj)=> obj.positionX === x && obj.positionY === Number(y+2))
                    console.log("forward",current(forwardStone))
                    if(forwardStone.isEmpty ===false ){
                        isBlocked = true
                    }
                    if(!isBlocked){
                    if(state.selectedObj.positionY === 2){
                        if(forwardStone1.isEmpty === true){
                            state.movableAreas = [`${x}3`,`${x}4`]
                            if(state.eatableIndexes[0] !== undefined){
                                console.log(current(state.eatableIndexes))
                                state.movableAreas.push(state.eatableIndexes)
                            }
                            console.log(state.movableAreas)
                        }else{
                            state.movableAreas = [`${x}3`]
                            if(state.eatableIndexes[0] !== undefined){
                                console.log(current(state.eatableIndexes))
                                state.movableAreas.push(state.eatableIndexes)
                            }
                            console.log(state.movableAreas)
                        }
                        
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
                   //* -------------------------------------------

             //! MOVABLE AND EATABLE AREAS FOR WHITE KNIGHT
             const xAxis = ["a","b","c","d","e","f","g","h"]
             if(state.selectedObj.name ==="white-knight"){
                state.movableAreas.length = 0
            for(let i=0; i<=7; i++ ){ // X AXIS
                for(let j = 8; j>=1; j--){ // Y AXIS
                    if(x=== xAxis[i] && y === j){
                        state.movableAreas = [
                            `${xAxis[i+1]}${j+2}`,
                            `${xAxis[i+1]}${j-2}`,
                            `${xAxis[i-1]}${j+2}`,
                            `${xAxis[i-1]}${j-2}`,
                            `${xAxis[i-2]}${j+1}`,
                            `${xAxis[i-2]}${j-1}`,
                            `${xAxis[i+2]}${j+1}`,
                            `${xAxis[i+2]}${j-1}`
                        ];
                        
                    }
                }
            }
            
         
            const user1StonesId = state.user1.stones.map((obj)=>obj.id)
       
            state.movableAreas = state.movableAreas.filter(obj=> !user1StonesId.includes(obj))
        }
        //! ----------------------------------------------
        //! MOVABLE AND EATABLE AREAS FOR WHITE-ROOK
        if(state.selectedObj.name=== "white-rook"){
            state.movableAreas.length = 0
            state.falseItems.length = 0
    
            // console.log(forwardStone)
            //* UP
            if(y < 8){
                state.falseItems = [state.minfalse]
                for(let i = y; i <= 8; i++){
                    let forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i+1)
                    if(forwardStone !== undefined)
                    {   if(forwardStone.isEmpty === false){
                        state.falseItems.push(forwardStone.positionY)
                        
                    }}
                        
                        state.minfalse = Math.min.apply(Math,state.falseItems)
                        if(forwardStone !== undefined){
                            const user1StonesId = state.user1.stones.map((obj)=>obj.id)
    
                            if( forwardStone.positionY === state.minfalse){
                                if(!user1StonesId.includes(forwardStone.id)){
                                    state.eatableIndexes.push(forwardStone.id)
                                }
                            }
                        }
                
                    }
                    console.log(state.minfalse)
                for(let i = y+1; i<state.minfalse; i++){
                    let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                    state.movableAreas.push(state.eatableIndexes)
                    state.movableAreas.push(movableArea.id)
                }
                state.minfalse = 9;
            }
             //* Down
             if(y>1){
                 const backFalseItems=[state.maxFalse]
               for(let i = y; i >=1; i--){
                   let backStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i-1)
                    console.log(backStone)
                   if(backStone !== undefined)
                   {   if(backStone.isEmpty === false){
                       backFalseItems.push(backStone.positionY)
                       
                   }
                }
                   console.log(backFalseItems)
                   state.maxFalse = Math.max.apply(Math,backFalseItems) 
                   if(backStone !== undefined){
                       const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                    if( backStone.positionY === state.maxFalse){
                        console.log(current(backStone))
                        if(!user1StonesId.includes(backStone.id)){
                            state.eatableIndexes.push(backStone.id)
                        }
                    }
                    state.eatableIndexes = state.eatableIndexes.filter(obj=> !user1StonesId.includes(obj))

                }
                   }
                   
                       for(let i = y-1; i>state.maxFalse; i--){
                           let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                           state.movableAreas.push(movableArea.id)
                           state.movableAreas.push(state.eatableIndexes)
                        }
                        state.maxFalse = 0
                        
                    }
                    
             //* Left
           if(x !== "a") 
           { const xAxis = ["a","b","c","d","e","f","g","h"]
             let horizentalIndex = xAxis.indexOf(x) -1
             let leftfalseItems= [xAxis[state.leftfalse]]
             for(let i = horizentalIndex; i >= 0; i-- ){
                let leftStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
               if(leftStone !== undefined)
               {   if(leftStone.isEmpty === false){
                   leftfalseItems.push(leftStone.positionX)
                   
               }
            }
                let indexesOfLetters = leftfalseItems.map((x) => xAxis.indexOf(x) )
         
               state.leftfalse = Math.max.apply(Math,indexesOfLetters) 
               console.log(state.leftfalse)
               if(leftStone !== undefined){  
                 const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                if( leftStone.positionX === xAxis[state.leftfalse]){
                    if(!user1StonesId.includes(leftStone.id)){
                        state.eatableIndexes.push(leftStone.id)
                    }
                }
            }


            }
            for(let i = horizentalIndex; i>state.leftfalse; i--){
                console.log(state.leftfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }}
            state.leftfalse = -1
             //* Right
           if(x !== "h") 
           { 
            const xAxis = ["a","b","c","d","e","f","g","h"]
           let horizentalIndex = xAxis.indexOf(x) +1
           console.log(horizentalIndex)
           let rightfalseItems= [xAxis[state.rightfalse]]
           for(let i = horizentalIndex; i <= 7; i++ ){
               let rightStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                if(rightStone !== undefined)
               {   if(rightStone.isEmpty === false){
                   rightfalseItems.push(rightStone.positionX)
                   
               }
            }
            if(rightfalseItems === undefined){
                state.rightfalse = 8
            }
                rightfalseItems = rightfalseItems.filter((obj) => obj !== undefined)
                let indexesOfLetters = rightfalseItems.map((x) => xAxis.indexOf(x) )
       
               
              
                    state.rightfalse = Math.min.apply(Math,indexesOfLetters) 
                
               if(rightStone !== undefined){  
                 const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                if( rightStone.positionX === xAxis[state.rightfalse]){
                    if(!user1StonesId.includes(rightStone.id)){
                        state.eatableIndexes.push(rightStone.id)
                    }
                }
            }


        }
        if(rightfalseItems.length === 0){
            state.rightfalse = 8
        }
            for(let i = horizentalIndex; i<state.rightfalse; i++){
                console.log(state.rightfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }
            state.rightfalse = 8
        }
            console.log(state.eatableIndexes)
            state.movableAreas.push(state.eatableIndexes)
        }
        //!---------------------------------------------
        //! MOVABLE AND EATABLE AREAS FOR WHITE-BISHOP
        if(state.selectedObj.name === "white-bishop"){
            state.movableAreas.length = 0
            state.eatableIndexes.length = 0
            //*Top Bottom Right Diagonals
            if(x !== "h"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)+1 
                let rightTopfalseItems= []
                let rightBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                let maxVal = 8
                   for(let i = horizentalIndex; i < 8; i++){
                    //*TOP
                    if(y !== 8){ 
                         let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                       counter++
                       if(diagonalStone !== undefined){
                           if(diagonalStone.isEmpty === false){
                               rightTopfalseItems.push(diagonalStone)
                           }
                       }
                      

                       rightTopfalseItems = rightTopfalseItems.filter((obj) => obj !== undefined)
                       let indexesOfY = rightTopfalseItems.map((obj) =>  obj.positionY  )
                       minFalse = Math.min.apply(Math,indexesOfY) 
                       

                       if(diagonalStone !== undefined){  
                           const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                          if( diagonalStone.positionY === minFalse ){
                              if(!user1StonesId.includes(diagonalStone.id)){
                                   state.eatableIndexes.push(diagonalStone.id)
                              }
                          }
                      }
                     
                       if(rightTopfalseItems.length === 0){
                           state.movableAreas.push(diagonalStone.id)
                           if(state.eatableIndexes.length > -1){
                               state.movableAreas.push(state.eatableIndexes)
                           }
                       }}
                       //*BOTTOM
                       if(y !== 1){

                           let diagonalStoneDownRight = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                           counterDown++
                        
                        if(diagonalStoneDownRight!== undefined){
                            console.log(current(diagonalStoneDownRight))
                            if(diagonalStoneDownRight.isEmpty === false){
                                rightBottomfalseItems.push(diagonalStoneDownRight)
                            }
                       }

                       
                       rightBottomfalseItems = rightBottomfalseItems.filter((obj)=> obj !== undefined)
                       let indexOfDownY = rightBottomfalseItems.map((obj)=> obj.positionY)
                       minFalseDown = Math.max.apply(Math,indexOfDownY)


                       if(diagonalStoneDownRight !== undefined){
                        const user1StonesId = state.user1.stones.map((obj)=> obj.id)
                        if(diagonalStoneDownRight.positionY === minFalseDown){
                            if(!user1StonesId.includes(diagonalStoneDownRight.id)){
                                state.eatableIndexes.push(diagonalStoneDownRight.id)
                            }
                        }
                      }

                        if(rightBottomfalseItems.length === 0){
                            if(diagonalStoneDownRight !== undefined){
                                state.movableAreas.push(diagonalStoneDownRight.id)
                                if(state.eatableIndexes.length > -1){
                                    state.movableAreas.push(state.eatableIndexes)
                                }
                            }
                           }
                       }
                      
                   }
                   
                   console.log(current(state.movableAreas))
            }
            //*--------------------------------------------------
          
            //* Top Left Diagonal
              if(x !== "a"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)-1 
                let leftTopfalseItems= []
                let leftBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                for(let i = horizentalIndex; i >= 0; i--){
                    //*TOP
                    if(y !== 8){   
                    let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                    counter++
                    if(diagonalStone !== undefined){
                        console.log(current(diagonalStone))
                        if(diagonalStone.isEmpty === false){
                            leftTopfalseItems.push(diagonalStone)
                        }
                    }
                    leftTopfalseItems = leftTopfalseItems.filter((obj) => obj !== undefined)
                    let indexesOfY = leftTopfalseItems.map((obj) =>  obj.positionY  )
                    minFalse = Math.min.apply(Math,indexesOfY) 
                    
                    if(diagonalStone !== undefined){  
                        const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                       if( diagonalStone.positionY === minFalse ){
                           if(!user1StonesId.includes(diagonalStone.id)){
                                state.eatableIndexes.push(diagonalStone.id)
                           }
                       }
                   }
                    if(leftTopfalseItems.length === 0){
                        state.movableAreas.push(diagonalStone.id)
                        if(state.eatableIndexes.length > -1){
                            state.movableAreas.push(state.eatableIndexes)
                        }
                    }}
                    //*BOTTOM
                    if(y !== 1){

                        let diagonalStoneDownLeft = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                        counterDown++
                     
                     if(diagonalStoneDownLeft!== undefined){
                         console.log(current(diagonalStoneDownLeft))
                         if(diagonalStoneDownLeft.isEmpty === false){
                            leftBottomfalseItems.push(diagonalStoneDownLeft)
                         }
                    }

                    
                    leftBottomfalseItems = leftBottomfalseItems.filter((obj)=> obj !== undefined)
                    let indexOfDownY = leftBottomfalseItems.map((obj)=> obj.positionY)
                    minFalseDown = Math.max.apply(Math,indexOfDownY)


                    if(diagonalStoneDownLeft !== undefined){
                     const user1StonesId = state.user1.stones.map((obj)=> obj.id)
                     if(diagonalStoneDownLeft.positionY === minFalseDown){
                         if(!user1StonesId.includes(diagonalStoneDownLeft.id)){
                             state.eatableIndexes.push(diagonalStoneDownLeft.id)
                         }
                     }
                   }

                     if(leftBottomfalseItems.length === 0){
                         if(diagonalStoneDownLeft !== undefined){
                             state.movableAreas.push(diagonalStoneDownLeft.id)
                             if(state.eatableIndexes.length > -1){
                                 state.movableAreas.push(state.eatableIndexes)
                             }
                         }
                        }
                    }
                }
                console.log(current(state.movableAreas))
              }
            //*--------------------------------------------------            
        }
        //!---------------------------------------------
        
        //! EATABLE AND MOVABLE AREAS FOR WHITE QUEEN
        if(state.selectedObj.name === "white-queen"){
            state.eatableIndexes.length = 0
            state.movableAreas.length = 0
                  //*Top Bottom Right Diagonals
                  if(x !== "h"){
                    const xAxis = ["a","b","c","d","e","f","g","h"]
                    let counter  = 1
                    let counterDown  = 1
                    let horizentalIndex = xAxis.indexOf(x)+1 
                    let rightTopfalseItems= []
                    let rightBottomfalseItems= []
                    let minFalse = y+1
                    let minFalseDown = y
    
                    let maxVal = 8
                       for(let i = horizentalIndex; i < 8; i++){
                        //*TOP
                        if(y !== 8){ 
                             let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                           counter++
                           if(diagonalStone !== undefined){
                               if(diagonalStone.isEmpty === false){
                                   rightTopfalseItems.push(diagonalStone)
                               }
                           }
                          
    
                           rightTopfalseItems = rightTopfalseItems.filter((obj) => obj !== undefined)
                           let indexesOfY = rightTopfalseItems.map((obj) =>  obj.positionY  )
                           minFalse = Math.min.apply(Math,indexesOfY) 
                           
    
                           if(diagonalStone !== undefined){  
                               const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                              if( diagonalStone.positionY === minFalse ){
                                  if(!user1StonesId.includes(diagonalStone.id)){
                                       state.eatableIndexes.push(diagonalStone.id)
                                  }
                              }
                          }
                         
                           if(rightTopfalseItems.length === 0){
                               state.movableAreas.push(diagonalStone.id)
                               if(state.eatableIndexes.length > -1){
                                   state.movableAreas.push(state.eatableIndexes)
                               }
                           }}
                           //*BOTTOM
                           if(y !== 1){
    
                               let diagonalStoneDownRight = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                               counterDown++
                            
                            if(diagonalStoneDownRight!== undefined){
                                console.log(current(diagonalStoneDownRight))
                                if(diagonalStoneDownRight.isEmpty === false){
                                    rightBottomfalseItems.push(diagonalStoneDownRight)
                                }
                           }
    
                           
                           rightBottomfalseItems = rightBottomfalseItems.filter((obj)=> obj !== undefined)
                           let indexOfDownY = rightBottomfalseItems.map((obj)=> obj.positionY)
                           minFalseDown = Math.max.apply(Math,indexOfDownY)
    
    
                           if(diagonalStoneDownRight !== undefined){
                            const user1StonesId = state.user1.stones.map((obj)=> obj.id)
                            if(diagonalStoneDownRight.positionY === minFalseDown){
                                if(!user1StonesId.includes(diagonalStoneDownRight.id)){
                                    state.eatableIndexes.push(diagonalStoneDownRight.id)
                                }
                            }
                          }
    
                            if(rightBottomfalseItems.length === 0){
                                if(diagonalStoneDownRight !== undefined){
                                    state.movableAreas.push(diagonalStoneDownRight.id)
                                    if(state.eatableIndexes.length > -1){
                                        state.movableAreas.push(state.eatableIndexes)
                                    }
                                }
                               }
                           }
                          
                       }
                       
                       console.log(current(state.movableAreas))
                }
                //*--------------------------------------------------
              
                //* Top Left Diagonal
                  if(x !== "a"){
                    const xAxis = ["a","b","c","d","e","f","g","h"]
                    let counter  = 1
                    let counterDown  = 1
                    let horizentalIndex = xAxis.indexOf(x)-1 
                    let leftTopfalseItems= []
                    let leftBottomfalseItems= []
                    let minFalse = y+1
                    let minFalseDown = y
    
                    for(let i = horizentalIndex; i >= 0; i--){
                        //*TOP
                        if(y !== 8){   
                        let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                        counter++
                        if(diagonalStone !== undefined){
                            console.log(current(diagonalStone))
                            if(diagonalStone.isEmpty === false){
                                leftTopfalseItems.push(diagonalStone)
                            }
                        }
                        leftTopfalseItems = leftTopfalseItems.filter((obj) => obj !== undefined)
                        let indexesOfY = leftTopfalseItems.map((obj) =>  obj.positionY  )
                        minFalse = Math.min.apply(Math,indexesOfY) 
                        
                        if(diagonalStone !== undefined){  
                            const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                           if( diagonalStone.positionY === minFalse ){
                               if(!user1StonesId.includes(diagonalStone.id)){
                                    state.eatableIndexes.push(diagonalStone.id)
                               }
                           }
                       }
                        if(leftTopfalseItems.length === 0){
                            state.movableAreas.push(diagonalStone.id)
                            if(state.eatableIndexes.length > -1){
                                state.movableAreas.push(state.eatableIndexes)
                            }
                        }}
                        //*BOTTOM
                        if(y !== 1){
    
                            let diagonalStoneDownLeft = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                            counterDown++
                         
                         if(diagonalStoneDownLeft!== undefined){
                             console.log(current(diagonalStoneDownLeft))
                             if(diagonalStoneDownLeft.isEmpty === false){
                                leftBottomfalseItems.push(diagonalStoneDownLeft)
                             }
                        }
    
                        
                        leftBottomfalseItems = leftBottomfalseItems.filter((obj)=> obj !== undefined)
                        let indexOfDownY = leftBottomfalseItems.map((obj)=> obj.positionY)
                        minFalseDown = Math.max.apply(Math,indexOfDownY)
    
    
                        if(diagonalStoneDownLeft !== undefined){
                         const user1StonesId = state.user1.stones.map((obj)=> obj.id)
                         if(diagonalStoneDownLeft.positionY === minFalseDown){
                             if(!user1StonesId.includes(diagonalStoneDownLeft.id)){
                                 state.eatableIndexes.push(diagonalStoneDownLeft.id)
                             }
                         }
                       }
    
                         if(leftBottomfalseItems.length === 0){
                             if(diagonalStoneDownLeft !== undefined){
                                 state.movableAreas.push(diagonalStoneDownLeft.id)
                                 if(state.eatableIndexes.length > -1){
                                     state.movableAreas.push(state.eatableIndexes)
                                 }
                             }
                            }
                        }
                    }
                    console.log(current(state.movableAreas))
                  }
                //*--------------------------------------------------          
             //* UP
             if(y < 8){
                state.falseItems = [state.minfalse]
                for(let i = y; i <= 8; i++){
                    let forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i+1)
                    if(forwardStone !== undefined)
                    {   if(forwardStone.isEmpty === false){
                        state.falseItems.push(forwardStone.positionY)
                        
                    }}
                        
                        state.minfalse = Math.min.apply(Math,state.falseItems)
                        if(forwardStone !== undefined){
                            const user1StonesId = state.user1.stones.map((obj)=>obj.id)
    
                            if( forwardStone.positionY === state.minfalse){
                                if(!user1StonesId.includes(forwardStone.id)){
                                    state.eatableIndexes.push(forwardStone.id)
                                }
                            }
                        }
                
                    }
                    console.log(state.minfalse)
                for(let i = y+1; i<state.minfalse; i++){
                    let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                    state.movableAreas.push(state.eatableIndexes)
                    state.movableAreas.push(movableArea.id)
                }
                state.minfalse = 9;
            }
             //* Down
             if(y>1){
                 const backFalseItems=[state.maxFalse]
               for(let i = y; i >=1; i--){
                   let backStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i-1)
                    console.log(backStone)
                   if(backStone !== undefined)
                   {   if(backStone.isEmpty === false){
                       backFalseItems.push(backStone.positionY)
                       
                   }
                }
                   console.log(backFalseItems)
                   state.maxFalse = Math.max.apply(Math,backFalseItems) 
                   if(backStone !== undefined){
                       const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                    if( backStone.positionY === state.maxFalse){
                        console.log(current(backStone))
                        if(!user1StonesId.includes(backStone.id)){
                            state.eatableIndexes.push(backStone.id)
                        }
                    }
                    state.eatableIndexes = state.eatableIndexes.filter(obj=> !user1StonesId.includes(obj))

                }
                   }
                   
                       for(let i = y-1; i>state.maxFalse; i--){
                           let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                           state.movableAreas.push(movableArea.id)
                           state.movableAreas.push(state.eatableIndexes)
                        }
                        state.maxFalse = 0
                        
                    }
                    
             //* Left
           if(x !== "a") 
           { const xAxis = ["a","b","c","d","e","f","g","h"]
             let horizentalIndex = xAxis.indexOf(x) -1
             let leftfalseItems= [xAxis[state.leftfalse]]
             for(let i = horizentalIndex; i >= 0; i-- ){
                let leftStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
               if(leftStone !== undefined)
               {   if(leftStone.isEmpty === false){
                   leftfalseItems.push(leftStone.positionX)
                   
               }
            }
                let indexesOfLetters = leftfalseItems.map((x) => xAxis.indexOf(x) )
         
               state.leftfalse = Math.max.apply(Math,indexesOfLetters) 
               console.log(state.leftfalse)
               if(leftStone !== undefined){  
                 const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                if( leftStone.positionX === xAxis[state.leftfalse]){
                    if(!user1StonesId.includes(leftStone.id)){
                        state.eatableIndexes.push(leftStone.id)
                    }
                }
            }


            }
            for(let i = horizentalIndex; i>state.leftfalse; i--){
                console.log(state.leftfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }}
            state.leftfalse = -1
             //* Right
           if(x !== "h") 
           { 
            const xAxis = ["a","b","c","d","e","f","g","h"]
           let horizentalIndex = xAxis.indexOf(x) +1
           console.log(horizentalIndex)
           let rightfalseItems= [xAxis[state.rightfalse]]
           for(let i = horizentalIndex; i <= 7; i++ ){
               let rightStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                if(rightStone !== undefined)
               {   if(rightStone.isEmpty === false){
                   rightfalseItems.push(rightStone.positionX)
                   
               }
            }
            if(rightfalseItems === undefined){
                state.rightfalse = 8
            }
                rightfalseItems = rightfalseItems.filter((obj) => obj !== undefined)
                let indexesOfLetters = rightfalseItems.map((x) => xAxis.indexOf(x) )
       
               
              
                    state.rightfalse = Math.min.apply(Math,indexesOfLetters) 
                
               if(rightStone !== undefined){  
                 const user1StonesId = state.user1.stones.map((obj)=>obj.id)
                if( rightStone.positionX === xAxis[state.rightfalse]){
                    if(!user1StonesId.includes(rightStone.id)){
                        state.eatableIndexes.push(rightStone.id)
                    }
                }
            }


        }
        if(rightfalseItems.length === 0){
            state.rightfalse = 8
        }
            for(let i = horizentalIndex; i<state.rightfalse; i++){
                console.log(state.rightfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }
            state.rightfalse = 8
        }
            console.log(state.eatableIndexes)
            state.movableAreas.push(state.eatableIndexes)

        }
        //!---------------------------------------------
        
        //! MOVABLE AND EATABLE AREAS FOR WHITE KING 
            if(state.selectedObj.name === "white-king"){
                console.log(current(state.eatableIndexes))
            }
        //!---------------------------------------------
            }
        }
            if(state.player === "black"){
                state.movableAreas.length = 0
                const Blackstones=current(state.user2.stones)
               state.selectedObj = Blackstones.find((obj)=> obj.id === state.selectedStone)
                if(state.selectedObj){
                    state.selectedObj = {...state.selectedObj, isActive : true}
                    console.log(state.selectedObj.isActive)
                    state.isActive = state.selectedObj.isActive
                    const x = state.selectedObj.positionX
                    const y = state.selectedObj.positionY

                     //! EATABLE AREAS FOR BLACK PAWN
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
                    const forwardStone2 =state.board.find((obj)=> obj.positionX === x && obj.positionY === Number(y-2))
                    console.log("forward",current(forwardStone))
                    if(forwardStone.isEmpty ===false){
                        isBlocked = true
                    }
                    if(!isBlocked){
                        
                        if(state.selectedObj.positionY === 7){
                            if(forwardStone2.isEmpty === true){

                                state.movableAreas = [`${x}6`,`${x}5`]
                                if(state.eatableIndexes[0] !== undefined || state.eatableIndexes[1] !== undefined){
                                    console.log(current(state.eatableIndexes))
                                    state.movableAreas.push(state.eatableIndexes)
                                }
                                console.log(state.movableAreas)
                            }else{
                                state.movableAreas = [`${x}6`]
                                if(state.eatableIndexes[0] !== undefined || state.eatableIndexes[1] !== undefined){
                                    console.log(current(state.eatableIndexes))
                                    state.movableAreas.push(state.eatableIndexes)
                                }
                                console.log(state.movableAreas)
                            }
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
                       //! MOVABLE AND EATABLE AREAS FOR BLACK KNIGHT
             const xAxis = ["a","b","c","d","e","f","g","h"]
             if(state.selectedObj.name ==="black-knight"){
                state.movableAreas.length = 0
            for(let i=0; i<=7; i++ ){ // X AXIS
                for(let j = 8; j>=1; j--){ // Y AXIS
                    if(x=== xAxis[i] && y === j){
                        state.movableAreas = [
                            `${xAxis[i+1]}${j+2}`,
                            `${xAxis[i+1]}${j-2}`,
                            `${xAxis[i-1]}${j+2}`,
                            `${xAxis[i-1]}${j-2}`,
                            `${xAxis[i-2]}${j+1}`,
                            `${xAxis[i-2]}${j-1}`,
                            `${xAxis[i+2]}${j+1}`,
                            `${xAxis[i+2]}${j-1}`
                        ];
                    }
                }
            }
            const user2StonesId = state.user2.stones.map((obj)=>obj.id)
       
            state.movableAreas = state.movableAreas.filter(obj=> !user2StonesId.includes(obj))
        }
        //! ----------------------------------------------
                 //! MOVABLE AND EATABLE AREAS FOR BLACK-ROOK
        if(state.selectedObj.name=== "black-rook"){
            state.movableAreas.length = 0
            state.falseItems.length = 0
    
            // console.log(forwardStone)
            //* UP
            if(y < 8){
                state.falseItems = [state.minfalse]
                for(let i = y; i <= 8; i++){
                    let forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i+1)
                    if(forwardStone !== undefined)
                    {   if(forwardStone.isEmpty === false){
                        state.falseItems.push(forwardStone.positionY)
                        
                    }}
                        
                        state.minfalse = Math.min.apply(Math,state.falseItems)
                        if(forwardStone !== undefined){
                            const user2StonesId = state.user2.stones.map((obj)=>obj.id)
    
                            if( forwardStone.positionY === state.minfalse){
                                if(!user2StonesId.includes(forwardStone.id)){
                                    state.eatableIndexes.push(forwardStone.id)
                                }
                            }
                        }
                
                    }
                    console.log(state.minfalse)
                for(let i = y+1; i<state.minfalse; i++){
                    let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                    state.movableAreas.push(state.eatableIndexes)
                    state.movableAreas.push(movableArea.id)
                }
                state.minfalse = 9;
            }
             //* Down
             if(y>1){
                 const backFalseItems=[state.maxFalse]
               for(let i = y; i >=1; i--){
                   let backStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i-1)
                    console.log(backStone)
                   if(backStone !== undefined)
                   {   if(backStone.isEmpty === false){
                       backFalseItems.push(backStone.positionY)
                       
                   }
                }
                   console.log(backFalseItems)
                   state.maxFalse = Math.max.apply(Math,backFalseItems) 
                   if(backStone !== undefined){
                       const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                    if( backStone.positionY === state.maxFalse){
                        console.log(current(backStone))
                        if(!user2StonesId.includes(backStone.id)){
                            state.eatableIndexes.push(backStone.id)
                        }
                    }
                    state.eatableIndexes = state.eatableIndexes.filter(obj=> !user2StonesId.includes(obj))

                }
                   }
                   
                       for(let i = y-1; i>state.maxFalse; i--){
                           let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                           state.movableAreas.push(movableArea.id)
                           state.movableAreas.push(state.eatableIndexes)
                        }
                        state.maxFalse = 0
                        
                    }
                    
             //* Left
           if(x !== "a") 
           { const xAxis = ["a","b","c","d","e","f","g","h"]
             let horizentalIndex = xAxis.indexOf(x) -1
             let leftfalseItems= [xAxis[state.leftfalse]]
             for(let i = horizentalIndex; i >= 0; i-- ){
                let leftStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
               if(leftStone !== undefined)
               {   if(leftStone.isEmpty === false){
                   leftfalseItems.push(leftStone.positionX)
                   
               }
            }
                let indexesOfLetters = leftfalseItems.map((x) => xAxis.indexOf(x) )
         
               state.leftfalse = Math.max.apply(Math,indexesOfLetters) 
               console.log(state.leftfalse)
               if(leftStone !== undefined){  
                 const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                if( leftStone.positionX === xAxis[state.leftfalse]){
                    if(!user2StonesId.includes(leftStone.id)){
                        state.eatableIndexes.push(leftStone.id)
                    }
                }
            }


            }
            for(let i = horizentalIndex; i>state.leftfalse; i--){
                console.log(state.leftfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }}
            state.leftfalse = -1
             //* Right
           if(x !== "h") 
           { const xAxis = ["a","b","c","d","e","f","g","h"]
           let horizentalIndex = xAxis.indexOf(x) +1
           console.log(horizentalIndex)
           let rightfalseItems= [xAxis[state.rightfalse]]
           for(let i = horizentalIndex; i <= 7; i++ ){
               let rightStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                if(rightStone !== undefined)
               {   if(rightStone.isEmpty === false){
                   rightfalseItems.push(rightStone.positionX)
                   
               }
            }
            if(rightfalseItems === undefined){
                state.rightfalse = 8
            }
                rightfalseItems = rightfalseItems.filter((obj) => obj !== undefined)
                let indexesOfLetters = rightfalseItems.map((x) => xAxis.indexOf(x) )
       
               
              
                    state.rightfalse = Math.min.apply(Math,indexesOfLetters) 
                
               if(rightStone !== undefined){  
                 const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                if( rightStone.positionX === xAxis[state.rightfalse]){
                    if(!user2StonesId.includes(rightStone.id)){
                        state.eatableIndexes.push(rightStone.id)
                    }
                }
            }


        }
        if(rightfalseItems.length === 0){
            state.rightfalse = 8
        }
            for(let i = horizentalIndex; i<state.rightfalse; i++){
                console.log(state.rightfalse)
                let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                state.movableAreas.push(movableArea.id)
                state.movableAreas.push(state.eatableIndexes)
            }
            state.rightfalse = 8
        }
            console.log(state.eatableIndexes)
            state.movableAreas.push(state.eatableIndexes)
        }
        //!---------------------------------------------
          //! MOVABLE AND EATABLE AREAS FOR BLACK-BISHOP
          if(state.selectedObj.name === "black-bishop"){
            state.movableAreas.length = 0
            state.eatableIndexes.length = 0
            //*Top Bottom Right Diagonals
            if(x !== "h"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)+1 
                let rightTopfalseItems= []
                let rightBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                   for(let i = horizentalIndex; i < 8; i++){
                    if(y !== 8){ 
                         let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                       counter++
                       if(diagonalStone !== undefined){
                           if(diagonalStone.isEmpty === false){
                               rightTopfalseItems.push(diagonalStone)
                           }
                       }
                      

                       rightTopfalseItems = rightTopfalseItems.filter((obj) => obj !== undefined)
                       let indexesOfY = rightTopfalseItems.map((obj) =>  obj.positionY  )
                       minFalse = Math.min.apply(Math,indexesOfY) 
                       

                       if(diagonalStone !== undefined){  
                           const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                          if( diagonalStone.positionY === minFalse ){
                              if(!user2StonesId.includes(diagonalStone.id)){
                                   state.eatableIndexes.push(diagonalStone.id)
                              }
                          }
                      }
                     
                       if(rightTopfalseItems.length === 0){
                        if(diagonalStone !== undefined){
                            state.movableAreas.push(diagonalStone.id)
                        }
                           if(state.eatableIndexes.length > -1){
                               state.movableAreas.push(state.eatableIndexes)
                           }
                       }}
                       if(y !== 1){

                           let diagonalStoneDownRight = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                           counterDown++
                        
                        if(diagonalStoneDownRight!== undefined){
                            console.log(current(diagonalStoneDownRight))
                            if(diagonalStoneDownRight.isEmpty === false){
                                rightBottomfalseItems.push(diagonalStoneDownRight)
                            }
                       }

                       
                       rightBottomfalseItems = rightBottomfalseItems.filter((obj)=> obj !== undefined)
                       let indexOfDownY = rightBottomfalseItems.map((obj)=> obj.positionY)
                       minFalseDown = Math.max.apply(Math,indexOfDownY)


                       if(diagonalStoneDownRight !== undefined){
                        const user2StonesId = state.user2.stones.map((obj)=> obj.id)
                        if(diagonalStoneDownRight.positionY === minFalseDown){
                            if(!user2StonesId.includes(diagonalStoneDownRight.id)){
                                state.eatableIndexes.push(diagonalStoneDownRight.id)
                            }
                        }
                      }

                        if(rightBottomfalseItems.length === 0){
                            if(diagonalStoneDownRight !== undefined){
                                state.movableAreas.push(diagonalStoneDownRight.id)
                                if(state.eatableIndexes.length > -1){
                                    state.movableAreas.push(state.eatableIndexes)
                                }
                            }
                           }
                       }
                      
                   }
                   
            }
            //*--------------------------------------------------
          
            //* Top Left Diagonal
              if(x !== "a"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)-1 
                let leftTopfalseItems= []
                let leftBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                for(let i = horizentalIndex; i >= 0; i--){

                    if(y !== 8){   
                    let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                    counter++
                    if(diagonalStone !== undefined){
                        if(diagonalStone.isEmpty === false){
                            leftTopfalseItems.push(diagonalStone)
                        }
                    }
                    leftTopfalseItems = leftTopfalseItems.filter((obj) => obj !== undefined)
                    let indexesOfY = leftTopfalseItems.map((obj) =>  obj.positionY  )
                    minFalse = Math.min.apply(Math,indexesOfY) 
                    
                    if(diagonalStone !== undefined){  
                        const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                       if( diagonalStone.positionY === minFalse ){
                           if(!user2StonesId.includes(diagonalStone.id)){
                                state.eatableIndexes.push(diagonalStone.id)
                           }
                       }
                   }
                    if(leftTopfalseItems.length === 0){
                        if(diagonalStone !== undefined){
                            state.movableAreas.push(diagonalStone.id)
                        }
                        if(state.eatableIndexes.length > -1){
                            state.movableAreas.push(state.eatableIndexes)
                        }
                    }}
                    if(y !== 1){

                        let diagonalStoneDownLeft = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                        counterDown++
                     
                     if(diagonalStoneDownLeft!== undefined){
                         console.log(current(diagonalStoneDownLeft))
                         if(diagonalStoneDownLeft.isEmpty === false){
                            leftBottomfalseItems.push(diagonalStoneDownLeft)
                         }
                    }

                    
                    leftBottomfalseItems = leftBottomfalseItems.filter((obj)=> obj !== undefined)
                    let indexOfDownY = leftBottomfalseItems.map((obj)=> obj.positionY)
                    minFalseDown = Math.max.apply(Math,indexOfDownY)


                    if(diagonalStoneDownLeft !== undefined){
                     const user2StonesId = state.user2.stones.map((obj)=> obj.id)
                     if(diagonalStoneDownLeft.positionY === minFalseDown){
                         if(!user2StonesId.includes(diagonalStoneDownLeft.id)){
                             state.eatableIndexes.push(diagonalStoneDownLeft.id)
                         }
                     }
                   }

                     if(leftBottomfalseItems.length === 0){
                         if(diagonalStoneDownLeft !== undefined){
                             state.movableAreas.push(diagonalStoneDownLeft.id)
                             if(state.eatableIndexes.length > -1){
                                 state.movableAreas.push(state.eatableIndexes)
                             }
                         }
                        }
                    }
                }
              }
            //*--------------------------------------------------            
        }
        //!---------------------------------------------
        
        //! MOVABLE AND EATABLE AREAS FOR BLACK QUEEN
        if(state.selectedObj.name === "black-queen"){
            state.movableAreas.length = 0
            state.eatableIndexes.length = 0
            //*Top Bottom Right Diagonals
            if(x !== "h"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)+1 
                let rightTopfalseItems= []
                let rightBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                   for(let i = horizentalIndex; i < 8; i++){
                    if(y !== 8){ 
                         let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                       counter++
                       if(diagonalStone !== undefined){
                           if(diagonalStone.isEmpty === false){
                               rightTopfalseItems.push(diagonalStone)
                           }
                       }
                      

                       rightTopfalseItems = rightTopfalseItems.filter((obj) => obj !== undefined)
                       let indexesOfY = rightTopfalseItems.map((obj) =>  obj.positionY  )
                       minFalse = Math.min.apply(Math,indexesOfY) 
                       

                       if(diagonalStone !== undefined){  
                           const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                          if( diagonalStone.positionY === minFalse ){
                              if(!user2StonesId.includes(diagonalStone.id)){
                                   state.eatableIndexes.push(diagonalStone.id)
                              }
                          }
                      }
                     
                       if(rightTopfalseItems.length === 0){
                        if(diagonalStone !== undefined){
                            state.movableAreas.push(diagonalStone.id)
                        }
                           if(state.eatableIndexes.length > -1){
                               state.movableAreas.push(state.eatableIndexes)
                           }
                       }}
                       if(y !== 1){

                           let diagonalStoneDownRight = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                           counterDown++
                        
                        if(diagonalStoneDownRight!== undefined){
                            console.log(current(diagonalStoneDownRight))
                            if(diagonalStoneDownRight.isEmpty === false){
                                rightBottomfalseItems.push(diagonalStoneDownRight)
                            }
                       }

                       
                       rightBottomfalseItems = rightBottomfalseItems.filter((obj)=> obj !== undefined)
                       let indexOfDownY = rightBottomfalseItems.map((obj)=> obj.positionY)
                       minFalseDown = Math.max.apply(Math,indexOfDownY)


                       if(diagonalStoneDownRight !== undefined){
                        const user2StonesId = state.user2.stones.map((obj)=> obj.id)
                        if(diagonalStoneDownRight.positionY === minFalseDown){
                            if(!user2StonesId.includes(diagonalStoneDownRight.id)){
                                state.eatableIndexes.push(diagonalStoneDownRight.id)
                            }
                        }
                      }

                        if(rightBottomfalseItems.length === 0){
                            if(diagonalStoneDownRight !== undefined){
                                state.movableAreas.push(diagonalStoneDownRight.id)
                                if(state.eatableIndexes.length > -1){
                                    state.movableAreas.push(state.eatableIndexes)
                                }
                            }
                           }
                       }
                      
                   }
                   
            }
            //*--------------------------------------------------
          
            //* Top Left Diagonal
              if(x !== "a"){
                const xAxis = ["a","b","c","d","e","f","g","h"]
                let counter  = 1
                let counterDown  = 1
                let horizentalIndex = xAxis.indexOf(x)-1 
                let leftTopfalseItems= []
                let leftBottomfalseItems= []
                let minFalse = y+1
                let minFalseDown = y

                for(let i = horizentalIndex; i >= 0; i--){

                    if(y !== 8){   
                    let diagonalStone = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y+counter )
                    counter++
                    if(diagonalStone !== undefined){
                        if(diagonalStone.isEmpty === false){
                            leftTopfalseItems.push(diagonalStone)
                        }
                    }
                    leftTopfalseItems = leftTopfalseItems.filter((obj) => obj !== undefined)
                    let indexesOfY = leftTopfalseItems.map((obj) =>  obj.positionY  )
                    minFalse = Math.min.apply(Math,indexesOfY) 
                    
                    if(diagonalStone !== undefined){  
                        const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                       if( diagonalStone.positionY === minFalse ){
                           if(!user2StonesId.includes(diagonalStone.id)){
                                state.eatableIndexes.push(diagonalStone.id)
                           }
                       }
                   }
                    if(leftTopfalseItems.length === 0){
                        if(diagonalStone !== undefined){
                            state.movableAreas.push(diagonalStone.id)
                        }
                        if(state.eatableIndexes.length > -1){
                            state.movableAreas.push(state.eatableIndexes)
                        }
                    }}
                    if(y !== 1){

                        let diagonalStoneDownLeft = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y-counterDown )
                        counterDown++
                     
                     if(diagonalStoneDownLeft!== undefined){
                         console.log(current(diagonalStoneDownLeft))
                         if(diagonalStoneDownLeft.isEmpty === false){
                            leftBottomfalseItems.push(diagonalStoneDownLeft)
                         }
                    }

                    
                    leftBottomfalseItems = leftBottomfalseItems.filter((obj)=> obj !== undefined)
                    let indexOfDownY = leftBottomfalseItems.map((obj)=> obj.positionY)
                    minFalseDown = Math.max.apply(Math,indexOfDownY)


                    if(diagonalStoneDownLeft !== undefined){
                     const user2StonesId = state.user2.stones.map((obj)=> obj.id)
                     if(diagonalStoneDownLeft.positionY === minFalseDown){
                         if(!user2StonesId.includes(diagonalStoneDownLeft.id)){
                             state.eatableIndexes.push(diagonalStoneDownLeft.id)
                         }
                     }
                   }

                     if(leftBottomfalseItems.length === 0){
                         if(diagonalStoneDownLeft !== undefined){
                             state.movableAreas.push(diagonalStoneDownLeft.id)
                             if(state.eatableIndexes.length > -1){
                                 state.movableAreas.push(state.eatableIndexes)
                             }
                         }
                        }
                    }
                }
              }
            //*--------------------------------------------------        
                 //* UP
                 if(y < 8){
                    state.falseItems = [state.minfalse]
                    for(let i = y; i <= 8; i++){
                        let forwardStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i+1)
                        if(forwardStone !== undefined)
                        {   if(forwardStone.isEmpty === false){
                            state.falseItems.push(forwardStone.positionY)
                            
                        }}
                            
                            state.minfalse = Math.min.apply(Math,state.falseItems)
                            if(forwardStone !== undefined){
                                const user2StonesId = state.user2.stones.map((obj)=>obj.id)
        
                                if( forwardStone.positionY === state.minfalse){
                                    if(!user2StonesId.includes(forwardStone.id)){
                                        state.eatableIndexes.push(forwardStone.id)
                                    }
                                }
                            }
                    
                        }
                        console.log(state.minfalse)
                    for(let i = y+1; i<state.minfalse; i++){
                        let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                        state.movableAreas.push(state.eatableIndexes)
                        state.movableAreas.push(movableArea.id)
                    }
                    state.minfalse = 9;
                }
                 //* Down
                 if(y>1){
                     const backFalseItems=[state.maxFalse]
                   for(let i = y; i >=1; i--){
                       let backStone =state.board.find((obj)=> obj.positionX === x && obj.positionY === i-1)
                        console.log(backStone)
                       if(backStone !== undefined)
                       {   if(backStone.isEmpty === false){
                           backFalseItems.push(backStone.positionY)
                           
                       }
                    }
                       console.log(backFalseItems)
                       state.maxFalse = Math.max.apply(Math,backFalseItems) 
                       if(backStone !== undefined){
                           const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                        if( backStone.positionY === state.maxFalse){
                            console.log(current(backStone))
                            if(!user2StonesId.includes(backStone.id)){
                                state.eatableIndexes.push(backStone.id)
                            }
                        }
                        state.eatableIndexes = state.eatableIndexes.filter(obj=> !user2StonesId.includes(obj))
    
                    }
                       }
                       
                           for(let i = y-1; i>state.maxFalse; i--){
                               let movableArea = state.board.find((obj)=> obj.positionX === x && obj.positionY === i)
                               state.movableAreas.push(movableArea.id)
                               state.movableAreas.push(state.eatableIndexes)
                            }
                            state.maxFalse = 0
                            
                        }
                        
                 //* Left
               if(x !== "a") 
               { const xAxis = ["a","b","c","d","e","f","g","h"]
                 let horizentalIndex = xAxis.indexOf(x) -1
                 let leftfalseItems= [xAxis[state.leftfalse]]
                 for(let i = horizentalIndex; i >= 0; i-- ){
                    let leftStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                   if(leftStone !== undefined)
                   {   if(leftStone.isEmpty === false){
                       leftfalseItems.push(leftStone.positionX)
                       
                   }
                }
                    let indexesOfLetters = leftfalseItems.map((x) => xAxis.indexOf(x) )
             
                   state.leftfalse = Math.max.apply(Math,indexesOfLetters) 
                   console.log(state.leftfalse)
                   if(leftStone !== undefined){  
                     const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                    if( leftStone.positionX === xAxis[state.leftfalse]){
                        if(!user2StonesId.includes(leftStone.id)){
                            state.eatableIndexes.push(leftStone.id)
                        }
                    }
                }
    
    
                }
                for(let i = horizentalIndex; i>state.leftfalse; i--){
                    console.log(state.leftfalse)
                    let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                    state.movableAreas.push(movableArea.id)
                    state.movableAreas.push(state.eatableIndexes)
                }}
                state.leftfalse = -1
                 //* Right
               if(x !== "h") 
               { const xAxis = ["a","b","c","d","e","f","g","h"]
               let horizentalIndex = xAxis.indexOf(x) +1
               console.log(horizentalIndex)
               let rightfalseItems= [xAxis[state.rightfalse]]
               for(let i = horizentalIndex; i <= 7; i++ ){
                   let rightStone =state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                    if(rightStone !== undefined)
                   {   if(rightStone.isEmpty === false){
                       rightfalseItems.push(rightStone.positionX)
                       
                   }
                }
                if(rightfalseItems === undefined){
                    state.rightfalse = 8
                }
                    rightfalseItems = rightfalseItems.filter((obj) => obj !== undefined)
                    let indexesOfLetters = rightfalseItems.map((x) => xAxis.indexOf(x) )
           
                   
                  
                        state.rightfalse = Math.min.apply(Math,indexesOfLetters) 
                    
                   if(rightStone !== undefined){  
                     const user2StonesId = state.user2.stones.map((obj)=>obj.id)
                    if( rightStone.positionX === xAxis[state.rightfalse]){
                        if(!user2StonesId.includes(rightStone.id)){
                            state.eatableIndexes.push(rightStone.id)
                        }
                    }
                }
    
    
            }
            if(rightfalseItems.length === 0){
                state.rightfalse = 8
            }
                for(let i = horizentalIndex; i<state.rightfalse; i++){
                    console.log(state.rightfalse)
                    let movableArea = state.board.find((obj)=> obj.positionX === xAxis[i] && obj.positionY === y)
                    state.movableAreas.push(movableArea.id)
                    state.movableAreas.push(state.eatableIndexes)
                }
                state.rightfalse = 8
            }
                console.log(state.eatableIndexes)
                state.movableAreas.push(state.eatableIndexes)
        }

        //!---------------------------------------------
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