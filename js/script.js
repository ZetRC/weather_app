/* let button = document.querySelector(".button"); */
let api_key = "bbc23d45962e19ae83177f0741e24882";
let buttonOne=document.querySelector(".buttonOne")
let inputFiled=document.querySelector(".inputField")
//
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

    /* main box data */

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var dateTime = date

    place.innerHTML=data.city.name+","
    country.innerHTML=data.city.country
    time.innerHTML=dateTime
    temperature.innerHTML=Math.floor(data.list[0].main.temp-273.15)+"C"
    weahterIcon.innerHTML= getIcon(data.list[0].weather[0].main)
    specificWeather.innerHTML=data.list[0].weather[0].description

    /* weekly wheater box data */

    dayTwoWeather.innerHTML="<div>"+getIcon(data.list[0].weather[0].main)+"</div>"+Math.floor(data.list[0].main.temp-273.15)+"C"+"</h6>"+"</div><h5>"+data.list[0].dt_txt.substr(5,6)+"</h5>"
    dayThreeWeather.innerHTML="<div>"+getIcon(data.list[8].weather[0].main)+"</div>"+Math.floor(data.list[8].main.temp-273.15)+"C"+"</div><h5>"+data.list[8].dt_txt.substr(5,6)+"</h5>"
    dayFourWeather.innerHTML="<div>"+getIcon(data.list[16].weather[0].main)+"</div>"+Math.floor(data.list[16].main.temp-273.15)+"C"+"</div><h5>"+data.list[16].dt_txt.substr(5,6)+"</h5>"
    dayFiveWeather.innerHTML="<div>"+getIcon(data.list[24].weather[0].main)+"</div>"+Math.floor(data.list[24].main.temp-273.15)+"C"+"</div><h5>"+data.list[24].dt_txt.substr(5,6)+"</h5>"

    /* other data box */

    document.querySelector(".population").innerHTML=data.city.population
    document.querySelector(".latitude").innerHTML=data.city.coord.lat
    document.querySelector(".longitude").innerHTML=data.city.coord.lon
    document.querySelector(".timezone").innerHTML=data.city.timezone
    document.querySelector(".sunrise").innerHTML=data.city.sunrise
    document.querySelector(".sunset").innerHTML=data.city.sunset


})
}


let inputLogic=function(){
  inputFiled.value=""
}

weekWeatherContainer=document.querySelector(".weekWeatherContainer")

//autocomplete your search

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
      });
}

/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), countries);