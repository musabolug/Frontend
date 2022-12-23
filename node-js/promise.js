import axios from "axios";

// const getComments = (number) =>{
//     return new Promise(async (resolve,reject)=> {
//         // console.log("comments");
//         // if(number === 1){
//         // resolve("Correct input:");
//         // }
//         // else{
//         //     reject("Input must be: 1")
//         // }

//     })
// }
// getComments(1).then((data) => console.log(data))
// .catch((e) => console.log(e));


const getUsers = () =>{
    return new Promise(async (resolve,reject)=> {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users", { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        });
        resolve(data);
    });
};
const getPosts = (post_id) =>{
    return new Promise(async (resolve,reject)=> {
        const { data } = await axios.get(("https://jsonplaceholder.typicode.com/posts/"+ post_id), { 
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        }); 

        resolve(data);
    });
};
//! tek tek promise fonksiyonlarını cağırıp çalıstırır
// getUsers()
// .then((data) => console.log(data))
// .catch((e) => console.log(e)); 
// getPosts(1)
// .then((data) => console.log(data))
// .catch((e) => console.log(e)); 
//!-------------------------------

//! Anonim bir fonksiyon ile istenen promise ları çalıstırır
// (async()=>{

//     try{
//     const users = await getUsers();
//     const post1 = await getPosts(1);

//     console.log(users);
//     console.log(post1);
//     }
//     catch(error){
//         console.log(error);
//     }
// })();
//!-------------------------------

//! Bütün Promise ları aynı anda çalıstırır
Promise.all([getUsers(), getPosts(1)])
.then(console.log)
.catch(console.log)
//!-------------------------------