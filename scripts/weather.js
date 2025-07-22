// const currentTemp = document.querySelector('#current-temp');
// const captionDesc = document.querySelector('#currentWeather');
// const weatherIcon = document.querySelector('#weather-icon');


// const apiKey = 'f86c94d1180c0e84c5d5db7b1849c7c3';
// const lat = '49.7502';
// const lon = '6.6318'; 
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// async function apiFetch() {
//   console.log("fetching...");
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data); // testing only
//       displayResults(data); // uncomment when ready
//     } else {
//         throw Error(await response.text());
//     }
//   } catch (error) {
//       console.log(error);
//   }
// }

// function displayResults(data) {
//   currentTemp.innerHTML = `${data.main.temp}&deg;F`;
//   const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//   let desc = data.weather[0].description;
//   weatherIcon.setAttribute('src', iconsrc);
//   weatherIcon.setAttribute('alt', data.weather[0].description);
//   captionDesc.textContent = `${desc}`;
// }

// apiFetch();