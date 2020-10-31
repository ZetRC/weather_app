let button = document.querySelector(".button");



let api_key = "bbc23d45962e19ae83177f0741e24882";
let buttonOne=document.querySelector(".buttonOne")
let inputFiled=document.querySelector(".inputField")
let generalWeather=document.querySelector(".generalWeather")
let specificWeather=document.querySelector(".specificWeather")
let place=document.querySelector(".place")
let weahterIcon=document.querySelector(".weatherIcon")
let cityArray=["tokyo,japan","berlin,germany","sydney,australia","paris,france",]
let temperature=document.querySelector(".temperature")
let country=document.querySelector(".country")
let inputalue=inputFiled.value
let time=document.querySelector(".time")
buttonOne.addEventListener("click", function () {
getWeeklyWeather(inputFiled.value)
inputLogic()
});

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    getWeeklyWeather(inputFiled.value)
inputLogic()
  }
});

addEventListener("DOMContentLoaded",function(){
  getWeeklyWeather(cityArray[Math.floor(Math.random()*4)]) 
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
    console.log(data.city.name)
    console.log(data.city.country)
    console.log(data.list[0].main.temp)
    console.log(data.list[0].dt_txt)
    console.log(data.list[0].weather[0].main)
    console.log(data.list[0].weather[0].description)    
    
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


    place.innerHTML=data.city.name+","
    country.innerHTML=data.city.country
    time.innerHTML=data.list[0].dt_txt.substr(0,10)
    temperature.innerHTML=Math.floor(data.list[0].main.temp-273.15)+"C"
    weahterIcon.innerHTML= getIcon(data.list[0].weather[0].main)
    generalWeather.innerHTML=data.list[0].weather[0].main
      specificWeather.innerHTML=data.list[0].weather[0].description

    let getWeeklyWaetherData

dayTwoWeather.innerHTML="<div>"+getIcon(data.list[8].weather[0].main)+"</div>"+Math.floor(data.list[8].main.temp-273.15)+"C"+"</h6>"+"</div><h5>"+data.list[8].dt_txt.substr(5,6)+"</h5>"
dayThreeWeather.innerHTML="<div>"+getIcon(data.list[16].weather[0].main)+"</div>"+Math.floor(data.list[16].main.temp-273.15)+"C"+"</div><h5>"+data.list[16].dt_txt.substr(5,6)+"</h5>"
dayFourWeather.innerHTML="<div>"+getIcon(data.list[24].weather[0].main)+"</div>"+Math.floor(data.list[24].main.temp-273.15)+"C"+"</div><h5>"+data.list[24].dt_txt.substr(5,6)+"</h5>"
dayFiveWeather.innerHTML="<div>"+getIcon(data.list[32].weather[0].main)+"</div>"+Math.floor(data.list[32].main.temp-273.15)+"C"+"</div><h5>"+data.list[32].dt_txt.substr(5,6)+"</h5>"
})
}


let inputLogic=function(){
  inputFiled.value=""
}

weekWeatherContainer=document.querySelector(".weekWeatherContainer")



$(function(){
$(".slidebarIcon").on("click",function(){
  $(".weekWeatherContainer").animate({width:'toggle'},500);
  
})
})