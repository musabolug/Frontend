// var ile değişken tanımlamak
var serverName = "kodluyoruz.org"
console.log(serverName)

// let ile değişken tanımlamak
let sunucuAdi;
sunucuAdi="https://patika.com"
console.log(sunucuAdi) 

let password="12345";

// let ile tanımlnan değişkenin içeriğini değiştrmek
let fullName = "Musab Bera Oluğ"
console.log(fullName)
fullName="Musab Bera Mansur Oluğ"
console.log(fullName)

// Birlestirme veya ekleme

let testText="Deneme"
console.log(testText+" yazisi") // Bu yazısı değeri değiskene eklenmez ama ekrana yazdırılır

testText = "Birinci " +testText // Bu değişkene Birinci kelimesini ekler ama başına 
console.log(testText)
testText += " Yazisi"  //Bu değişkenin sonuna Yazısı metnini ekler
console.log(testText)

// const ile değişken tanımlamak
const serverPassword="sdfsadfwq2"
console.log(serverPassword)

/* HATALI TANIMLAMA
const serverPassword;
serverPassword = "asfgdsfgs"
*/ 

// Const ile tanımlanan değişken sonradan değiştirilemez
//serverPassword = "afdgdshdf" Bu hata verir 