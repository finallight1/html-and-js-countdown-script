// В ваш HTML документ вставьте id="countdown" в один из ваших тэгов.
var countDownDate = new Date("Mar 12, 2020 00:00:00").getTime(); // Ставьте дату сдесь.
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Конечный текст тут"; // Сдесь ставьте текст когда время закончиться.
  }
}, 1000);
// Скрипт Обратного Отчёта сделан ...