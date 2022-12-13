let greeting = document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick(){
    console.log("tiklandi")
    // console.log(this.innerHTML = "Tiklandiği için bilgi değişti")
    this.style.color == "red"? this.style.color ="black" : this.style.color = "red"
}