document.addEventListener("DOMContentLoaded", function () {
  // Initialize Vanta.js Halo effect
  VANTA.HALO({
    el: "#vantajs",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
  });

  // Set the date we're counting down to
  var countDownDate = new Date("Jun 30, 2024 12:00:00").getTime();

  // Update the countdown every 1 second
  var countdownFunction = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is finished, display a message
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "We're Live!";
    }
  }, 1000);

  document
    .getElementById("subscribeForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("email").value;
      alert("Thank you for subscribing, " + email + "!");
      document.getElementById("email").value = "";
    });
});
