$(document).ready(function() {
    var once = 1
    if (annyang && once == 1) {
        var commands = {
            'hello': greetings,
            /* *bip hello *bip <-- This would allow to confirm if hello is blurred in a sentance*/
            'hi': greetings,
            'hey': greetings,
            'open *term': redirect
        };
        annyang.addCommands(commands);
        annyang.start();
    }
    setInterval(function() {
        $.getJSON('https://api.twitch.tv/kraken/streams/kunamatataeu', function(data) {
            /*If the stream object exists then stream is live*/
            if (data.stream != null) {
                $(".stream-circle").css("background-color", "#2aff00");
                $("#stream-text").html("Stream Online");
            }
        });
    }, 60000);

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

$(".fa-microphone").click(function(event) {
    greetings();
});


var greetings = function() {
    $("#greetings").animate({
        height: 800
    }, 800, function() {
        $("#greetings h1").css("opacity", "0.1");
        $("#typed-greetings").typed({
            strings: ["Hi! I'm Max, nice to meet you!^500 <br> I am a French Software Engineering Student in love with technology, programming and video games.^500 <br>Usually,^500 when I have free time and nothing planned I will play something.^500 My favorite game is Starcraft 2 and I like it because it's a real time strategy game. I have to think and innovate to win. ^500 <br> I'm in my last year before graduating of 5 years of college and getting my Masters. ^500 <br> I lived 6 years in OHIO when I was a kid and I've always wanted to live in the USA. ^500 <br>I successfully found my internship in Boulder, Colorado.^500 It was amazing, I met extroadinary people and learned a lot both in technical and social aspects. ^500 <br> I had the chance to work in two different companies, DragonDev and Human Design. ^500<br> Both were different experiences and projects that gave me broader view of startups in technology and web development. ^500 <br> I really hope to be able to do my last internship at the same place because it was an A^500W^500E^500S^500O^500M^500E adventure and I can't wait to be there!"],
            typeSpeed: 0,
            backDelay: 500,
            loop: false,
            loopCount: false,
            showCursor: false,
            onStringTyped: function() {
                setTimeout(function() {
                    slideToSection("#map", 500);
                }, 2000);

            }
        });
        x
    })
}

var redirect = function(term) {
    console.log("hi");
    var url = "http://" + term.toLowerCase() + ".com";
    window.open(url, '_blank');
}

//Human Design marker class
var hdIcon = L.divIcon({
    className: 'hd-icon',
    html: "&#9733;",
    iconSize: null
});

//Dragon Dev marker class
var ddIcon = L.divIcon({
    className: 'dd-icon',
    html: "&#9733;",
    iconSize: null
});

L.mapbox.accessToken = 'pk.eyJ1IjoiZHJlYW1sZWQiLCJhIjoiY2lmOWZ3dXI4MDAxbXVlbHkzZjcwd2dqcyJ9.C7u55GKKjraqiEnkRu9-LA';
// Create a map in the div #map
var map = L.mapbox.map('map', 'dreamled.cif9fwukg001rt0lxgykig72r').setView([40.014984, -105.270546], 6);
map.scrollWheelZoom.disable();
//Human Design Marker
var humanDesignM = L.marker([40.0177185, -105.2819596], {
    icon: hdIcon
}).addTo(map);

//Dragon Dev Marker
var dragonDevM = L.marker([40.0257011, -105.219432], {
    icon: ddIcon
}).addTo(map);

var dragondevDiv = $("#dragondev");
var humandesignDiv = $("#humandesign");


dragonDevM.on("click", function() {
    slideToSection("#dragondev", 500);
});

humanDesignM.on("click", function() {
    slideToSection("#humandesign", 500);
});
