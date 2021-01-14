const weather = document.querySelector(".js-weather");

const API_KEY = "a87a60d9925a571cb60083b67a76f8ba";
const COORDS = "coords";

function getWeather(lat,lng){
    fetch(`
    https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const palce = json.name;
        weather.innerText = `"${palce}"는 지금${temperature}℃입니다`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latiude = position.coords.latiude; 
    const longitude = position.coords.longitude;
    const coordsObj = {
        latiude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latiude,longitude);
}

function handleGeoError(){
    console.log("위치정보를 찾을 수 없습니다.")
}

function askForCodes(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError    )
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);  
    if(loadedCoords === null){
        askForCodes();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latiude , parseCoords.longitude);
    }
}


function init(){
    loadCoords();     
}


init()