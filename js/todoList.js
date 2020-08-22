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

  const listBlock = todoList;
  let indexStart = (toDoListPagination.activePage - 1) * 5;
  let indexEnd = indexStart + 5;
  const newItemList = listBlock.slice(indexStart, indexEnd);

  console.log("===========", toDoListPagination.activePage);

  toDoListPagination.render(todoList.length);
  // toDoListPagination.page;
  // todoList = SomeClass.getArray(todoList, toDoListPagination.activePage);
  newItemList.forEach((todoItem) => {
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
