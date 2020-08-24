function FilterC() {
  this.status = 1;
}

FilterC.STATUS = {
  all: 1,
  active: 2,
  inActive: 3,
};

const Filter = new FilterC();

allList.classList.add("todo__button__active");

function removeClass(cls) {
  [activeList, allList, completedList].forEach((btn) => {
    btn.classList.remove(cls);
  });
}

function handlerFilterButton(status) {
  return function () {
    Filter.status = status;
    toDoListPagination.activePage = 1;
    removeClass("todo__button__active");
    this.classList.add("todo__button__active");
    ToDoListController.render();
  };
}

allList.addEventListener("click", handlerFilterButton(FilterC.STATUS.all));
activeList.addEventListener(
  "click",
  handlerFilterButton(FilterC.STATUS.active)
);
completedList.addEventListener(
  "click",
  handlerFilterButton(FilterC.STATUS.inActive)
);
