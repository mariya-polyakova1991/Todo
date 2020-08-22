function Pagination() {
  this.isNoActive = true;
  this.activePage = 1;
}

// Pagination.prototype.addTodoItem = function (todoItem) {
//   this.list.push(todoItem);
// };

Pagination.prototype.cleanUpList = function () {
  while (pages.firstChild) {
    pages.removeChild(pages.firstChild);
  }
};

Pagination.prototype.deleteClass = function () {
  [...paginItem].forEach((element) => {
    element.classList.remove("page__active");
  });
};

Pagination.prototype.render = function (length) {
  this.cleanUpList();

  // const todoList = this.lenght.filter((todoItem) => {
  //   if (Filter.status === FilterC.STATUS.active) {
  //     return todoItem.isActive;
  //   }
  //   if (Filter.status === FilterC.STATUS.inActive) {
  //     return !todoItem.isActive;
  //   }
  //   return true;
  // });

  const count = length;
  console.log("========this.count===", count);

  let maxElement = 5;
  let page = 1;
  let pageNumbers = Math.ceil(count / maxElement);
  for (let i = 0; i < pageNumbers; i++) {
    const li = document.createElement("li");
    li.classList.add("page__noActive");

    const val = document.createTextNode(page);
    li.append(val);

    li.addEventListener("click", () => {
      this.deleteClass();
      li.classList.add("page__active");
      this.activePage = i + 1;
      console.log("i", this.activePage);
      ToDoListController.render();
    });
    page++;
    pages.append(li);
  }
};

var toDoListPagination = new Pagination();
