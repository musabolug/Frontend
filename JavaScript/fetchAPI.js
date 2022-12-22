
// fetch("data/data.json").then(
//     response => response.json()
// ).then(responseJson =>{
//     console.log(responseJson)
//     console.log(responseJson.userName)
// })


// let userListDOM = document.querySelector("#userList")
// fetch('https://jsonplaceholder.typicode.com/posts').then(
//     response => response.json()
//     ).then(responseJson => {
//         // console.log(responseJson)
//         // responseJson.forEach(item => console.log(item))
//         responseJson.forEach(item => {
//             let liDOM = document.createElement("li");
//             liDOM.innerHTML = item.title
//             userListDOM.appendChild(liDOM)
//         })
//     })


//! UYGULAMA 1
//? API dokümanında Resources bölümünde belirtilen kaynaklardan /users uzantısındaki verileri alıp console’a yazdıracak kodu yazın.
// fetch('https://jsonplaceholder.typicode.com/users').then(
//     response => response.json()
// ).then(
//     responseJson =>{
//         console.log(responseJson)
//     }
// ).catch((err)=> console.log(err));

//! UYGULAMA 2
//? Json Placeholder API servisinin /comments uzantısında mevcut verilerden,
//? her bir comment içerisindeki email’leri console’a yazdıracak kodu yazın.
// fetch('https://jsonplaceholder.typicode.com/comments').then(
//     response => response.json()
// ).then(
//     responseJson =>{
//         responseJson.forEach(item => {
//             console.log(item.email)
//         })
//     }
// )

//