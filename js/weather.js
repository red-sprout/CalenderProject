const weather = document.querySelector("#weather");
const weatherImg = document.createElement("img");
const tempInfo = document.createElement("span");
weather.appendChild(weatherImg);
weather.appendChild(tempInfo);

const API_KEY = "2e63553c8e5ac238929fc02d02a45d2c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      weatherImg.src = `img/weather/${data.weather[0].main}.png`;
      tempInfo.innerText = `\n${data.main.temp}°C`;
    })
  );
}

function onGeoError() {
  weather.removeChild(weatherImg);
  tempInfo.innerText = "No information";
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
