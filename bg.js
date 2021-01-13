const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(number){
    const image = new Image();
    image.src = `images/${number +1}.png`
    body.appendChild(image);
    image.classList.add("bgImg");
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; 
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();