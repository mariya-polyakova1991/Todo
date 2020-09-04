const {
  input,
  buttonAdd,
  list,
  allList,
  activeList,
  completedList,
  pages,
  pageButtons,
  ice,
  rainbow,
  forest,
  space,
  panda,
  black,
  blue,
  pink,
  menu,
  menuBtn,
  closeBtn,
} = _VARIABLES;

function ToDoItem(value) {
  this.id = Date.now();
  this.value = value;
  this.isActive = true;
}

ToDoItem.prototype.createTask = function () {
  ToDoListController.addTodoItem(this);
  ToDoListController.render();
  input.value = "";
};

buttonAdd.addEventListener("click", function () {
  const todoItem = new ToDoItem(input.value);
  todoItem.createTask();
});

document.addEventListener("keydown", function (evt) {
  if ((evt.keyCode === 13) & (!input.value == "")) {
    const todoItem = new ToDoItem(input.value);
    todoItem.createTask();
  }
});
