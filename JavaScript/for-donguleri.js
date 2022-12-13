
let users = ["Musab","Bera","Mansur"]

// for(let index = 0; index <10; index++){
//     console.log(index)
// }

// let index = 0;
// for(;index<10;index++){
//     console.log(index)
// }
const userListDOM = document.querySelector("#userList")
for(index = 0; index<users.length;index++){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)
}