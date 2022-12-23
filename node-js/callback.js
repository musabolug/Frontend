//! kod çaliştirildiktan 2 saniye sonra Merhaba yazar 
// setTimeout(() => {
//  console.log("Merhaba");
// }, 2000)
//!-------------------------------

 //! her 1 saniyede çalışan loop kodu
// setInterval(() =>{
//     console.log("Merhaba Ben her saniye çalışacağım");
// },1000 )
//!-------------------------------

//! callback fonksiyon ile değer döndürmek
// const sayHi = (cb) =>{
//     cb(); 
// }
// sayHi(()=>{
//     console.log("Hello");
// });
//!-------------------------------

//! işlemleri bu şekilde sıraya koyabilirsin 
//! YOL 1
// import fetch from "node-fetch";
// fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json())
// .then((users) => {
//     console.log("Users yuklendi",users);

//     fetch('https://jsonplaceholder.typicode.com/posts/1').then((data) => data.json())
//     .then((posts) =>{
//         console.log("Postlar yuklendi",posts);
//     })
// }); 
//!-------------------------------

//! YOL 2 (daha basit ve temiz)
//! FETCH ile
// import fetch from "node-fetch";
// async function getData(){
//     const users = await(
//         await fetch('https://jsonplaceholder.typicode.com/users')).json();

//     const post1 = await(
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();
//     const post2 = await(
//       await  fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log("users",users);
//     console.log("post1",post1);
//     console.log("post2",post2);
// }
// getData();
//!-------------------------------

//! AXIOS ile
// import axios from "axios"; 
//  async function getData(){
    
//      const {data: users} = await(axios('https://jsonplaceholder.typicode.com/users'));
//      const {data: post1} = await(axios("https://jsonplaceholder.typicode.com/posts/1"));
//      const {data: post2} = await(axios("https://jsonplaceholder.typicode.com/posts/2"));
    
//      console.log("users",users);
//      console.log("post1",post1);
//      console.log("post2",post2);
//     }
//     getData();
//!-------------------------------

//! ANONİM FONKSİYON TANIMLAMAK
// (async () => {
//     console.log("Bu bir anonim fonksiyondur")
// })();
//!-------------------------------