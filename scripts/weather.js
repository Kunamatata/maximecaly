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


$.ajax({
    url: 'https://openweathermap.org/city/3024635',
    type: 'GET',
    success: function(res) {

        var data = $(res.responseText).find(".weather-widget h2").html();
        var nodes = $(res.responseText).find(".weather-widget").contents();
        var temperature = data.substr((data.length - 6), 4);
        temperature = temperature.trim();
        console.log(temperature);
        var tempFahrenheit = temperature * 1.8 + 32; // Celsius to Fahrenheit conversion
        tempFahrenheit = tempFahrenheit.toFixed(1); // 1 decimal point
        var weatherDiv = $("#weather");

        var description = $.trim(nodes[4].data);

        if (description == "Clouds") {
            if (dayPhase == "morning" || dayPhase == "afternoon")
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-cloudy'></i> " + tempFahrenheit + " &degF");
            else
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-alt-cloudy'></i> " + tempFahrenheit + " &degF");
        } else if (description == "Clear") {
            if (dayPhase == "morning" || dayPhase == "afternoon")
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-day-sunny'></i> " + tempFahrenheit + " &degF");
            else
                weatherDiv.html(today + " " + dayPhase + "<i class='wi wi-night-clear'></i> " + tempFahrenheit + " &degF");
        }
    }
});
