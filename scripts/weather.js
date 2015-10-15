// Api Key : 6e5aa4dad446014ea4c8dc075f065566
// How to use : add &&APPID=API_KEY at the end of the query
// Example of query : http://api.openweathermap.org/data/2.5/weather?q=ClermontFerrand&units=imperial&APPID=6e5aa4dad446014ea4c8dc075f065566
// Metric = Celsius / Imperial = Fahrenheit

/*Day Data*/
var today = moment().format("dddd");
var dayTime = moment().format("HH:mm");
var dayPhase;

if (dayTime >= "0:00" && dayTime <= "12:00")
    dayPhase = "morning";
else if (dayTime < "17:00")
    dayPhase = "afternoon";
else
    dayPhase = "evening";

/*Weather Data*/
var temperature;
var description;
var id;

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=ClermontFerrand&units=imperial&APPID=6e5aa4dad446014ea4c8dc075f065566', function(data) {
    var weatherDiv = $("#weather");
    temperature = data.main.temp;
    description = data.weather[0].description;
    id = data.weather[0].id;

    if (id == 804) {
        if (dayPhase == "morning" || dayPhase == "afternoon")
            weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-cloudy'></i> " + temperature + " &degF");
        else
            weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-alt-cloudy'></i> " + temperature + " &degF");
    } else if (id == 800) {
        if (dayPhase == "morning" || dayPhase == "afternoon")
            weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-sunny'></i> " + temperature + " &degF");
        else
            weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-clear'></i> " + temperature + " &degF");
    }
});

$.ajax({
    url: "https://forecast.io/#/f/45.7768,3.0788",
    type: "get",
    dataType: "",
    success: function(data) {
        console.log("success");
        console.log(data);
    }
});
