var countdown = document.querySelector("#countdown")
var timer = document.querySelector("#countdown .timer")

var colors = [
    "rgba(208,239,177,.50)",
    "rgba(179,216,156,.50)",
    "rgba(157,195,194,.50)",
    "rgba(119,166,182,.50)",
    "rgba(77,114,152,.50)",
    "rgba(232,93,117,.50)"
]
var meetWithAnna = moment("2016 10 25", "YYYY MM DD").valueOf() / 1000
var now = moment().valueOf() / 1000
var timeLeft = Math.floor(meetWithAnna - now)

setInterval(function() {
    now = moment().valueOf() / 1000
    timeLeft = Math.floor(meetWithAnna - now)
    timer.innerHTML = timeLeft.toLocaleString()
}, 100)

var randomColor = Math.floor(Math.random() * colors.length)

setInterval(function() {
    randomColor = Math.floor(Math.random() * colors.length)
    countdown.style.backgroundColor = colors[randomColor]
}, 5000)