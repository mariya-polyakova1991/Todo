const buttons = [allList, activeList, completedList];

function FilterC() {
  this.status = JSON.parse(localStorage.getItem("filterStatus")) || 1;
}

FilterC.prototype.setInitialActiveButton = function () {
  const index = this.status - 1;
  const activeButton = buttons[index];

  activeButton.classList.add("todo__button__active");
};

FilterC.STATUS = {
  all: 1,
  active: 2,
  inActive: 3,
};

FilterC.prototype.removeClass = function (cls) {
  buttons.forEach((btn) => {
    btn.classList.remove(cls);
  });
};
FilterC.prototype.handlerFilterButton = function (status) {
  return function () {
    Filter.status = status;
    Filter.removeClass("todo__button__active");
    this.classList.add("todo__button__active");
    const filterStatus = localStorage.setItem(
      "filterStatus",
      JSON.stringify(Filter.status)
    );
    toDoListPagination.activePage = 1;

    ToDoListController.render();
  };
};
const Filter = new FilterC();

allList.addEventListener(
  "click",
  Filter.handlerFilterButton(FilterC.STATUS.all)
);

activeList.addEventListener(
  "click",
  Filter.handlerFilterButton(FilterC.STATUS.active)
);
completedList.addEventListener(
  "click",
  Filter.handlerFilterButton(FilterC.STATUS.inActive)
);

Filter.setInitialActiveButton();
