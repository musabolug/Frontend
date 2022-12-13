const LOREM_LIST =[
    "lorem","ipsum","dolor","amet","bla","elit","bilememne"
]
let counter = 0

// for(;counter<LOREM_LIST.length;counter++){
//     console.log(counter)
//     if(counter === 5){break}
// }

// for(;counter<LOREM_LIST.length;counter++){
//     if(counter === 5){continue}
//     console.log(counter)    
// }

const UL_DOM = document.querySelector("#userList")

let index = 0

// for(;index<LOREM_LIST.length;index++){
//     if(LOREM_LIST[index]=="dolor") {break}
//     let LI_DOM = document.createElement("li")
//     LI_DOM.innerHTML=LOREM_LIST[index]
//     UL_DOM.appendChild(LI_DOM)
// }
for(;index<LOREM_LIST.length;index++){
    if(LOREM_LIST[index]=="dolor") {continue}
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}
