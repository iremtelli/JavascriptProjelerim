const url = `https://api.openweathermap.org/data/2.5/`
const key = `016d0ab8f458e4f77d8032e73db45155`
const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value)
}
const getResult = async (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
  let result
  fetch(query).then(async (weather) => {
    result = await weather.json()
    displayResult(result)
  })
}
const displayResult = (result) => {
  let city = document.querySelector(".city")
  city.innerText = `${result.name}, ${result.sys.country}`
  let temp = document.querySelector(".temp")
  temp.innerText = `${Math.round(result.main.temp)}°C`
  let desc = document.querySelector(`.desc`)
  desc.innerText = result.weather[0].description
  let minmax = document.querySelector(".minmax")
  minmax.innerText = `${Math.round(result.main.temp_min)}°C/${Math.round(
    result.main.temp_max
  )}°C`
}

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress", setQuery)
