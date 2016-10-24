var jquery = require('jquery')
var $ = require('jquery')

$.fn.extend({
  visible: function() {
    var rect = this[0].getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
})

setTimeout(function() {
  $("#weather").removeClass('hidden');
  $("#weather").addClass('come-in-right');
}, 1000)


$(window).scroll(function(event) {
  if ($("#humandesign a").visible()) {
    $("#humandesign .title").addClass('come-in-left');
  }
  if ($("#dragondev a").visible()) {
    $("#dragondev .title").addClass('come-in-right');
  }
});