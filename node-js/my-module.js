//! 1. yol
// const topla = function topla(a, b){
//     return a + b;
// }

// export default topla;

//! 2. yol

const hello = (name) =>{
    // console.log("hello" + name);
    console.log(`hello ${name}`);
};

export const cikar = (a, b) => a-b ;

const carpma = (a ,b) => {
    return a*b;
}

const topla = function topla(a, b){
        return a + b;
 }

export const user = {
    name:"Musab",
    surname: "Olug"
}
export const users = [
    {
        name: "Musab",
        surname: "Olug"
    },
    {
        name: "Muaz",
        surname: "Olug"
    },
    {
        name: "Muhammed",
        surname: "Olug"
    }
]

export const text = "Bu import edilen bir textdir"
export{carpma, topla,}

export default hello;