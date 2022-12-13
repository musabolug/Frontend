// ********** css class eklemek veya çıkarmak **********

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("title","btn")
greeting.classList.remove("btn")

greeting.classList.contains("title")
greeting.classList.item(0) // ilk sınıfı verir

console.log(greeting.classList)