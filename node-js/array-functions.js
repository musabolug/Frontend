/*
! EN Çok Kullanılan array functionları
? push
? map
? find
? filter
? some
? every
? includes
 */
//!-------------------------------

const users = ["Musab", "Bera", "Mansur"];

//! Push Arrayin sonuna eleman ekler
//? users.push("Olug");
// console.log(users)
//!-------------------------------

//! Map For döngusu ile uğraşmadan array elemanlarını gezmeye yarar
const mans = [
    {
        name: "Musab",
        surname:"OLug",
        age: 16
    },
    {
        name: "Musab",
        surname:"Ergan",
        age: 14
    },
    {
        name: "Musab",
        surname:"OLug",
        age: 19
    },
    {
        name:"Muaz",
        surname:"Olug",
        age:12
    },
    {
        name:"Muhammed",
        surname:"Olug",
        age:6
    }
]
//? mans.map((item)=>{
//     // console.log(item); Bütün bilgiler gelir
//     console.log(item.name); // sadece isim bilgileri gelir
// });
//!-------------------------------


//! FIND istenilen ögeyi array içinde bulmaya yarar
//? const findIt = mans.find((item) => item.name === "Musab");
// console.log(findIt);
//!-------------------------------


//! FILTER istenilen koşulu sağlayan ogeleri getirir
//? const filtered = mans.filter((item)=> item.age >10)
//? const filtered1 = mans.filter(({name, age})=> name === "Musab" && age>15);
//console.log(filtered1);
//!-------------------------------


//! SOME boolean deger dondurur istenilen koşulu sağlayan bir öge var mı yok mu anlamaya yarar
//? const some = mans.some(item => item.age === 16);
// console.log(some);
//!-------------------------------


//! EVERY array içindeki tum değiskenlerin koşulu sağlayıp sağlamadığı hakkında BOOLEAN değer döndürür
//? const every = mans.every(item => item.age> 10);
//console.log(every);
//!-------------------------------


//! INCLUDES array içinde istenilen değer varmı yokmu hakkında BOOLEAN değer verir
const meyveler = ["Elma","Armut","Muz"];
const isIncluded = meyveler.includes("Muz");
console.log(isIncluded);
//!-------------------------------