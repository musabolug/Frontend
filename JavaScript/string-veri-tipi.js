let email = "musabolug@gmail.com"
let firstName = "Musab"
let lastName ="OLUĞ"
//String karakter sayısı (.length)
console.log("email karakter uzunlugu:", email.length)

// ilk karakteri bulkmak ([0]) | (.charAt()) 
console.log(firstName[0])
console.log(firstName.charAt(0))

//Buyuk harf (.toUpperCase())
firstName = firstName.toUpperCase()
console.log(firstName)

//Kucuk harf (.toLowerCAse())
firstName = firstName.toLowerCase()
console.log(firstName)

// String içinde istediğimiz bilgiyi aramak
console.log(email.search("@"))
console.log(email[9])

email.search("olmayan") // -1

// BElli yere kadar al
let DOMAIN  = email.slice( email.search("@" )+1)
console.log(DOMAIN)
console.log(DOMAIN.slice(0,DOMAIN.indexOf("."))) // sadece gmail i alır

// bilgiyi değistir
email = email.replace("gmail.com","kodluyoruz.org")
console.log(email)

// istediğim bilgi var mı
console.log(email.includes("sfgadsgs") )// false
console.log(email.includes("@") )//true

// istediğim bilgi ile basladı mı ? bitti mi? -> startsWith, endsWith:
console.log(email.endsWith('kodluyoruz.org')) // true
console.log(email.startsWith("musabolug"))// true

// ilk harfi büyütmek 
firstName = "FIRST"
lastName = "LAST"
let fullname =`${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullname)