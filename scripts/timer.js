const timerCounters=document.querySelectorAll(".timer__counter"),timerTitleDate=document.querySelector(".timer__title-date"),countDownDate=new Date(2022,4,25);function setCountDownDate(e){var t=e.getDate(),n=e.toLocaleString("en-us",{month:"short"}),e=e.getFullYear();timerTitleDate.innerText=`${t} ${n} ${e}`}function countDown(e){e=e.getTime()-(new Date).getTime();let t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4),r=Math.floor(e%6e4/1e3);t=t<10?"0"+t:t,n=n<10?"0"+n:n,o=o<10?"0"+o:o,r=r<10?"0"+r:r,timerCounters[0].innerText=t,timerCounters[1].innerText=n,timerCounters[2].innerText=o,timerCounters[3].innerText=r}setCountDownDate(countDownDate),setInterval(countDown,500,countDownDate);