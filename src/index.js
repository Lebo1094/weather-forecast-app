function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-input");
  let cityElement = document.querySelector("#city");
  let city = searchInputElement.value;

  function showWeather(response) {
    let temperatureElement = document.querySelector("#temp-value");
    temperatureElement.innerHTML = Math.round(
      response.data.temperature.current
    );
    let humidityElement = document.querySelector("#humid");
    humidityElement.innerHTML = response.data.temperature.humidity;

    cityElement.innerHTML = response.data.city;
  }

  let apiKey = "fd465o10bb292abbf346etb26bb03720";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}
&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", search);
