function updateTime(){



//Prague
let pragueElement = document.querySelector("#prague"); 
let pragueDateElement=pragueElement.querySelector(".date");
let pragueTimeElement=pragueElement.querySelector(".time");
let pragueTime= moment().tz("Europe/Prague");

pragueTimeElement.innerHTML= pragueTime.format("hh:mm:ss a");
pragueDateElement.innerHTML= pragueTime.format("ddd Do YYYY ");

//Tokyo
let tokyoElement = document.querySelector("#tokyo"); 
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoTime= moment().tz("Asia/Tokyo");

tokyoTimeElement.innerHTML= tokyoTime.format("hh:mm:ss a");
tokyoDateElement.innerHTML= tokyoTime.format("ddd Do YYYY ");


}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event){
    let timeZone= event.target.value;
    let cityTime= moment().tz(timeZone);
    let cityName =timeZone.split("/")[1];
    let allCitiesElement =document.querySelector("#cities");
    
    allCitiesElement.innerHTML =
    `
 
      <div>
      <h2 class="mb-3">${cityName}</h2> 
      <div class="date mb-3">${cityTime.format("ddd  Do YYYY ")}</div></div>
      <div class="time mb-3">${cityTime.format("hh:mm:ss a")}</div></div>
     </div>
    
    

    `;

}

let citiesElement= document.querySelector("#city");
citiesElement.addEventListener("change", updateCity)