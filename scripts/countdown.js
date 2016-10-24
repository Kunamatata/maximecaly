var moment = require('moment')

var countdown = document.querySelector("#countdown")
var timer = document.querySelector("#countdown .timer")
var hourTimer = document.querySelector("#countdown .hour-timer")
var dayTimer = document.querySelector("#countdown .day-timer")
var colors = [
  "rgba(208,239,177,.50)",
  "rgba(179,216,156,.50)",
  "rgba(157,195,194,.50)",
  "rgba(119,166,182,.50)",
  "rgba(77,114,152,.50)fo",
  "rgba(232,93,117,.50)"
]

var meetWithAnna = moment("2016 10 25 14:03", "YYYY MM DD hh:mm").valueOf() / 1000
var now = moment().valueOf() / 1000
var timeLeft = Math.floor(meetWithAnna - now)
var timeLeftHours = timeLeft / 3600
var timeLeftDays = timeLeft / 86400

function showTimeLeft() {
  now = moment().valueOf() / 1000

  timeLeft = Math.floor(meetWithAnna - now)
  timeLeftHours = timeLeft / 3600
  timeLeftDays = timeLeft / 86400

  timer.innerHTML = timeLeft.toLocaleString()
  hourTimer.innerHTML = timeLeftHours.toLocaleString()
  dayTimer.innerHTML = timeLeftDays.toLocaleString()
}

showTimeLeft()
setInterval(showTimeLeft, 1000)

var randomColor = Math.floor(Math.random() * colors.length)

setInterval(function() {
  randomColor = Math.floor(Math.random() * colors.length)
  countdown.style.backgroundColor = colors[randomColor]
}, 5000)