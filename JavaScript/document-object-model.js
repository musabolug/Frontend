
// pathname
// console.log(document.location.pathname)

// console.log(document.head)
// console.log(document.body)

// console.log(document.URL)
// console.log(document.baseURI)
 document.body.style.backgroundColor = "white"

//********************Dom İcinden Oge secimi */
let title = document.getElementById("title")
title.innerHTML = "Degisen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul#list>li>a")
let link1 = document.querySelector("#kodluyoruzLink")
console.log(link.innerHTML)
console.log(link)
console.log(link1)
link.innerHTML += " degisti"

link.style.color="red"