(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let A = "Oct 4, 2024 11:00:50",
      countDown = new Date(A).getTime(),
      x = setInterval(function() {    

        let now = new Date().getTime(),
            distance = countDown - now;

         document.getElementById("days").innerText =  Math.floor(distance / (day))  ,
          document.getElementById("hours").innerText =   Math.floor((distance % (day)) / (hour))   ,
          document.getElementById("minutes").innerText =  Math.floor((distance % (hour)) / (minute))  ,
          document.getElementById("seconds").innerText =  Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          let
              countdown = document.getElementById("countdown"),
              content = document.getElementById("content");
x
         
          // countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0)
  }());