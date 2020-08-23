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
ToDoList.prototype.arrSlice = function (arr) {
  const listBlock = arr;
  let indexStart = (toDoListPagination.activePage - 1) * 5;
  let indexEnd = indexStart + 5;
  const pieceArr = listBlock.slice(indexStart, indexEnd);
  return pieceArr;
};
// ToDoList.prototype.creatButton = function () {};
ToDoList.prototype.render = function () {
  this.cleanUpList();

  const todoList = this.list.filter((todoItem) => {
    if (Filter.status === FilterC.STATUS.active) {
      return todoItem.isActive;
    }
    if (Filter.status === FilterC.STATUS.inActive) {
      return !todoItem.isActive;
    }
    return true;
  });

  const arrToDoList = this.arrSlice(todoList);

  toDoListPagination.render(todoList.length);
  // toDoListPagination.page;
  // todoList = SomeClass.getArray(todoList, toDoListPagination.activePage);
  arrToDoList.forEach((todoItem, i) => {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const num = document.createElement("span");
    num.textContent = `${i + 1 + (toDoListPagination.activePage - 1) * 5}.`;
    const deleteButton = document.createElement("button");
    const val = document.createTextNode(todoItem.value);

    li.classList.add(todoItem.isActive ? "todo__item" : "todo__item__del");
    deleteButton.classList.add("delite__button");
    li.append(val);

    deleteButton.append(document.createTextNode("x"));

    li.prepend(num);
    div.prepend(li);
    div.prepend(deleteButton);
    list.append(div);

    li.addEventListener("click", () => {
      todoItem.isActive = !todoItem.isActive;
      this.render();

      // this.list = this.list.filter((todo) => todo.id !== todoItem.id);

      // this.list.unshift(todoItem);
    });
    deleteButton.addEventListener("click", (i) => {
      this.list.splice(i, 1);
      this.render();
    });
  });
};

var ToDoListController = new ToDoList();
