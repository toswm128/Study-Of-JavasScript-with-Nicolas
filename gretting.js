const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function hendleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGretting(currentValue);
    saveName(currentValue);
    console.log("hey")
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit" , hendleSubmit);
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGretting(currentUser);
    }
}

function init(){
    loadName();
}

init(); 