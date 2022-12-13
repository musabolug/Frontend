 // NUmber veri türü tanımlamak
 let price= 100
 let tax = 0.18
 let priceTax = price*tax
 let total = price+priceTax
 console.log(
    "Fiyat: ",price,
    "KDV orani: ",tax,
    "Kdv tutari: ",priceTax,
    "Toplam: ",total
 )

 let stringNumber = "11"
 console.log(stringNumber)
 let newNumber = Number(stringNumber)
 console.log(newNumber)

 console.log("Stringden Number a cevirme :", Number("222"))

 //Arttirma veya azaltma

let counter = 320
counter = counter+1 // uzun yol
counter += 1
counter ++
console.log(counter)

counter --
counter -= 1
console.log(counter)

counter *=10
console.log(counter)

counter/=10
console.log(counter)

//İslem Önceliği
console.log(3+2*10) // Önce Parantez içi sonra çarpma ve sonrasında toplama yapılır

//Mod(kalan) alma
// sayı tek mi çift mi
console.log(17 % 2) // 0 ise çift 1 ise tek

//üs alma (**)
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)


// aşağı yuvarlama ( Math.floor)
console.log( "Asagi yuvarlama: " ,Math.floor(1,9) );

//yukarı yuvarlama  (Math.ceil)
console.log( "Yukari yuvarlama: " ,Math.ceil(1,9) );

//yakına yuvarlama (Math.round)
console.log("Yakina yuvarlama :",Math.round(1,6));