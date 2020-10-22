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
let inputalue=inputFiled.value
buttonOne.addEventListener("click", function () {
getWeatherData(inputFiled.value)
getWeeklyWeather(inputFiled.value)
console.log(inputFiled.value)
inputLogic()
});

addEventListener("DOMContentLoaded",function(){
  getWeatherData(cityArray[Math.floor(Math.random()*4)])
  inputLogic()
  
})
let dayTwoWeather=document.querySelector(".dayTwoWeather")
let dayThreeWeather=document.querySelector(".dayThreeWeather")
let dayFourWeather=document.querySelector(".dayFourWeather")
let dayFiveWeather=document.querySelector(".dayFiveWeather")
let getWeeklyWeather=function(inputValue){
  fetch("https://api.openweathermap.org/data/2.5/forecast?q="+inputValue+"&appid="+api_key)
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
    console.log(data.list)
    console.log(data.list[0])
    console.log(data.list[0].weather)
    console.log(data.list[0].weather[0])
    console.log(data.list[0].dt_txt)
    console.log(data.list[0].weather[0].main)
    console.log(data.list[0].weather[0].description)
    console.log(data.list[8])
    console.log(data.list[16])
    console.log(data.list[24])
    
    let getIcon=function(weatherVar){
      if(weatherVar==="Clear"){
        return '<i class="fas fa-sun"></i>'
      }else if(weatherVar==="Clouds"){
        return '<i class="fas fa-cloud"></i>'
      }else if(weatherVar==="Rain"){
        return '<i class="fas fa-tint"></i>'
      }else{
        return '<i class="fas fa-cloud"></i>'
      }
    }

    console.log(getIcon("Clear"))
/* 
    let addTwoNumbers=function(a,b){
      return a+b
    }

    console.log(addTwoNumbers(1,2))
 */
    
dayTwoWeather.innerHTML="<h1>"+getIcon(data.list[8].weather[0].main)+"</h1><h3>"+data.list[8].weather[0].main+"</h3><h5>"+data.list[8].dt_txt.substr(0,10)+"</h5>"
dayThreeWeather.innerHTML="<h1>"+getIcon(data.list[16].weather[0].main)+"</h1><h3>"+data.list[16].weather[0].main+"</h3><h5>"+data.list[16].dt_txt.substr(0,10)+"</h5>"
dayFourWeather.innerHTML="<h1>"+getIcon(data.list[24].weather[0].main)+"</h1><h3>"+data.list[24].weather[0].main+"</h3><h5>"+data.list[24].dt_txt.substr(0,10)+"</h5>"
dayFiveWeather.innerHTML="<h1>"+getIcon(data.list[32].weather[0].main)+"</h1><h3>"+data.list[32].weather[0].main+"</h3><h5>"+data.list[32].dt_txt.substr(0,10)+"</h5>"
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
    .then((data) =>{
      place.innerHTML=data.name+","
      country.innerHTML=data.sys.country
      temperature.innerHTML=data.main.temp

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






