function updateTime(){



//Prague
let pragueElement = document.querySelector("#prague"); 
let pragueDateElement=pragueElement.querySelector(".date");
let pragueTimeElement=pragueElement.querySelector(".time");
let pragueTime= moment().tz("Europe\Prague");

pragueTimeElement.innerHTML= pragueTime.format("hh:mm:ss a");
pragueDateElement.innerHTML= pragueTime.format("ddd Do YYYY ");




//Tokyo
let tokyoElement = document.querySelector("#tokyo"); 
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoTime= moment().tz("Asia/Tokyo");

tokyoTimeElement.innerHTML= tokyoTime.format("hh:mm:ss a");
tokyoDateElement.innerHTML= tokyoTime.format("ddd Do YYYY ");





//Kiev 
let kievElement = document.querySelector("#kiev"); 
let kievDateElement=kievElement.querySelector(".date");
let kievTimeElement=kievElement.querySelector(".time");
let kievTime= moment().tz("Europe/Kiev");

kievTimeElement.innerHTML= kievTime.format("hh:mm:ss a");
kievDateElement.innerHTML= kievTime.format("ddd Do YYYY ");

}
updateTime();
setInterval(updateTime, 1000);