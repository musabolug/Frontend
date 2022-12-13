
let username = prompt("KUllanici bilginizi giriniz:")
//eger kullanıcı bilgisi varsa ekrana ismini yazdır.
//eger (username > 0) {console.log(username)} degilse {console.log("bilgi yok")}
if(username.length > 0){
    console.log("Kullanici bilginiz: ", username )
}else{
    console.log("Bilgi yok")
}