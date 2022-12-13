let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(evet){
    event.preventDefault()
    console.log("İslem gerçeklesti")
}