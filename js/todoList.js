function ToDoList() {
  const list = JSON.parse(localStorage.getItem("list")) || [];
  this.list = list;
}

ToDoList.prototype.addTodoItem = function (todoItem) {
  this.list.push(todoItem);
};

ToDoList.prototype.cleanUpList = function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

ToDoList.prototype.getTodosByPage = function (todoList) {
  let indexStart = (toDoListPagination.activePage - 1) * 5;
  let indexEnd = indexStart + 5;
  const list = todoList.slice(indexStart, indexEnd);
  return list;
};

ToDoList.prototype.getNumLabel = function (index) {
  return `${index + 1 + (toDoListPagination.activePage - 1) * 5}.`;
};

ToDoList.prototype.createTodoMarkUp = function (todoItem, index) {
  const li = document.createElement("li");
  const num = document.createElement("span");
  num.textContent = this.getNumLabel(index);
  const deleteButton = document.createElement("span");
  const val = document.createTextNode(todoItem.value);

  num.classList.add("number__li");
  li.classList.add(todoItem.isActive ? "todo__item" : "todo__item__del");
  deleteButton.classList.add("delete__button");
  li.append(val);

  deleteButton.append(document.createTextNode("x"));

  li.append(num);
  li.append(deleteButton);

  li.addEventListener("click", () => {
    todoItem.isActive = !todoItem.isActive;
    this.render();
  });
  deleteButton.addEventListener("click", () => {
    this.list.splice(index, 1);
    this.render();
  });
  return li;
};

ToDoList.prototype.saveListToStore = function () {
  localStorage.setItem("list", JSON.stringify(ToDoListController.list));
};

ToDoList.prototype.render = function () {
  this.cleanUpList();
  this.saveListToStore();
  let todoList = this.list.filter((todoItem) => {
    if (Filter.status === FilterC.STATUS.active) {
      return todoItem.isActive;
    }
    if (Filter.status === FilterC.STATUS.inActive) {
      return !todoItem.isActive;
    }
    return true;
  });
  toDoListPagination.render(todoList.length);

  todoList = this.getTodosByPage(todoList);

  const fragment = document.createDocumentFragment();
  todoList.forEach((todoItem, i) => {
    const tagLi = this.createTodoMarkUp(todoItem, i);
    fragment.append(tagLi);
  });
  list.append(fragment);
};

var ToDoListController = new ToDoList();
