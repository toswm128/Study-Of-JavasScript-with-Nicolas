const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}시${
            minutes < 10 ? `0${minutes}` : minutes}분${
        seconds < 10 ? `0${seconds}` : seconds}초`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();