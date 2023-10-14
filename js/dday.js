const ddayClass = document.querySelector(".dday");
const ddayForm = ddayClass.querySelector("#dday-form");
const ddayInput = ddayForm.querySelector("input");
const ddayList = ddayClass.querySelector("#dday-list");
const xdday = ddayClass.querySelector("#dday-close");

const DDAYS_KEY = "ddays";

let ddays = [];

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
  span.innerText = newdday.text;
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

ddayForm.addEventListener("submit", handleddaySubmit);
xdday.addEventListener("click", closedday);

const savedddays = localStorage.getItem(DDAYS_KEY);
if (savedddays !== null) {
  const parsedddays = JSON.parse(savedddays);
  ddays = parsedddays;
  parsedddays.forEach(paintdday);
}
