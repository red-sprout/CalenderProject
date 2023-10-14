const clock = document.querySelector("#clock span");
const Am = document.querySelector(".ampm #am");
const Pm = document.querySelector(".ampm #pm");

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  if (hours > 12) {
    hours -= 12;
    changeAmPm(0.3, 1);
  } else if (hours == 12) {
    changeAmPm(0.3, 1);
  } else if (hours == 0) {
    hours = 12;
    changeAmPm(1, 0.3);
  } else {
    changeAmPm(1, 0.3);
  }

  hours = String(hours).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function changeAmPm(amOpacity, pmOpacity) {
  Am.style.opacity = amOpacity;
  Pm.style.opacity = pmOpacity;
}

getClock();
setInterval(getClock, 1000);
