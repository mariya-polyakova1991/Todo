function FilterC() {
  this.status = 1;
}

FilterC.STATUS = {
  all: 1,
  active: 2,
  inActive: 3,
};

const Filter = new FilterC();

allList.addEventListener("click", function () {
  Filter.status = FilterC.STATUS.all;
  toDoListPagination.activePage = 1;
  ToDoListController.render();
});
activeList.addEventListener("click", function () {
  Filter.status = FilterC.STATUS.active;
  toDoListPagination.activePage = 1;
  ToDoListController.render();
});
completedList.addEventListener("click", function () {
  Filter.status = FilterC.STATUS.inActive;
  toDoListPagination.activePage = 1;

  console.log("=======hhhhhhhh====");
  ToDoListController.render();
});
