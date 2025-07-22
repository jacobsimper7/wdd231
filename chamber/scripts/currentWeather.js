const currentTempCW = document.querySelector('#current-temp');
const captionDescCW = document.querySelector('#currentWeather');
const weatherIconCW = document.querySelector('#weather-icon');
const forecastCaption = document.querySelector('#forecast');


const apiKeyCW = 'f86c94d1180c0e84c5d5db7b1849c7c3';
const latCW = '11.286062632088056';
const lonCW = '5.943241567946729'; 
const urlCW = `https://api.openweathermap.org/data/2.5/weather?lat=${latCW}&lon=${lonCW}&appid=${apiKeyCW}&units=imperial`;

async function apiFetchCW() {
  console.log("fetching...");
  try {
    const response = await fetch(urlCW);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResultsCW(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResultsCW(data) {
  currentTempCW.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  let desc = data.weather[0].description;
  weatherIconCW.setAttribute('src', iconsrc);
  weatherIconCW.setAttribute('alt', data.weather[0].description);
  captionDescCW.textContent = `${desc}`;
}

async function fetchForecast() {
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latCW}&lon=${lonCW}&appid=${apiKeyCW}&units=imperial`;
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayForecast(data) {
  // OpenWeatherMap's forecast API returns data every 3 hours for 5 days
  // We'll pick the first forecast for each of the next three days
  const today = new Date();
  let days = [];
  let dayCount = 0;

  for (let item of data.list) {
    const date = new Date(item.dt_txt);
    if (date.getDate() !== today.getDate() && !days.find(d => d === date.getDate())) {
      days.push(date.getDate());
      dayCount++;
      // Display date and temperature
      forecastCaption.innerHTML += `<div>
        <strong>${date.toLocaleDateString(undefined, { weekday: 'long' })}:</strong>
        ${Math.round(item.main.temp)}&deg;F
      </div>`;
      if (dayCount === 3) break;
    }
  }
}

apiFetchCW();
fetchForecast();