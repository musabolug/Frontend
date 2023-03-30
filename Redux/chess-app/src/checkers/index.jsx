import {nanoid} from "@reduxjs/toolkit"

export const configureBoard = () =>{
    const gameBoard = []
    const xAxis = ["a","b","c","d","e","f","g","h"]
    for(let i = 0; i<=7;i++){
        for(let j =8 ; j>=1; j--){
            gameBoard.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                color: (i+j) % 2 === 0 ? "white": "black",
                isEmpty: true,
                isPlayable: false,
                stoneData: {},
            });
        }
    }
    return gameBoard
};
export const setBlackStones = ()=>{
    const xAxis = ["a","b","c","d","e","f","g","h"]
    const blackStones = [];
    /* PAWN*/ 
    for(let i = 0; i<=7;i++){
        for(let j =7 ; j>=7; j--){
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-pawn",
                isActive: false,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-pawn.png?raw=true"
            });
        }
    }
    for(let i = 0; i<=7;i++){
        for(let j =8 ; j>=8; j--){
            /* Rook*/ 
            if(i === 0 || i === 7)
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-rook",
                isActive: false,
                isChekers: false,
                counter:0,
                src: "https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-rook.png?raw=true"
            });
            /* Knight*/ 
            if(i === 1 || i === 6)
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-knight",
                isActive: false,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-knight,.png?raw=true"
            });
            /* Bishop*/ 
            if(i === 2 || i === 5)
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-bishop",
                isActive: false,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-bishop.png?raw=true"
            });
            /* Queen*/ 
            if(i === 3)
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-queen",
                isActive: false,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-queen.png?raw=true"
            });
            /* King*/ 
            if(i === 4)
            blackStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"black-king",
                isActive: false,
                isChekers: false,
                counter:0,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/black-king.png?raw=true"
            });

        }
    }
    

    return blackStones
}
export const setWhiteStones = ()=>{
    const xAxis = ["a","b","c","d","e","f","g","h"]
    const whiteStones = [];
    /* PAWN*/ 
    for(let i = 0; i<=7;i++){
        for(let j =2 ; j>=2; j--){
            whiteStones.push({
                id:`${xAxis[i]}${j}`,
                positionX:xAxis[i],
                positionY:j,
                name:"white-pawn",
                isActive: false,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-pawn.png?raw=true"
            });
        }
    }
        for(let i = 0; i<=7;i++){
            for(let j =1 ; j>=1; j--){
                /* Rook*/ 
                if(i === 0 || i === 7)
                whiteStones.push({
                    id:`${xAxis[i]}${j}`,
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-rook",
                    isActive: false,
                    isChekers: false,
                    counter:0,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-rook.png?raw=true"
                    
                });
                /* Knight*/ 
                if(i === 1 || i === 6)
                whiteStones.push({
                    id:`${xAxis[i]}${j}`,
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-knight",
                    isActive: false,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-knight.png?raw=true"
                });
                /* Bishop*/ 
                if(i === 2 || i === 5)
                whiteStones.push({
                    id:`${xAxis[i]}${j}`,
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-bishop",
                    isActive: false,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-bishop.png?raw=true"
                });
                /* Queen*/ 
                if(i === 3)
                whiteStones.push({
                    id:`${xAxis[i]}${j}`,
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-queen",
                    isActive: false,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-queen.png?raw=true"
                });
                /* King*/ 
                if(i === 4)
                whiteStones.push({
                    id:`${xAxis[i]}${j}`,
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-king",
                    isActive: false,
                    isChekers: false,
                    counter:0,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/chess-app/src/assets/white-king.png?raw=true"
                });
    
            }
    }
    
    
    return whiteStones
}
 