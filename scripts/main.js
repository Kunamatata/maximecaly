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

/*
    The var section has to look like this : #section_name
    The var milliseconds takes an integer
*/
var slideToSection = function(section, milliseconds) {
    $('html,body').animate({
        scrollTop: $(section).offset().top
    }, milliseconds);
}

var dayOfWeek = "Saturday";
var dayOfWeekPast = "Sunday";
var timeOfDay = "Night";
var greetings = function() {
    $("#greetings").animate({
        height: 500
    }, 800, function() {
        $("#greetings h1").css("opacity", "0.1");
        $("#typed-greetings").typed({
            strings: ["Hi! I'm Max, nice to meet you!^500 <br> I am a French Software Engineering Student in love with technology, programming and video games.^500 <br>Usually,^500 when I have free time and nothing planned I will play something.^500 My favorite game is Starcraft 2 and I like it because it's a real time strategy game. I have to think and innovate to win. ^500 <br> I'm in my last year before graduating of 5 years of college and getting my Masters. ^500 <br> I lived 6 years in OHIO when I was a kid and I've always wanted to live in the USA. ^500 <br>I successfully found my internship in Boulder, Colorado.^500 It was amazing, I met extroadinary people and learned a lot both in technical and social aspects. ^500 <br> I had the chance to work in two different companies, DragonDev and Human Design. ^500<br> Both were different experiences and projects and that gave me broader view of startups in technology and web development. ^500 <br> I really hope to be able to do my last internship at the same place because it was an A^500W^500E^500S^500O^500M^500E adventure and I can't wait to be there!"],
            typeSpeed: 10,
            backDelay: 500,
            loop: false,
            loopCount: false,
            showCursor: false,
            onStringTyped: function() {
                setTimeout(function() {
                    slideToSection("#experience",500);
                }, 2000);

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
