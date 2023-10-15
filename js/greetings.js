const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const toDoClass = document.querySelector(".todo");
const ddayClass = document.querySelector(".dday");

const searchForm = document.querySelector("#search");
const searchInput = document.createElement("input");
const noConnection = document.createElement("h2");

const logOut = document.querySelector("#log-out img");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  searchForm.classList.remove(HIDDEN_CLASSNAME);
  toDoClass.classList.remove(HIDDEN_CLASSNAME);
  ddayClass.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function googleSubmit(event) {
  event.preventDefault();
  const words = searchInput.value;
  window.open(`https://www.google.com/search?q=${words}&oq=${words}`);
}

function handleLogOut(event) {
  localStorage.removeItem("username");
  location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

if (navigator.onLine) {
  searchForm.appendChild(searchInput);
  searchInput.placeholder = "Google Search";
  searchForm.addEventListener("submit", googleSubmit);
} else {
  searchForm.appendChild(noConnection);
  noConnection.innerText = "Offline Mode";
}

logOut.addEventListener("click", handleLogOut);
