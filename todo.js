const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("Input"),
    list = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDos = [];


function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    list.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id,li.id)
        return toDo.id !== parseInt(li.id); 
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    delBtn.addEventListener("click", delToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function someting (toDo){
    paintToDo(toDo.text);
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(someting);
    }
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();