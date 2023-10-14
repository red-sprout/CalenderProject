const dateUpdate = document.querySelector("#date");
const candOfDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function getDate() {
  const date = new Date();
  const yearOfToday = String(date.getFullYear());
  const monthOfToday = String(date.getMonth() + 1).padStart(2, "0");
  const dateOfToday = String(date.getDate()).padStart(2, "0");
  const dayOfToday = date.getDay();
  dateUpdate.innerText = `${yearOfToday}.${monthOfToday}.${dateOfToday}  ${candOfDays[dayOfToday]}`;
}

getDate();
setInterval(getDate, 1000);
