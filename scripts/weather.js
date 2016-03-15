// Api Key : 6e5aa4dad446014ea4c8dc075f065566
// How to use : add &&APPID=API_KEY at the end of the query
// Example of query : http://api.openweathermap.org/data/2.5/weather?q=ClermontFerrand&units=imperial&APPID=6e5aa4dad446014ea4c8dc075f065566
// Metric = Celsius / Imperial = Fahrenheit

/*Day Data*/

var today = moment().format("dddd");
var dayTime = moment().format("HH:mm");
var dayPhase;

if (dayTime >= "00:00" && dayTime <= "12:00")
    dayPhase = "morning";
else if (dayTime > "12:00" && dayTime < "17:00")
    dayPhase = "afternoon";
else
    dayPhase = "evening";

/*Using Forecast.io api*/
$.ajax({
    url: "https://api.forecast.io/forecast/83b001117aa8aa483d584ae0e6bccc74/45.787119,3.0777067",
    dataType: "jsonp",
    success: function(data) {

        var weatherDiv = $("#weather");

        var currently = data.currently;
        var summary = data.currently.summary;
        var temperature = data.currently.temperature;

        if (summary == "Mostly Cloudy") {
            if (dayPhase == "morning" || dayPhase == "afternoon")
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-cloudy'></i> " + temperature + " &degF");
            else
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-alt-cloudy'></i> " + temperature + " &degF");
        } else if (summary == "Clear") {
            if (dayPhase == "morning" || dayPhase == "afternoon")
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-sunny'></i> " + temperature + " &degF");
            else
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-clear'></i> " + temperature + " &degF");
        }
    }
});
