const currentyear = document.getElementById("currentyear");
const today = new Date();
currentyear.innerHTML = ` <span class="design">${today.getFullYear()} </span>`;
document.getElementById("modified").innerHTML = document.lastModified;

function calc_wind_chill(temperature,windspeed){
    return 13.12 + 0.6215* temperature - 11.37 * Math.pow(windspeed,0.16) + 0.3965 * temperature * Math.pow(windspeed,0.16);

}
let temperature = 10;
let windspeed = 5;
let windchill = calc_wind_chill(temperature,windspeed);

const display_windchill = document.getElementById("windchill");
display_windchill.textContent = Math.round(windchill ) + '°C';


if (temperature <= 10 && windspeed > 4.8 ){
   let  windchill = calc_wind_chill(temperature,windspeed);
   console.log(windchill);
}
else{
   let displ_windchill = document.getElementById("windchill");
   displ_windchill.textContent = "N/A"
}

