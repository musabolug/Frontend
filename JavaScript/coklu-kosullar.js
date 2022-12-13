let username = prompt("Kullanici adinizi giriniz:")
let age = prompt("YAsinizi giriniz")
let info = document.querySelector("#info")

if(username && age>= 18){
    info.innerHTML = "Ehliyet alabilirsiniz"
}
else if(!username){
    info.innerHTML = "Lütfen kullanici adi giriniz"
}else if(!(age>=18)){
    if(age>0){
        info.innerHTML = "Yasiniz 18 den kücük"
    }else{
        info.innerHTML="lütfen Yas bilgisi giriniz"
    }
}
