// Eger kullanıcı adı varsa ekrana yaz yoksa kullanıcı adınız bulunamadı yaz.
let username = prompt("kullanici Bilginizi Yaziniz")
let info = document.querySelector("#info")

//ternary kullanimi
//kosul ? dogruysa : yanlissa

//username.length >0 ? username : "Kullanici adi bulunamadi"

info.innerHTML =`${username? username : "Kullanici adi bulunamadi"}`