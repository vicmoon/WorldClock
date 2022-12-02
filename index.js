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
    let cityTime= moment.tz(timeZone);
    console.log(timeZone);
    console.log(cityTime.format("MMMM Do YYYY"));
    let allCitiesElement =document.querySelector("#cities");
    console.log(allCitiesElement);
    allCitiesElement.innerHTML=timeZone;
    allCitiesElement=`

    <div class="row mb-3">
    <div class="col-6">
      <h2>${timeZone}</h2>
      <div class="date">${cityTime.format("ddd Do YYYY ")}</div>
    </div>
    <div class="col-6">
      <div class="time">${cityTime.format("hh:mm:ss a")}></div>
    </div>
  </div>


    `;

}

let citiesElement= document.querySelector("#city");
citiesElement.addEventListener("change", updateCity)