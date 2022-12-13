// Temel kurallar:
//1: Bir fonksiyon Bir veya birden fazla parametre alabilir veya hiç almayabilir 
//2: Bir fonksiyon disari bilgi gonderebilir (return) veya gondermeyebilir
//3: Mumkunse fonksiyonun bağamlılıklarını azaltmak gerekir

function greetings(firstName){
    console.log(`Merhaba ${firstName ? firstName : ""}`)
}

function greetings2(firstName,lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}
let greetingsInfo = greetings("Ad","Soyad")
console.log(greetingsInfo)

function domWriteInfo(id,info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style ="color:red"> Color REDDD</span>`

domWriteInfo("greeting",htmlInfo)
domWriteInfo('info',greetings2("lorem","Ipsum"))