const {
  input,
  buttonAdd,
  list,
  allList,
  activeList,
  completedList,
} = _VARIABLES;

function ToDoItem(value) {
  this.id = Date.now();
  this.value = value;
  this.isActive = true;
}

function createTask() {
  const todoItem = new ToDoItem(input.value);
  ToDoListController.addTodoItem(todoItem);
  ToDoListController.render();

  input.value = "";
}

buttonAdd.addEventListener("click", function () {
  createTask();
});

document.addEventListener("keydown", function (evt) {
  if ((evt.keyCode === 13) & (!input.value == "")) {
    createTask();
  }
});
