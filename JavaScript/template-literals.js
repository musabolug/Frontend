let userName = "musab"
const DOMAIN = "patika.dev"

let email = userName +"@" + DOMAIN

// console.log("Merhaba",userName, "sitemize hoş geldin","mail adresin:",email)

let info= `
Merhaba ${userName} sitemize hoş geldin.. 
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(2+3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}
`

console.log(info)

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }

//   Bakılacak
  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+kitap.ad+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+kitap.yazar+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+kitap.tarih+"</td>"+
      "</tr>"+
   " </tbody>"+
  "</table>"
  document.body.innerHTML = bookTable

  const bookTable1 =`
  <table borders>${user}
  `