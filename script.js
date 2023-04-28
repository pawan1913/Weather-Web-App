// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'afde5f55d5msh8f33522a3ab37dep18c1f0jsn4202ede5fd08',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather =(city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city ,options)
    .then(response=> response.json())
    .then((response) => {
    console.log(response)
    cloud_pct.innerHTML  = response.cloud_pct
    temp1.innerHTML = response.temp
    temp.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity1.innerHTML = response.humidity 
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed1.innerHTML = response.wind_speed
    wind_speed.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
}
)
.catch(err=> console.error(err));
}

submit.addEventListener('click' ,(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi");


const London =()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London',options)
    .then(response=> response.json())
    .then((response) => {
    console.log(response)
    cloud_pctl.innerHTML  = response.cloud_pct
    templ.innerHTML = response.temp
    feels_likel.innerHTML = response.feels_like
    humidityl.innerHTML = response.humidity
    min_templ.innerHTML = response.min_temp
    max_templ.innerHTML = response.max_temp
    wind_speedl.innerHTML = response.wind_speed
    wind_degreesl.innerHTML = response.wind_degrees
    sunrisel.innerHTML = response.sunrise
    sunsetl.innerHTML = response.sunset
    }
    )
}

London()

const Boston =()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
    .then(response=> response.json())
    .then((response) => {
    console.log(response)
    cloud_pctb.innerHTML  = response.cloud_pct
    tempb.innerHTML = response.temp
    feels_likeb.innerHTML = response.feels_like
    humidityb.innerHTML = response.humidity
    min_tempb.innerHTML = response.min_temp
    max_tempb.innerHTML = response.max_temp
    wind_speedb.innerHTML = response.wind_speed
    wind_degreesb.innerHTML = response.wind_degrees
    sunriseb.innerHTML = response.sunrise
    sunsetb.innerHTML = response.sunset
    }
    )
}

Boston()



const Paris =()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
    .then(response=> response.json())
    .then((response) => {
    console.log(response)
    cloud_pctp.innerHTML  = response.cloud_pct
    tempp.innerHTML = response.temp
    feels_likep.innerHTML = response.feels_like
    humidityp.innerHTML = response.humidity
    min_tempp.innerHTML = response.min_temp
    max_tempp.innerHTML = response.max_temp
    wind_speedp.innerHTML = response.wind_speed
    wind_degreesp.innerHTML = response.wind_degrees
    sunrisep.innerHTML = response.sunrise
    sunsetp.innerHTML = response.sunset
    }
    )
}

Paris()


const Beijing =()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston',options)
    .then(response=> response.json())
    .then((response) => {
    console.log(response)
    cloud_pctbe.innerHTML  = response.cloud_pct
    tempbe.innerHTML = response.temp
    feels_likebe.innerHTML = response.feels_like
    humiditybe.innerHTML = response.humidity
    min_tempbe.innerHTML = response.min_temp
    max_tempbe.innerHTML = response.max_temp
    wind_speedbe.innerHTML = response.wind_speed
    wind_degreesbe.innerHTML = response.wind_degrees
    sunrisebe.innerHTML = response.sunrise
    sunsetbe.innerHTML = response.sunset
    }
    )
}

Beijing()
