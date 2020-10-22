let button = document.querySelector(".button");



let api_key = "bbc23d45962e19ae83177f0741e24882";
let buttonOne=document.querySelector(".buttonOne")
let inputFiled=document.querySelector(".inputField")
let generalWeather=document.querySelector(".generalWeather")
let specificWeather=document.querySelector(".specificWeather")
let place=document.querySelector(".place")
let weahterIcon=document.querySelector(".weatherIcon")
let cityArray=["tokyo,japan","berlin,germany","sydney,australia","paris,france"]
let temperature=document.querySelector(".temperature")
let country=document.querySelector(".country")

buttonOne.addEventListener("click", function () {
getWeatherData(inputFiled.value)
inputLogic()
});

addEventListener("DOMContentLoaded",function(){
  getWeatherData(cityArray[Math.floor(Math.random()*4)])
  inputLogic()
  getWeeklyWeather()
})

let getWeeklyWeather=function(){
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid="+api_key)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    console.log(data.list)
    console.log(data.list[0])
    console.log(data.list[0].weather)
    console.log(data.list[0].weather[0])
    console.log(data.list[0].weather[0].main)
    console.log(data.list[0].weather[0].description)
  })
}


let getWeatherData=function(value){
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      "&appid=" +
      api_key
  )
    .then((res) => res.json())
    .then((data) =>{/* console.log(data) */      
      /* console.log(data.weather[0].main)
      console.log(data.weather[0].description) */
      place.innerHTML=data.name+","
      country.innerHTML=data.sys.country
      temperature.innerHTML=data.main.temp
/* 
       console.log(data.main.temp)
       console.log(data.main.temp-273.15)
       console.log(data.sys.country) */
       let generalWeatherVar=data.weather[0].main
      if(generalWeatherVar==="Clear"){
        weahterIcon.innerHTML='<i class="fas fa-sun"></i>'
      }else if(generalWeatherVar==="Clouds"){
        weahterIcon.innerHTML='<i class="fas fa-cloud"></i>'
      }else if(generalWeatherVar==="Rain"){
        weahterIcon.innerHTML='<i class="fas fa-tint"></i>'
      }else{
        weahterIcon.innerHTML='<i class="fas fa-cloud"></i>'
      }
      generalWeather.innerHTML=data.weather[0].main+"<br>"
      specificWeather.innerHTML=data.weather[0].description
    })
}
let inputLogic=function(){
  inputFiled.value=""
}






