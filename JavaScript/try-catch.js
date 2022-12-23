// hata yönretimi için try catch kullanımı

let items;

try{
items.forEach(item => console.log(item));
}
catch (error){
console.log("error:", error);
}
console.log("Hata yönetimi düzgün çalişiyor");

let info ="kodluyoruz"