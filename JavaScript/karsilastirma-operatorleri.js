let price = "100"
let user ="musab"
// Eşitse ==
console.log("==: ",price == 1)
console.log("==: ",price == 100)

// === hem değeri hem de türü eşitse
console.log("===: ",price === 1)
console.log("===: ",price === 100)

// != eşit değilse
console.log("!=: ",price != 100)
console.log("!=: ",price != 1)

// > büyükse
console.log("price > 100 ",price > 100)
// >= Büyük eşitse
console.log("price >= 100 ",price > 100)
// < Küçükse
console.log("price < 100 ",price < 100)
// <= Küçük eşitse
console.log("price <= 100 ",price <= 100)

//&& ve
console.log(price && user !="guest")

// || veya 
console.log(price > 0 || user != "guest")

// ! tersi
user ="guest"
price = 1;
console.log (!(price >0 && user == "guest"))
// !(true) == false