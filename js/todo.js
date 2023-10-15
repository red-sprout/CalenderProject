const toDoForm = toDoClass.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = toDoClass.querySelector("#todo-list");
const xToDo = toDoClass.querySelector("#todo-close");
const openTodo = document.querySelector("#open-todo");

const TODOS_KEY = "todos";
const CHECKED_KEY = "checkedTodo";
const MIDDLE_LINE = "checked";

let toDos = [];
let checkedBoxes = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveCheckedToDos() {
  localStorage.setItem(CHECKED_KEY, JSON.stringify(completeDos));
}

function closeToDo(event) {
  event.preventDefault();
  toDoClass.classList.add(HIDDEN_CLASSNAME);
}

function checkedCheck(event) {
  const li = event.target.parentElement;
  const label = li.querySelector("label");
  const input = label.querySelector("input");

  if (event.target.checked == true) {
    const checkedTodo = input.value;
    const checkedTodoObj = {
      text: checkedTodo,
      id: parseInt(li.id),
    };

    checkedBoxes.push(checkedTodoObj);
    saveCompleteToDos();
    input.classList.add(MIDDLE_LINE);
  } else {
    input.classList.remove(MIDDLE_LINE);
    checkedBoxes = checkedBoxes.filter(
      (element) => element.id !== parseInt(li.id)
    );
    saveCompleteToDos();
  }
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const label = document.createElement("label");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const checkBox = document.createElement("input");
  const button = document.createElement("img");

  checkBox.type = "checkbox";
  button.src = "img/icon/trash.png";
  button.addEventListener("click", deleteToDo);
  button.style = "color: white; backgroundColor: transparent";

  li.appendChild(label);
  label.appendChild(checkBox);
  label.appendChild(span);
  label.appendChild(button);
  toDoList.appendChild(li);

  if (checkBox.checked) {
    span.classList.add(MIDDLE_LINE);
  } else {
    span.classList.remove(MIDDLE_LINE);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function handleOpenToDo(event) {
  event.preventDefault();
  toDoClass.classList.toggle(HIDDEN_CLASSNAME);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
xToDo.addEventListener("click", closeToDo);
openTodo.addEventListener("click", handleOpenToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);
const checkedToDos = localStorage.getItem(CHECKED_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (checkedToDos !== null) {
  const parsedChecked = JSON.parse(chekcedToDos);
  checked = parsedChecked;
  parsedChecked.forEach(paintToDo);
}
