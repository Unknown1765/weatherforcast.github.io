const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '93765bea6fmsh0eb2a71a7b017eep1d50c6jsne64f5e773af7',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
   };
   const getWeather = (city) => {
    cityname.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
    .then(response => response.json())
    .then((response) => {
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    
    })
    .catch(err => console.error(err));
   }
   submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
   })
   getWeather("Delhi")
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttar Pradesh' , options)
   .then(response => response.json())
   .then((response) => {
    Dcloud_pct.innerHTML = response.cloud_pct
    Dfeels_like.innerHTML = response.feels_like
    Dtemp.innerHTML = response.temp
    Dhumidity.innerHTML = response.humidity
    Dwind_speed.innerHTML = response.wind_speed
    Dwind_degrees.innerHTML = response.wind_degrees
    
   })
   .catch(err => console.error(err));
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh' , options)
   .then(response => response.json())
   .then((response) => {
    CHcloud_pct.innerHTML = response.cloud_pct
    CHfeels_like.innerHTML = response.feels_like
    CHtemp.innerHTML = response.temp
    CHhumidity.innerHTML = response.humidity
    CHwind_speed.innerHTML = response.wind_speed
    CHwind_degrees.innerHTML = response.wind_degrees
    
   })
   .catch(err => console.error(err));
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Haryana' , options)
   .then(response => response.json())
   .then((response) => {
    Hcloud_pct.innerHTML = response.cloud_pct
    Hfeels_like.innerHTML = response.feels_like
    Htemp.innerHTML = response.temp
    Hhumidity.innerHTML = response.humidity
    Hwind_speed.innerHTML = response.wind_speed
    Hwind_degrees.innerHTML = response.wind_degrees
    
   })
   .catch(err => console.error(err));
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
   .then(response => response.json())
   .then((response) => {
    Kcloud_pct.innerHTML = response.cloud_pct
    Kfeels_like.innerHTML = response.feels_like
    Ktemp.innerHTML = response.temp
    Khumidity.innerHTML = response.humidity
    Kwind_speed.innerHTML = response.wind_speed
    Kwind_degrees.innerHTML = response.wind_degrees
    
   })
   .catch(err => console.error(err));