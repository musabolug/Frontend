let  arrayObj = [1,2,3]
let object1 = {obj: 1}

console.log("arrayObj", typeof(arrayObj))
console.log("object1",typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof(item1))
console.log("item2", typeof(item2))

 

// key ve value yapısı
//[key1:1, key2:2, key3:3, ]
let laptop1 = {
    brand:"Apple", 
    model:"Macbook Pro",
    "2kg":"2 "// eğer keyin başında sayı tanımlamak istersen "" kullanmalısın
}
// anahtar bilgilerini döndürmek
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// anahtar bilgisine yeni değer eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Yeni Bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1)

//Anahtar bilgilerine Ulasmak ( keys) -> object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
});

// Değer bilgilerine Ulasmak    (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value =>{
    console.log(value)
    console.log(laptop1[value])
})

// Nesnelere Metot ekleme 