$(document).ready(function() {
    var once = 1
    if (annyang && once == 1) {
        var commands = {
            '*hello': greetings,
            /* *bip hello *bip <-- This would allow to confirm if hello is blurred in a sentance*/
            'hi': greetings,
            'hey': greetings,
            'open *term': redirect
        };
        annyang.addCommands(commands);
        annyang.start();
    }

    $("#userIP").text(userIP);
});


var dayOfWeek = "Saturday";
var dayOfWeekPast = "Sunday";
var timeOfDay = "Night";
var greetings = function() {
    $("#greetings").animate({
        height: 500
    }, 800, function() {
        $("#greetings h1").css("opacity","0.1");
        $("#typed-greetings").typed({
            strings: ["Hi! I'm Max, nice to meet you^2000 <br> I am a French Software Engineering student in love with video games and programming ! ^1000 <br>I am passionate with the Gaming Industry and I love playing video games.  ^1000<br> I'm actually a hardcore player of Starcraft 2 <br> I swear I go outside too... ^2000 sometimes... ^1000 <br>I've lived 6 years in the U.S.A in OHIO and have always wanted to come back after my studies. "],
            typeSpeed: 10,
            backDelay: 500,
            loop: false,
            loopCount: false,
            showCursor: false,
            onStringTyped: function() {
                setTimeout(function() {
                    $('html,body').animate({
                        scrollTop: $("#experience").offset().top
                    }, 1000);
                }, 3000);

            }
        });
    })
}

var redirect = function(term) {
    var url = "http://" + term.toLowerCase() + ".com";
    window.open(url, '_blank');
}

var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    variance: "1",
    seed: 'xh4mv',
    x_colors: 'Spectral',
    cell_size: 40
});

document.getElementById("hero").appendChild(pattern.canvas());
