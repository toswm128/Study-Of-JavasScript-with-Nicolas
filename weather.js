const API_KEY = "a87a60d9925a571cb60083b67a76f8ba";
const COORDS = "coords";


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latiude = position.coords.latitude; 
    const longitude = position.coords.longitude;
    const coordsObj = {
        latiude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("위치정보를 찾을 수 없습니다.")
}

function askForCodes(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError    )
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);  
    if(loadedCords === null){
        askForCodes();
    }else{
        //getWeather();
    }
}


function init(){
    loadCoords();     
}


init()