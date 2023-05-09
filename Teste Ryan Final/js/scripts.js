function GetInfo() {

  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = newName.value;

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=1ccd7acb4c671bad0c2978c0bf9f8c31')
.then(response => response.json())
.then(data => {

  
  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(2)+ "°";
      
  }

  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
  }
  

 
   for(i = 0; i<5; i++){
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
      data.list[i].weather[0].icon
      +".png";
  }
 
  console.log(data)


})

.catch(err => alert("Algo deu errado: tente colocar um nome de cidade válido"))
}

function DefaultScreen(){
  document.getElementById("cityInput").defaultValue = "Sorocaba";
  GetInfo();
}



var d = new Date();
var weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado",];


function CheckDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}

  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
  }



