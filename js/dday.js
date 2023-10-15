const ddayForm = ddayClass.querySelector("#dday-form");
const ddayInput = ddayForm.querySelector("input");
const ddayList = ddayClass.querySelector("#dday-list");
const xdday = ddayClass.querySelector("#dday-close");

const DDAYS_KEY = "ddays";

let ddays = [];

const one_day = 1000 * 60 * 60 * 24;
let ddayStr = "";

function getClock(newdday) {
  try {
    const date = new Date();
    const year = newdday[0] + newdday[1] + newdday[2] + newdday[3];
    const month = newdday[5] + newdday[6];
    const day = newdday[8] + newdday[9];
    console.log(year + month + day);
    const targetDday = new Date(
      parseInt(year, 10),
      parseInt(month, 10) - 1,
      parseInt(day)
    );

    const days = Math.ceil((targetDday.getTime() - date.getTime()) / one_day);
    if (days == 0) {
      ddayStr = "D-day";
    } else if (days < 0) {
      ddayStr = `D+${Math.abs(days)}`;
    } else if (days > 0) {
      ddayStr = `D-${days}`;
    } else {
      ddayStr = "";
    }
  } catch {
    alert("Please write the date appropriately - (yyyy/mm/dd memo)");
    return;
  }
}

function saveddays() {
  localStorage.setItem(DDAYS_KEY, JSON.stringify(ddays));
}

function closedday(event) {
  event.preventDefault();
  ddayClass.classList.add(HIDDEN_CLASSNAME);
}

function deletedday(event) {
  const li = event.target.parentElement;
  li.remove();
  ddays = ddays.filter((dday) => dday.id !== parseInt(li.id));
  saveddays();
}

function paintdday(newdday) {
  const li = document.createElement("li");
  li.id = newdday.id;
  const span = document.createElement("span");
  const ddayTarget = newdday.text;
  getClock(ddayTarget);
  setInterval(getClock(ddayTarget), 1000);
  span.innerText = `(${ddayStr}) ${newdday.text}`;
  ddayStr = "";
  const button = document.createElement("img");
  button.src = "img/icon/trash.png";
  button.addEventListener("click", deletedday);
  button.style = "color: white; backgroundColor: transparent";
  li.appendChild(span);
  li.appendChild(button);
  ddayList.appendChild(li);
}

function handleddaySubmit(event) {
  event.preventDefault();
  const newdday = ddayInput.value;
  ddayInput.value = "";
  const newddayObj = {
    text: newdday,
    id: Date.now(),
  };
  ddays.push(newddayObj);
  paintdday(newddayObj);
  saveddays();
}

function handleOpenDday(event) {
  event.preventDefault();
  ddayClass.classList.toggle(HIDDEN_CLASSNAME);
}

ddayForm.addEventListener("submit", handleddaySubmit);
xdday.addEventListener("click", closedday);
openDday.addEventListener("click", handleOpenDday);

const savedddays = localStorage.getItem(DDAYS_KEY);
if (savedddays !== null) {
  const parsedddays = JSON.parse(savedddays);
  ddays = parsedddays;
  parsedddays.forEach(paintdday);
}
