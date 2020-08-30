function FilterC() {
  this.status = JSON.parse(localStorage.getItem("filterStatus")) || 1;
}

FilterC.STATUS = {
  all: 1,
  active: 2,
  inActive: 3,
};

const Filter = new FilterC();

function removeClass(cls) {
  [activeList, allList, completedList].forEach((btn) => {
    btn.classList.remove(cls);
  });
}

function handlerFilterButton(status) {
  return function () {
    Filter.status = status;
    removeClass("todo__button__active");
    this.classList.add("todo__button__active");
    const filterStatus = localStorage.setItem(
      "filterStatus",
      JSON.stringify(Filter.status)
    );
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
