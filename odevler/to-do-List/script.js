const button = document.querySelector("#liveToastBtn")
const list = document.querySelector("#list")
const liveToast = document.querySelector("#liveToast")
const allLists = document.querySelector("li")

function eventListener(){
    list.addEventListener("click",)
}

function listFunction(e){
    if(e.target.className === "close"){
        e.target.parentElement.remove();
        deleteToDoStorage(e.target.parentElement.firstChild.modeValue);
    }else if(e.target.className === "toDoItem"){
        e.target.className ="toDoOkey";
        const checkItem = document.createElement("i");
        checkItem.className = "fa fa-check";
        e.target.appendChild(checkItem);
    }
    else if(e.target.className === "toDoOkey"){
        e.target.className = "toDoItem";
        e.target.chidren[1].remove();
    }

}

function getToDosFromStorage(){
    let task;
    if(localStorage.getItem("task") === null){
        task=[]
    }else{
        task= JSON.parse(localStorage.getItem("task"))
    }
    return task;

}

function deleteToDoStorage(deleteTask){
    let siltask = getTodosFromStorage();
    siltask.forEach (function(task,index){
    if(task == deleteTask){
      siltask.splice(index,1);
    }
   
   
    });
   console.log(siltask);
    localStorage.setItem("task", JSON.stringify(siltask));
   
    }

function addToDoStorage(setTask){
    let localStorageTask = getToDosFromStorage();
    localStorageTask.push(setTask);
    localStorage.setItem("task",JSON.stringify(localStorageTask));

}

function newElement(){
    const task = document.querySelector("#task");

    if(task.value.trim() == ""){
        showToast(false);
    }
    else if(!task.value == ""){
        addTodoUi(task.value);
        showToast(true);
        addToDoStorage(task.value);
        task.value = "";
    }
}

function addTodoUi(task){
    const listElement = document.querySelector("li");
    const spanElement = document.querySelector("span");

    listElement.className = "toDoItem";
    spanElement.className = "close";
    spanElement.innerText = "x"
    listElement.innerText = task.trim();
    listElement.appendChild(spanElement);
    list.appendChild(listElement);
}

function  showToast(sonuc){
    if( sonuc == false){
        $(".error").toast("show");
    }
    else{
        $(".success").toast("show");
    }
}

