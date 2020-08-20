function ToDoList() {
  this.list = [];
}

ToDoList.prototype.addTodoItem = function (todoItem) {
  this.list.push(todoItem);
};

ToDoList.prototype.cleanUpList = function () {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

ToDoList.prototype.render = function () {
  this.cleanUpList();
  const _this = this;

  const todoList = this.list.filter((todoItem) => {
    if (Filter.status === FilterC.STATUS.active) {
      return todoItem.isActive;
    }
    if (Filter.status === FilterC.STATUS.inActive) {
      return !todoItem.isActive;
    }
    return true;
  });

  // Pagination.render(todoList.length)
  // Pagination.activePage
  // todoList = SomeClass.getArray(todoList, Pagination.activePage)
  todoList.forEach((todoItem, i) => {
    const li = document.createElement("li");
    li.classList.add(todoItem.isActive ? "todo__item" : "todo__item__del");

    const val = document.createTextNode(todoItem.value);
    li.append(val);
    li.addEventListener("click", () => {
      todoItem.isActive = !todoItem.isActive;

      this.list = this.list.filter((todo) => todo.id !== todoItem.id);

      this.list.unshift(todoItem);

      this.render();
    });

    list.prepend(li);
  });
};

var ToDoListController = new ToDoList();
