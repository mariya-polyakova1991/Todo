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
  ToDoListController.render();
});
activeList.addEventListener("click", function () {
  Filter.status = FilterC.STATUS.active;
  ToDoListController.render();
});
completedList.addEventListener("click", function () {
  Filter.status = FilterC.STATUS.inActive;
  ToDoListController.render();
});
