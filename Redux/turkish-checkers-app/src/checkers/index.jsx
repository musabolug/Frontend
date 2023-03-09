import {nanoid} from "@reduxjs/toolkit"

export const configureBoard = () =>{
    const gameBoard = []
    const xAxis = ["a","b","c","d","e","f","g","h"]
    for(let i = 0; i<=7;i++){
        for(let j =8 ; j>=1; j--){
            gameBoard.push({
                id:nanoid(),
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
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-pawn",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-pawn.png?raw=true"
            });
        }
    }
    for(let i = 0; i<=7;i++){
        for(let j =8 ; j>=8; j--){
            /* Rook*/ 
            if(i === 0 || i === 7)
            blackStones.push({
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-rook",
                isActive: true,
                isChekers: false,
                src: "https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-rook.png?raw=true"
            });
            /* Knight*/ 
            if(i === 1 || i === 6)
            blackStones.push({
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-knight",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-knight,.png?raw=true"
            });
            /* Bishop*/ 
            if(i === 2 || i === 5)
            blackStones.push({
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-bishop",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-bishop.png?raw=true"
            });
            /* Queen*/ 
            if(i === 3)
            blackStones.push({
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-queen",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-queen.png?raw=true"
            });
            /* King*/ 
            if(i === 4)
            blackStones.push({
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"black-king",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/black-king.png?raw=true"
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
                id:nanoid(),
                positionX:xAxis[i],
                positionY:j,
                name:"white-pawn",
                isActive: true,
                isChekers: false,
                src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-pawn.png?raw=true"
            });
        }
    }
        for(let i = 0; i<=7;i++){
            for(let j =1 ; j>=1; j--){
                /* Rook*/ 
                if(i === 0 || i === 7)
                whiteStones.push({
                    id:nanoid(),
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-rook",
                    isActive: true,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-rook.png?raw=true"
                    
                });
                /* Knight*/ 
                if(i === 1 || i === 6)
                whiteStones.push({
                    id:nanoid(),
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-knight",
                    isActive: true,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-knight.png?raw=true"
                });
                /* Bishop*/ 
                if(i === 2 || i === 5)
                whiteStones.push({
                    id:nanoid(),
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-bishop",
                    isActive: true,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-bishop.png?raw=true"
                });
                /* Queen*/ 
                if(i === 3)
                whiteStones.push({
                    id:nanoid(),
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-queen",
                    isActive: true,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-queen.png?raw=true"
                });
                /* King*/ 
                if(i === 4)
                whiteStones.push({
                    id:nanoid(),
                    positionX:xAxis[i],
                    positionY:j,
                    name:"white-king",
                    isActive: true,
                    isChekers: false,
                    src:"https://github.com/musabolug/Frontend/blob/master/Redux/turkish-checkers-app/src/assets/white-king.png?raw=true"
                });
    
            }
    }
    
    
    return whiteStones
}