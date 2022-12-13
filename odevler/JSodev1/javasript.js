
let myName = prompt("Lutfen kullanici adinizi giriniz")

let info= document.querySelector("#myName")
info.innerHTML = myName

function showTime(){
const days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"] 
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
let d = days[today.getDay()];

document.getElementById('myClock').innerHTML= h +":"+ m + ":"+ s +" "+ d;
setTimeout(startTime,1000);
} 
function checkTime(i){
    if(i<10){
        i="0"+i
    }
}