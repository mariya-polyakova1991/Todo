const {
  input,
  buttonAdd,
  list,
  allList,
  activeList,
  completedList,
} = _VARIABLES;

const arrAll = [];

function ToDoItem(value) {
  this.id = Date.now();
  this.value = value;
  this.isActive = true;
}

list.addEventListener("click", function (e) {
  console.log("=======e=target===", e.target.classList);
});

let filter = 1;

// all - 1
// active - 2
// completed - 3

ToDoItem.prototype.add = function () {
  if (!this.value == "") {
    arrAll.push(this);

    console.log("=====arrAll======", arrAll);
    const li = document.createElement("li");
    li.classList = "todo__item";
    li.innerHTML = this.value;
    const val = this.value;
    const id = this.id;
    li.addEventListener("click", function () {
      console.log("val", val);
      this.isActive = false;
      this.completed = true;
      filter = 3;
      li.classList = "todo__item__del";
      // li.addEventListener("click", function () {
      //   this.isActive = true;
      //   filter = 2;
      //   li.classList = "todo__item";

      //   console.log("=======arrAll====", arrAll);
      // });
    });
    // createTextNode
    // append
    li.dataset.id = id;

    list.prepend(li);
  }
};

function createTask() {
  const todoItem = new ToDoItem(input.value);
  // TodoList.addTodoItem(todoItem)
  // TodoList.render()
  todoItem.add();
  todoItem.render();

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
