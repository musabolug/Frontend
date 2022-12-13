
// Array oluşturmak 
let domain = " kodluyoruz "
let isActive = false
let items = [1,2,3,isActive,domain]
console.log(items)

let emptyArray = [] //bos list

// Array içerisindeki eleman/oge sayisini ogrenmek
console.log(
    items.length // array içindeki öge sayısı
)

//document.querySelector('#info').innerHTML = items.length

// ARRAYDAKI ELK ELEMANI GOREMEK
console.log(items[0])

// Arraydaki son elemanı gostermek
console.log(items[items.length-1])

// degisken içindeki bilginin Array olup olmadığının kotrol edilmesi
console.log(
    typeof(items) //object olarak çıktı veriyor
)
console.log(
    Array.isArray(items)
)

// hangileri isArray -> True verir?

console.log("[] :",Array.isArray([]))
console.log("1:",Array.isArray(1))
console.log("true :",Array.isArray(true ))   

// Array içindeki ortadaki elemanın çağırılması
console.log(
    items[Math.floor(items.length / 2)]
)

let itemsArray = [10,20,30,40]
console.log("items - ilk hali: ", items)

//Array : sona eleman eklemek -> push
itemsArray.push(50)
console.log("50 : " ,itemsArray)

//Array: başa oge eklemek -> unshift
itemsArray.unshift(5)
console.log("5 :", itemsArray)

//Array: sondaki elemanı çokarıp başka bir değişkene atamak
let lastItem = itemsArray.pop()
console.log("lastItem: ",lastItem,"itemsArray: ",itemsArray)

//Array: bastaki elemanı çıkarıp bir değişkene atamak
let firstItem = itemsArray.shift()
console.log("firstItem: ",firstItem,"itemsArray: ",itemsArray)



// Array içindeki bir elemanın bilgisini değiştirmek
//ilk ogenin bilgisini değiştirmek
itemsArray[0] = 5;
console.log(itemsArray)

//Array: sonuncu ogenin değistirilmesi
itemsArray[itemsArray.length-1] = 1000
console.log(itemsArray)


let arrayItems = [1,2,3,4,5]
//Array içinde array
let femaleUsers = ["Ayşe","Hülya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

arrayItems.unshift(femaleUsers)
arrayItems.push(maleUsers)

console.log(arrayItems)

console.log(arrayItems.length)
console.log(arrayItems[0].length) // Array içindeki istediğimiz Array'in length bilgisini aldık (femaleUsers)
console.log(arrayItems[0][0].length) // Ayse bilgisine ulastık

// Array içerisinden oge ayırmak -> splice(pos,item?)
let newItems = arrayItems.splice (1,5) //1. indeksten başla ve 5 indekx içerisindeki elemanları newItems içine at
console.log("newItems: ", newItems)
console.log("arrayItems: ", arrayItems)

// Array içindeki ogenin indexini bulmak
arrayItems.unshift("lorem")
arrayItems.push("ipsum")
console.log(arrayItems.indexOf("ipsum"))

//Array kopyalamak -> slice
let copyItems = arrayItems.slice()
copyItems.pop()
console.log("copyItems: ",copyItems)
console.log("arrayItems: ",arrayItems)

let es6Items = [...arrayItems] // es6 ve sonrasında gelen kopyalama işlemi
console.log("es6Items: ",es6Items)

let allUsers =[...femaleUsers,...maleUsers] // es6 ile birden fazla array yapısını bielestirmek
console.log("allUsers: ",allUsers)

// Array icerisindeki bilgiyi Stringe cevirmek (toString,join)

console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Istediğimiz  Index bilgisine oge eklemek -> splice(index,0,value)
allUsers.splice(allUsers.length -1,0,"Melisa")
allUsers.splice(Math.floor(allUsers.length /2),0,"Ortanç")
console.log("allUsers: ",allUsers)